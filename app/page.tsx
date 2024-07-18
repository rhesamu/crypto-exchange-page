'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import cryptoList from '@/lib/cryptoList';

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
          <Select defaultValue='BTC' onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px] mb-1">
              <SelectValue placeholder="Choose currency..." />
            </SelectTrigger>
            <SelectContent>
              {cryptoList.map((crypto) => (
                <SelectItem value={crypto.code as string} key={crypto.code}>
                  <div>
                    <span className="font-semibold">{crypto.code}</span>
                    <span className="text-sm text-gray-500"> - {crypto.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <CandlestickChart symbol={symbol} market='USD' />
        </div>
        <div>
          <OrderBook symbol={symbol} market='USD' />
        </div>
      </div>
    </div>
  );
}
