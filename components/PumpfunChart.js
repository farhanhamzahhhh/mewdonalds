"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries, HistogramSeries } from "lightweight-charts";

export default function PumpfunChart() {
  const chartContainerRef = useRef();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [marketStats, setMarketStats] = useState({
    price: 0,
    mcap: 0,
    change24h: 0,
    change24hValue: 0,
    ath: 0,
    volume24h: 0,
  });

  const [hoverData, setHoverData] = useState(null);

  useEffect(() => {
    // Contract Address (Mint Address) dari token.
    const TOKEN_ADDRESS = "J8PSdNP3QewKq2Z1JJJFDMaqF7KcaiJhR7gbr5KZpump";
    const POOL_API_URL = `https://api.geckoterminal.com/api/v2/networks/solana/tokens/${TOKEN_ADDRESS}/pools`;

    let chart = null;

    const fetchDataAndRender = async () => {
      try {
        const poolResponse = await fetch(POOL_API_URL);
        if (!poolResponse.ok) throw new Error("Gagal mencari pool");
        const poolData = await poolResponse.json();
        
        if (!poolData.data || poolData.data.length === 0) {
           throw new Error("Pool tidak ditemukan");
        }
        
        const POOL_ADDRESS = poolData.data[0].attributes.address;
        const OHLCV_API_URL = `https://api.geckoterminal.com/api/v2/networks/solana/pools/${POOL_ADDRESS}/ohlcv/hour?aggregate=1&limit=100`;
        const response = await fetch(OHLCV_API_URL);
        if (!response.ok) throw new Error("Gagal mengambil data");
        const data = await response.json();

        const ohlcvList = data.data.attributes.ohlcv_list;
        
        // Reverse for lightweight-charts (oldest first)
        const reversedList = [...ohlcvList].reverse();

        const candleData = [];
        const volumeData = [];
        
        let maxHigh = 0;
        let totalVolume24h = 0;
        const TOTAL_SUPPLY = 1_000_000_000; // Standard 1B supply for solana meme coins

        reversedList.forEach((item, index) => {
          const time = item[0];
          // Multiply by total supply so the chart native values are in Market Cap USD
          const open = item[1] * TOTAL_SUPPLY;
          const high = item[2] * TOTAL_SUPPLY;
          const low = item[3] * TOTAL_SUPPLY;
          const close = item[4] * TOTAL_SUPPLY;
          const volume = item[5]; // Volume is usually in USD from GeckoTerminal

          if (high > maxHigh) maxHigh = high;

          candleData.push({ time, open, high, low, close });
          
          const isGreen = close >= open;
          volumeData.push({
            time,
            value: volume,
            color: isGreen ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'
          });

          // Calculate 24h volume (last 24 items since it's hourly)
          if (index >= reversedList.length - 24) {
             totalVolume24h += volume;
          }
        });

        // Calculate stats
        const currentMcap = candleData[candleData.length - 1].close;
        const mcap24hAgo = candleData.length > 24 ? candleData[candleData.length - 24].close : candleData[0].close;
        
        const change24hValue = currentMcap - mcap24hAgo;
        const change24hPercent = (change24hValue / mcap24hAgo) * 100;
        
        setMarketStats({
          price: currentMcap / TOTAL_SUPPLY,
          mcap: currentMcap,
          change24h: change24hPercent,
          change24hValue: change24hValue,
          ath: maxHigh,
          volume24h: totalVolume24h
        });

        chart = createChart(chartContainerRef.current, {
          layout: {
            background: { type: 'solid', color: 'transparent' },
            textColor: '#9ca3af',
          },
          grid: {
            vertLines: { color: '#2d3748', style: 1 },
            horzLines: { color: '#2d3748', style: 1 },
          },
          rightPriceScale: {
            borderVisible: false,
          },
          timeScale: {
            borderVisible: false,
            timeVisible: true,
            secondsVisible: false,
          },
          crosshair: {
            mode: 1, // Normal mode
            vertLine: {
              color: '#4b5563',
              style: 3, // dashed
              labelBackgroundColor: '#2d3748',
            },
            horzLine: {
              color: '#4b5563',
              style: 3,
              labelBackgroundColor: '#2d3748',
            }
          },
          localization: {
            priceFormatter: (price) => {
              if (Math.abs(price) >= 1e6) return (price / 1e6).toFixed(2) + 'M';
              if (Math.abs(price) >= 1e3) return (price / 1e3).toFixed(2) + 'K';
              return price.toFixed(2);
            },
          },
        });

        const candlestickSeries = chart.addSeries(CandlestickSeries, {
          upColor: '#22c55e', 
          downColor: '#ef4444', 
          borderVisible: false,
          wickUpColor: '#22c55e',
          wickDownColor: '#ef4444',
        });
        
        chart.priceScale('right').applyOptions({
          scaleMargins: {
            top: 0.1,
            bottom: 0.25,
          },
        });
        candlestickSeries.setData(candleData);

        const volumeSeries = chart.addSeries(HistogramSeries, {
          priceFormat: { type: 'volume' },
          priceScaleId: '', // detach from right scale
        });
        
        // Anchor volume to the bottom
        chart.priceScale('').applyOptions({
          scaleMargins: {
            top: 0.8, // volume takes bottom 20%
            bottom: 0,
          },
        });
        volumeSeries.setData(volumeData);

        chart.timeScale().fitContent();
        setLoading(false);

        // Hover logic
        chart.subscribeCrosshairMove((param) => {
          if (param.time && param.seriesData.size > 0) {
            const candle = param.seriesData.get(candlestickSeries);
            const vol = param.seriesData.get(volumeSeries);
            if (candle && vol) {
               setHoverData({
                 time: param.time,
                 open: candle.open,
                 high: candle.high,
                 low: candle.low,
                 close: candle.close,
                 volume: vol.value
               });
            }
          } else {
            setHoverData(null); // Reset when hovering out
          }
        });

        // Resize handler
        const handleResize = () => {
          if (chartContainerRef.current && chart) {
            chart.applyOptions({ 
              width: chartContainerRef.current.clientWidth, 
              height: chartContainerRef.current.clientHeight 
            });
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
      if (chart) chart.remove();
    };
  }, []);

  // Formatters
  const formatMoney = (val) => {
    if (val === undefined || val === null) return "$0.00";
    if (Math.abs(val) >= 1e6) return `$${(val / 1e6).toFixed(2)}M`;
    if (Math.abs(val) >= 1e3) return `$${(val / 1e3).toFixed(2)}K`;
    return `$${val.toFixed(2)}`;
  };
  
  const formatChange = (val) => {
    const sign = val > 0 ? '+' : '';
    return `${sign}${val.toFixed(2)}%`;
  };

  const getATHProgress = () => {
    if (marketStats.ath === 0) return 0;
    const progress = (marketStats.mcap / marketStats.ath) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const progress = getATHProgress();

  return (
    <div className="w-full max-w-5xl mt-12 bg-[#121214] border border-[#2d2d33] rounded-xl overflow-hidden shadow-2xl relative font-sans h-[550px] flex flex-col">
      {/* Header Area (Distinct background) */}
      <div className="w-full p-4 bg-[#0a0a0c] border-b border-[#2d2d33] z-10 flex flex-col shrink-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
           
           {/* Left Stats */}
           <div>
              <div className="flex items-end gap-3 flex-wrap">
                 <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                    {formatMoney(marketStats.mcap)}
                 </span>
                 <div className="flex items-center gap-2 mb-1">
                    <span className={marketStats.change24h >= 0 ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
                      {marketStats.change24hValue >= 0 ? "+" : "-"}{formatMoney(Math.abs(marketStats.change24hValue))}
                    </span>
                    <span className={marketStats.change24h >= 0 ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
                      ({formatChange(marketStats.change24h)})
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm uppercase font-semibold">24hr</span>
                 </div>
              </div>
           </div>

           {/* Right ATH Progress */}
           <div className="w-full sm:w-64 max-w-full">
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 font-semibold mb-1">
                 <span></span>
                 <span>ATH {formatMoney(marketStats.ath)}</span>
              </div>
              <div className="w-full bg-[#2a2a30] h-1.5 sm:h-2 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full transition-all duration-1000" 
                   style={{ width: `${progress}%` }}
                 />
              </div>
           </div>
        </div>

        {/* Toolbar Row */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 text-[10px] sm:text-xs font-semibold">
           <button className="text-gray-400 hover:text-white transition border-b-2 border-transparent hover:border-gray-400 pb-1">1D</button>
           <button className="text-gray-400 hover:text-white transition flex items-center gap-1">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
           </button>
           <button className="text-gray-400 hover:text-white transition">Trade Display</button>
           <button className="text-gray-400 hover:text-white transition">Show All Bubbles</button>
           
           <div className="flex items-center gap-1 ml-auto">
             <button className="text-white border-b-2 border-green-500 pb-1">Price/MCap</button>
           </div>
           <div className="flex items-center gap-1 ml-2 sm:ml-4">
             <button className="text-green-400 hover:text-white transition">USD</button>
             <span className="text-gray-600">/</span>
             <button className="text-white border-b-2 border-green-500 pb-1">SOL</button>
           </div>
        </div>

        {/* Dynamic Legend */}
        <div className="mt-3 sm:mt-4 text-[9px] sm:text-[11px] text-gray-400 font-mono flex flex-wrap gap-2 sm:gap-4 items-center">
           <span className="text-gray-300">$MEWDON/SOL Market Cap (USD) • 1H • Pump</span>
           {hoverData ? (
             <>
               <span>O <span className={hoverData.close >= hoverData.open ? 'text-green-500' : 'text-red-500'}>{formatMoney(hoverData.open)}</span></span>
               <span>H <span className={hoverData.close >= hoverData.open ? 'text-green-500' : 'text-red-500'}>{formatMoney(hoverData.high)}</span></span>
               <span>L <span className={hoverData.close >= hoverData.open ? 'text-green-500' : 'text-red-500'}>{formatMoney(hoverData.low)}</span></span>
               <span>C <span className={hoverData.close >= hoverData.open ? 'text-green-500' : 'text-red-500'}>{formatMoney(hoverData.close)}</span></span>
               <span>Volume <span className="text-green-400">{formatMoney(hoverData.volume)}</span></span>
             </>
           ) : (
             <>
               {/* Default Legend state when not hovering */}
               <span>O <span className="text-gray-500">-</span></span>
               <span>H <span className="text-gray-500">-</span></span>
               <span>L <span className="text-gray-500">-</span></span>
               <span>C <span className="text-gray-500">-</span></span>
               <span>Volume <span className="text-gray-500">-</span></span>
             </>
           )}
        </div>
      </div>

      {/* Chart Canvas Container */}
      <div className="flex-1 relative w-full h-full min-h-[350px]">
        {loading && <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-10 bg-[#121214]/50 text-sm font-semibold tracking-wider pointer-events-none">Loading Market Data...</div>}
        {error && <div className="absolute inset-0 flex items-center justify-center text-red-500 z-10 bg-[#121214]/50 pointer-events-none">{error}</div>}
        <div 
          ref={chartContainerRef} 
          className={`absolute inset-0 w-full h-full ${error ? 'hidden' : 'block'}`}
        />
        
        {/* Watermark Logo Mock */}
        <div className="absolute bottom-6 left-6 z-0 opacity-[0.03] pointer-events-none hidden sm:block">
           <div className="text-8xl font-black italic transform -rotate-12">MEWDON</div>
        </div>
      </div>

      {/* Footer Area (Distinct background) */}
      <div className="w-full px-4 py-2 bg-[#0a0a0c] border-t border-[#2d2d33] z-10 flex flex-wrap justify-between items-center shrink-0 gap-4">
        
        {/* Bottom Timeframes */}
        <div className="flex gap-3 text-xs font-semibold items-center">
           <button className="text-white hover:text-green-400 transition bg-gray-800/50 px-2 rounded py-0.5">1D</button>
           <button className="text-gray-500 hover:text-white transition">5D</button>
           <button className="text-gray-500 hover:text-white transition">1M</button>
           <button className="text-gray-500 hover:text-white transition">3M</button>
           <button className="text-gray-500 hover:text-white transition">1Y</button>
           <div className="w-px h-3 bg-gray-700 mx-1 hidden sm:block"></div>
           <button className="text-gray-500 hover:text-white transition flex items-center justify-center hidden sm:flex">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
           </button>
        </div>
        
        {/* Settings Right Icons */}
        <div className="flex gap-3 text-[11px] font-semibold text-gray-500 items-center">
            <button className="hover:text-white transition">%</button>
            <button className="hover:text-white transition">log</button>
            <button className="text-green-500 hover:text-green-400 transition">auto</button>
            <button className="hover:text-white transition ml-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
        </div>
      </div>
    </div>
  );
}
