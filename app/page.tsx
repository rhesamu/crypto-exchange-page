'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import SymbolSelect from '@/components/SymbolSelect';
const CandlestickChart = dynamic(() => import('@/components/CandlestickChart'));
const OrderBook = dynamic(() => import('@/components/OrderBook'));

export default function TradingPage() {
  const [symbol, setSymbol] = useState('BTC');

  const handleSelectChange = (value: string) => {
    setSymbol(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Exchange</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <SymbolSelect handleSelectChange={handleSelectChange} defaultValue={symbol} />
          <CandlestickChart symbol={symbol} market='USD' />
        </div>
        <div>
          <OrderBook symbol={symbol} market='USD' />
        </div>
      </div>
    </div>
  );
}
