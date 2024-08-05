import cryptoList from '@/lib/cryptoList';

export async function GET(req: Request) {
  return Response.json({ data: cryptoList });
}
