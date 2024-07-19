import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getSymbol } from './utils';
interface Order {
  price: string;
  amount: string;
}

interface OrderBook {
  bids: Order[];
  asks: Order[];
}
interface OrderBookProps {
  symbol: string;
  market: string;
}

const OrderBook: React.FC<OrderBookProps> = ({
  symbol = 'XBT',
  market = 'USD'
}) => {
  const [orderBook, setOrderBook] = useState<OrderBook>({
    bids: [{ price: '', amount: '' }],
    asks: [{ price: '', amount: '' }]
  })

  useEffect(() => {
    const usedSymbol = getSymbol(symbol);
    const ws = new WebSocket(
      `wss://ws.bitmex.com/realtime?subscribe=orderBook10:${usedSymbol}${market}`
    );

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.data) {
        setOrderBook({
          bids:
            response.data[0].bids.map(([price, amount]: Order[]) => ({ price, amount })),
          asks:
            response.data[0].asks.map(([price, amount]: Order[]) => ({ price, amount })),
        });
      }
    };

    return () => {
      ws.close();
    };
  }, [symbol, market]);

  return (
    <div className='order-book'>
      <h2 className="text-xl font-semibold mb-2">Order Book</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='p-1'>Price</TableHead>
            <TableHead className='p-1'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderBook.asks.map((ask, index) => (
            <TableRow key={`ask-${index}`} className="text-red-500">
              <TableCell className='p-1'>{ask.price}</TableCell>
              <TableCell className='p-1'>{ask.amount}</TableCell>
            </TableRow>
          ))}
          {orderBook.bids.map((bid, index) => (
            <TableRow key={`bid-${index}`} className="text-green-500">
              <TableCell className='p-1'>{bid.price}</TableCell>
              <TableCell className='p-1'>{bid.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderBook;
