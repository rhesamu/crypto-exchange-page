'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import SymbolSelect from '@/components/SymbolSelect';
const CandlestickChart = dynamic(
  () => import('@/components/CandlestickChart'),
  { ssr: false }
);
const OrderBook = dynamic(() => import('@/components/OrderBook'), {
  ssr: false
});

export default function TradingPage() {
  const [symbol, setSymbol] = useState('BTC');

  const handleSelectChange = (value: string) => {
    setSymbol(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Crypto Exchange</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2">
          <SymbolSelect
            handleSelectChange={handleSelectChange}
            defaultValue={symbol}
          />
          <CandlestickChart symbol={symbol} market="USD" />
        </div>
        <div>
          <OrderBook symbol={symbol} market="USD" />
        </div>
      </div>
    </div>
  );
}
