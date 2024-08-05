import TradingPageClient from '@/components/TradingPageClient';

async function getSymbols() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/symbols`);

  if (!response.ok) {
    throw new Error('Failed to fetch symbols');
  }

  const { data } = await response.json();
  return data;
}

export default async function Page() {
  const symbols = await getSymbols();
  const initialSymbol = 'BTC';

  return <TradingPageClient initialSymbol={initialSymbol} symbols={symbols} />;
}
