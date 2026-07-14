"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries, HistogramSeries } from "lightweight-charts";

export default function PumpfunChart() {
  const chartContainerRef = useRef();

  // Lightweight charts references
  const chartRef = useRef(null);
  const candleSeriesRef = useRef(null);
  const volumeSeriesRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Market Stats
  const [marketStats, setMarketStats] = useState({
    price: 0,
    mcap: 0,
    change24h: 0,
    change24hValue: 0,
    ath: 0,
    volume24h: 0,
  });
  const [hoverData, setHoverData] = useState(null);

  // Raw data from API
  const [rawData, setRawData] = useState(null);
  const [solPrice, setSolPrice] = useState(null);

  // Chart interaction states
  const [priceMode, setPriceMode] = useState(0); // 0 = Normal, 1 = Log, 2 = Percentage
  const [isAuto, setIsAuto] = useState(true);
  const [timeframe, setTimeframe] = useState("1D"); // Bottom scale timeframe

  // Header Toggle States
  const [isMcap, setIsMcap] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [candleInterval, setCandleInterval] = useState("1H");

  const TOTAL_SUPPLY = 1_000_000_000;

  // 1. Initial Chart Setup
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: 'solid', color: 'transparent' },
        textColor: '#9ca3af',
      },
      grid: {
        vertLines: { color: 'rgba(45, 55, 72, 0.3)', style: 1 },
        horzLines: { color: 'rgba(45, 55, 72, 0.3)', style: 1 },
      },
      rightPriceScale: {
        borderVisible: false,
        visible: true,
        autoScale: true,
        scaleMargins: { top: 0.1, bottom: 0.25 },
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
        visible: true,
      },
      crosshair: {
        mode: 1,
        vertLine: { color: '#9ca3af', style: 3, labelBackgroundColor: '#2d3748' },
        horzLine: { color: '#9ca3af', style: 3, labelBackgroundColor: '#2d3748' }
      },
      handleScroll: { mouseWheel: true, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: true },
      handleScale: { axisPressedMouseMove: { time: true, price: true }, mouseWheel: true, pinch: true },
    });

    chartRef.current = chart;

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });
    candleSeriesRef.current = candlestickSeries;

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceFormat: { type: 'volume' },
      priceScaleId: '',
    });

    chart.priceScale('').applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    });
    volumeSeriesRef.current = volumeSeries;

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
        setHoverData(null);
      }
    });

    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || entries[0].target !== chartContainerRef.current) return;
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    });
    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  // 2. Fetch Data when candleInterval changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let currentSolPrice = solPrice;
        if (!currentSolPrice) {
          const solRes = await fetch("https://api.geckoterminal.com/api/v2/simple/networks/solana/token_price/So11111111111111111111111111111111111111112");
          if (solRes.ok) {
            const solData = await solRes.json();
            currentSolPrice = parseFloat(solData.data.attributes.token_prices.So11111111111111111111111111111111111111112);
            setSolPrice(currentSolPrice);
          }
        }

        // Hardcode pool address to save 1 API call per timeframe click
        const POOL_ADDRESS = "HHqwzt38BZ1m145SHqAmAwATYbtEAC99oeBF6eg29EEH";

        let endpoint = "hour?aggregate=1";
        if (candleInterval === "1m") endpoint = "minute?aggregate=1";
        else if (candleInterval === "5m") endpoint = "minute?aggregate=5";
        else if (candleInterval === "15m") endpoint = "minute?aggregate=15";
        else if (candleInterval === "1H") endpoint = "hour?aggregate=1";
        else if (candleInterval === "4H") endpoint = "hour?aggregate=4";
        else if (candleInterval === "1D") endpoint = "day?aggregate=1";

        const OHLCV_API_URL = `https://api.geckoterminal.com/api/v2/networks/solana/pools/${POOL_ADDRESS}/ohlcv/${endpoint}&limit=200`;
        const response = await fetch(OHLCV_API_URL);

        if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please wait a minute.");
        }
        if (!response.ok) throw new Error("Gagal mengambil data");

        const data = await response.json();

        // Reverse for oldest first
        const reversedList = [...data.data.attributes.ohlcv_list].reverse();
        setRawData(reversedList);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load chart data");
        setLoading(false);
      }
    };

    fetchData();
  }, [candleInterval]);

  // 3. Render Data based on toggles
  useEffect(() => {
    if (!rawData || !candleSeriesRef.current || !volumeSeriesRef.current || !chartRef.current) return;

    const candleData = [];
    const volumeData = [];

    let maxHigh = 0;
    let totalVolume24h = 0;

    const multiplier = isMcap ? TOTAL_SUPPLY : 1;
    const divider = (currency === "SOL" && solPrice) ? solPrice : 1;

    rawData.forEach((item, index) => {
      const time = item[0];
      // Item format: [time, open, high, low, close, volume]
      // gecko returns prices in USD base
      const open = (item[1] * multiplier) / divider;
      const high = (item[2] * multiplier) / divider;
      const low = (item[3] * multiplier) / divider;
      const close = (item[4] * multiplier) / divider;
      const volume = item[5] / divider; // Volume converted to SOL if needed

      if (high > maxHigh) maxHigh = high;

      candleData.push({ time, open, high, low, close });

      const isGreen = close >= open;
      volumeData.push({
        time,
        value: volume,
        color: isGreen ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'
      });

      // Calculate 24h volume (approximation based on available data)
      if (index >= rawData.length - 24) {
        totalVolume24h += volume;
      }
    });

    // Update Series
    candleSeriesRef.current.setData(candleData);
    volumeSeriesRef.current.setData(volumeData);

    // Update Market Stats
    if (candleData.length > 0) {
      const currentPrice = candleData[candleData.length - 1].close;
      const price24hAgo = candleData.length > 24 ? candleData[candleData.length - 24].close : candleData[0].close;

      const change24hValue = currentPrice - price24hAgo;
      const change24hPercent = (change24hValue / price24hAgo) * 100;

      setMarketStats({
        price: currentPrice / (isMcap ? TOTAL_SUPPLY : 1),
        mcap: isMcap ? currentPrice : currentPrice * TOTAL_SUPPLY, // mcap is always supply * token price
        change24h: change24hPercent,
        change24hValue: change24hValue,
        ath: maxHigh,
        volume24h: totalVolume24h
      });
    }

    // Auto fit
    if (isAuto) {
      chartRef.current.timeScale().fitContent();
    }
  }, [rawData, isMcap, currency, solPrice, isAuto]);

  // Sync Price Mode to Chart (Percent / Log / Normal)
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.priceScale('right').applyOptions({
        mode: priceMode, // 0 = Normal, 1 = Log, 2 = Percentage
      });

      chartRef.current.applyOptions({
        localization: {
          priceFormatter: (price) => {
            if (priceMode === 2) return price.toFixed(2) + '%';

            // SOL format (more decimals) vs USD
            const isSol = currency === "SOL";
            const minDecimals = isSol ? 4 : 2;

            if (Math.abs(price) >= 1e6) return (price / 1e6).toFixed(minDecimals) + 'M';
            if (Math.abs(price) >= 1e3) return (price / 1e3).toFixed(minDecimals) + 'K';

            // Very small numbers
            if (Math.abs(price) < 0.0001 && price !== 0) return price.toExponential(4);
            return price.toFixed(minDecimals);
          },
        }
      });
    }
  }, [priceMode, currency]);

  const togglePercent = () => setPriceMode(prev => prev === 2 ? 0 : 2);
  const toggleLog = () => setPriceMode(prev => prev === 1 ? 0 : 1);
  const triggerAuto = () => {
    setIsAuto(true);
    if (chartRef.current) {
      chartRef.current.priceScale('right').applyOptions({ autoScale: true });
      chartRef.current.timeScale().fitContent();
    }
  };
  const handleTimeframe = (tf) => {
    setTimeframe(tf);
    if (chartRef.current) chartRef.current.timeScale().fitContent();
  };

  // Formatters
  const formatMoney = (val) => {
    if (val === undefined || val === null) return "0.00";
    const prefix = currency === "USD" ? "$" : "◎";
    const isSol = currency === "SOL";
    const minDecimals = isSol ? 4 : 2;

    if (Math.abs(val) >= 1e6) return `${prefix}${(val / 1e6).toFixed(minDecimals)}M`;
    if (Math.abs(val) >= 1e3) return `${prefix}${(val / 1e3).toFixed(minDecimals)}K`;

    if (Math.abs(val) < 0.0001 && val !== 0) return `${prefix}${val.toExponential(4)}`;
    return `${prefix}${val.toFixed(minDecimals)}`;
  };

  const formatChange = (val) => {
    const sign = val > 0 ? '+' : '';
    return `${sign}${val.toFixed(2)}%`;
  };

  const getATHProgress = () => {
    if (marketStats.ath === 0) return 0;
    // value we compare depends on isMcap
    const currentVal = isMcap ? marketStats.mcap : marketStats.price;
    const progress = (currentVal / marketStats.ath) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };
  const progress = getATHProgress();

  return (
    <div className="w-full max-w-5xl mt-12 bg-[#121214] border border-[#2d2d33] rounded-xl overflow-hidden shadow-2xl relative font-sans h-[550px] flex flex-col">
      {/* Header Area */}
      <div className="w-full p-4 bg-[#0a0a0c] border-b border-[#2d2d33] z-10 flex flex-col shrink-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
          {/* Left Stats */}
          <div>
            <div className="flex items-end gap-3 flex-wrap">
              <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                {formatMoney(isMcap ? marketStats.mcap : marketStats.price)}
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
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 text-[10px] sm:text-xs font-semibold items-center">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMcap(false)}
              className={`transition pb-1 border-b-2 ${!isMcap ? 'text-white border-green-500' : 'text-gray-400 border-transparent hover:text-white'}`}
            >Price</button>
            <span className="text-gray-600">/</span>
            <button
              onClick={() => setIsMcap(true)}
              className={`transition pb-1 border-b-2 ${isMcap ? 'text-white border-green-500' : 'text-gray-400 border-transparent hover:text-white'}`}
            >MCap</button>
          </div>

          <div className="flex items-center gap-1 ml-2 sm:ml-4">
            <button
              onClick={() => setCurrency("USD")}
              className={`transition pb-1 border-b-2 ${currency === 'USD' ? 'text-green-400 border-green-500' : 'text-gray-400 border-transparent hover:text-white'}`}
            >USD</button>
            <span className="text-gray-600">/</span>
            <button
              onClick={() => setCurrency("SOL")}
              className={`transition pb-1 border-b-2 ${currency === 'SOL' ? 'text-white border-green-500' : 'text-gray-400 border-transparent hover:text-white'}`}
            >SOL</button>
          </div>
        </div>

        {/* Dynamic Legend */}
        <div className="mt-3 sm:mt-4 text-[9px] sm:text-[11px] text-gray-400 font-mono flex flex-wrap gap-2 sm:gap-4 items-center">
          <span className="text-gray-300">$MEWDON/{currency} {isMcap ? 'Market Cap' : 'Price'} • {candleInterval} • Pump</span>
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
        {loading && <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-10 bg-[#121214]/80 text-sm font-semibold tracking-wider pointer-events-none">Loading Market Data...</div>}
        {error && <div className="absolute inset-0 flex items-center justify-center text-red-500 z-10 bg-[#121214]/80 pointer-events-none">{error}</div>}
        <div
          ref={chartContainerRef}
          className={`absolute inset-0 w-full h-full ${error ? 'hidden' : 'block'}`}
        />

        {/* Watermark Logo Mock */}
        <div className="absolute bottom-6 left-6 z-0 opacity-[0.03] pointer-events-none hidden sm:block">
          <div className="text-8xl font-black italic transform -rotate-12">MEWDON</div>
        </div>
      </div>

    </div>
  );
}
