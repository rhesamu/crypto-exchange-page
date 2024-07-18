import { useState, useRef, useEffect } from 'react';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';

import { getChartOptions, getCandlestickSeriesOptions } from './utils';

interface CandlestickChartProps {
  symbol: string;
  market: string;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ symbol, market = 'USD' }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setIsDarkMode(e.matches);
    });

    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    }
  }, []);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = getChartOptions(isDarkMode);
      const chart = createChart(chartContainerRef.current, chartOptions);

      const candlestickSeries = chart.addCandlestickSeries(
        getCandlestickSeriesOptions()
      );

      chartRef.current = chart;
      seriesRef.current = candlestickSeries;

      const fetchData = async () => {
        try {
          const response = await fetch(`/api/charts?symbol=${symbol}&market=${market}`);
          const { data } = await response.json();

          candlestickSeries.setData(data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();

      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [symbol, market, isDarkMode]);

  // to update the chart options when isDarkMode changes
  useEffect(() => {
    if (chartRef.current) {
      const chartOptions = getChartOptions(isDarkMode);
      chartRef.current.applyOptions(chartOptions);
    }
  }, [isDarkMode]);
  
  return <div className='md:h-[720px] h-[480px]' ref={chartContainerRef} />;
};

export default CandlestickChart;
