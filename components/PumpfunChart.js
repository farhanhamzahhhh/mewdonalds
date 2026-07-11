"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function PumpfunChart() {
  const chartContainerRef = useRef();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Contract Address (Mint Address) dari token.
    // Address yang Anda berikan: J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump
    const TOKEN_ADDRESS = "J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump";
    
    // API 1: Cari Pool Address berdasarkan Token Address
    const POOL_API_URL = `https://api.geckoterminal.com/api/v2/networks/solana/tokens/${TOKEN_ADDRESS}/pools`;

    let chart = null;

    const fetchDataAndRender = async () => {
      try {
        // 1. Dapatkan Pool Address
        const poolResponse = await fetch(POOL_API_URL);
        if (!poolResponse.ok) throw new Error("Gagal mencari pool untuk token ini. (Mungkin token terlalu baru)");
        const poolData = await poolResponse.json();
        
        if (!poolData.data || poolData.data.length === 0) {
           throw new Error("Pool tidak ditemukan untuk token ini di GeckoTerminal.");
        }
        
        const POOL_ADDRESS = poolData.data[0].attributes.address;

        // 2. Fetch data OHLCV menggunakan Pool Address
        const OHLCV_API_URL = `https://api.geckoterminal.com/api/v2/networks/solana/pools/${POOL_ADDRESS}/ohlcv/hour?aggregate=1&limit=100`;
        const response = await fetch(OHLCV_API_URL);
        if (!response.ok) throw new Error("Gagal mengambil data grafik (OHLCV)");
        const data = await response.json();

        const ohlcvList = data.data.attributes.ohlcv_list;
        
        const formattedData = ohlcvList.map(item => ({
          time: item[0], // Unix timestamp in seconds
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        })).reverse(); // Reverse to oldest -> newest for lightweight-charts

        chart = createChart(chartContainerRef.current, {
          layout: {
            background: { type: 'solid', color: 'transparent' },
            textColor: '#d1d5db',
          },
          grid: {
            vertLines: { color: '#374151' },
            horzLines: { color: '#374151' },
          },
          width: chartContainerRef.current.clientWidth,
          height: 400,
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
          }
        });

        const candlestickSeries = chart.addSeries(CandlestickSeries, {
          upColor: '#22c55e', 
          downColor: '#ef4444', 
          borderVisible: false,
          wickUpColor: '#22c55e',
          wickDownColor: '#ef4444',
        });

        candlestickSeries.setData(formattedData);
        chart.timeScale().fitContent();
        setLoading(false);

        // Handle window resize
        const handleResize = () => {
          if (chartContainerRef.current && chart) {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
          }
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
      } catch (err) {
        console.error(err);
        setError("Failed to load chart data");
        setLoading(false);
      }
    };

    fetchDataAndRender();

    return () => {
      if (chart) {
        chart.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mt-12 bg-black border-4 border-mewdonRed rounded-2xl p-4 shadow-xl glow-red">
      <h2 className="text-center font-stopbuck text-mewdonYellow text-xl mb-4">LIVE CHART (TESTING)</h2>
      
      <div className="relative w-full h-[400px]">
        {loading && <p className="absolute inset-0 flex items-center justify-center text-white z-10">Loading chart data...</p>}
        {error && <p className="absolute inset-0 flex items-center justify-center text-red-500 z-10">{error}</p>}
        
        <div 
          ref={chartContainerRef} 
          className={`w-full h-full ${error ? 'hidden' : 'block'}`}
        />
      </div>
    </div>
  );
}
