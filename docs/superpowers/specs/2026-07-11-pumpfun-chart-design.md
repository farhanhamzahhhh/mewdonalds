# Pump.fun Candlestick Chart Component Design

## Overview
Add a live candlestick chart to the landing page of the Mewdon website, specifically placed underneath the Countdown timer in the Hero section. Since the actual project token has not launched yet, the chart will use a dummy token's contract address to fetch and display real data for testing purposes.

## Requirements
- Render an OHLCV candlestick chart using `lightweight-charts`.
- Fetch real trading data from the GeckoTerminal REST API.
- Use standard red/green colors for the candlesticks.
- Integrate the chart smoothly into the existing dark/neon aesthetic of the `Hero.js` component.
- Be responsive to screen size changes.

## Architecture & Data Flow
1.  **Component**: A new React component `components/PumpfunChart.js` will be created. It will handle its own data fetching, loading state, and chart rendering.
2.  **Library**: `lightweight-charts` will be installed via npm.
3.  **Data Source**: `https://api.geckoterminal.com/api/v2/networks/solana/pools/{pool_address}/ohlcv/hour`
    -   We will use a known active Solana memecoin pool address for the dummy data.
4.  **Integration**: The `<PumpfunChart />` will be imported and placed directly below `<Countdown />` in `app/(landing)/_components/Hero.js`.

## API Integration Details
-   **Endpoint**: GeckoTerminal OHLCV endpoint.
-   **Method**: GET
-   **Data Mapping**: The API returns an array of arrays in the format `[timestamp, open, high, low, close, volume]`. This needs to be mapped to the `lightweight-charts` expected object format: `{ time, open, high, low, close }`.
-   **Error Handling**: Basic try/catch around the fetch. If it fails, a fallback text or error UI will be displayed within the component bounds.

## Technical Tasks
1. Run `npm install lightweight-charts`.
2. Create `components/PumpfunChart.js`.
3. Implement `useEffect` to fetch data and initialize the `createChart` instance on a ref.
4. Map the API response.
5. Update `app/(landing)/_components/Hero.js` to include the component.
