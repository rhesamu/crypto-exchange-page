import { getDates } from './utils';
const BASE_URL = 'https://api.polygon.io/v2';

interface CandlestickResponse {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  volume_weighted: number;
  number: number;
}

export async function GET(req: Request) {
  const apiKey = process.env.POLYGON_API_KEY;

  if (!apiKey) {
    return new Response('API key not configured', { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get('symbol');
  const market = searchParams.get('market');
  const { from, to } = getDates();

  if (!symbol || !market) {
    return new Response('Missing symbol or market query parameters', {
      status: 400
    });
  }

  try {
    const url = `${BASE_URL}/aggs/ticker/X:${symbol}${market}/range/1/day/${from}/${to}?adjusted=true&sort=asc`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.POLYGON_API_KEY}`
    };

    const res = await fetch(url, { headers });
    const json = await res.json();
    const transformed: { results: CandlestickResponse[] } = {
      ...json,
      results: json.results.map((result: any) => ({
        time: result.t / 1000,
        open: result.o,
        high: result.h,
        low: result.l,
        close: result.c,
        volume: result.v,
        volume_weighted: result.vw,
        number: result.n
      }))
    };

    return Response.json({ data: transformed });
  } catch (error) {
    console.error(error);
    return new Response('Error fetching data', { status: 500 });
  }
}
