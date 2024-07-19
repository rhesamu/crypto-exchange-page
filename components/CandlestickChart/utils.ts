import {
  ColorType,
  ChartOptions,
  CandlestickSeriesPartialOptions
} from 'lightweight-charts';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends readonly (infer X)[]
      ? readonly DeepPartial<X>[]
      : DeepPartial<T[P]>;
};

export function getChartOptions(
  isDarkMode: boolean
): DeepPartial<ChartOptions> {
  return {
    autoSize: true,
    layout: {
      background: {
        type: ColorType.Solid,
        color: isDarkMode ? '#020817' : '#ffffff'
      },
      textColor: isDarkMode ? '#CCC' : '#333'
    },
    grid: {
      vertLines: { color: isDarkMode ? '#333' : '#f0f0f0' },
      horzLines: { color: isDarkMode ? '#333' : '#f0f0f0' }
    },
    crosshair: {
      mode: 0
    },
    rightPriceScale: {
      borderColor: isDarkMode ? '#333' : '#f0f0f0'
    },
    timeScale: {
      borderColor: isDarkMode ? '#333' : '#f0f0f0',
      timeVisible: true,
      secondsVisible: false
    }
  };
}

export function getCandlestickSeriesOptions(): CandlestickSeriesPartialOptions {
  return {
    upColor: '#26a69a',
    downColor: '#ef5350',
    borderVisible: false,
    wickUpColor: '#26a69a',
    wickDownColor: '#ef5350'
  };
}
