'use client';

import dynamic from 'next/dynamic';

import { Symbol } from '@/lib/types';
import SubscriptionProvider from '../SubscriptionProvider';
import SymbolSelect from '@/components/SymbolSelect';

const CandlestickChart = dynamic(
  () => import('@/components/CandlestickChart'),
  { ssr: false }
);
const OrderBook = dynamic(() => import('@/components/OrderBook'), {
  ssr: false
});

interface TradingPageClientProps {
  initialSymbol: string;
  symbols: Symbol[];
}

export default function TradingPageClient({
  initialSymbol,
  symbols
}: TradingPageClientProps) {
  return (
    <SubscriptionProvider initialSymbol={initialSymbol}>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Crypto Exchange</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-2">
            <SymbolSelect symbols={symbols} />
            <CandlestickChart market="USD" />
          </div>
          <div>
            <OrderBook market="USD" />
          </div>
        </div>
      </div>
    </SubscriptionProvider>
  );
}
