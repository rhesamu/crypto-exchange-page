import TradingPageClient from '@/components/TradingPageClient';
import cryptoList from '@/lib/cryptoList';
import { Symbol } from '@/lib/types';

function getSymbols(): Symbol[] {
  return cryptoList;
}

export default async function Page() {
  const symbols = getSymbols();
  const initialSymbol = 'BTC';

  return <TradingPageClient initialSymbol={initialSymbol} symbols={symbols} />;
}
