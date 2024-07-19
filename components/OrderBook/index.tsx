import { useEffect, useState } from 'react';

import MobileTable from './MobileTable';
import DesktopTable from './DesktopTable';

import { getSymbol } from './utils';
import { useMobileSize } from '@/lib/hooks';

interface Order {
  price: string;
  amount: string;
}

export interface OrderBook {
  bids: Order[];
  asks: Order[];
}
interface OrderBookProps {
  symbol: string;
  market: string;
}

const OrderBookComponent: React.FC<OrderBookProps> = ({
  symbol = 'XBT',
  market = 'USD'
}) => {
  const isMobile = useMobileSize(768);

  const [orderBook, setOrderBook] = useState<OrderBook>({
    bids: [{ price: '', amount: '' }],
    asks: [{ price: '', amount: '' }]
  });

  useEffect(() => {
    const usedSymbol = getSymbol(symbol);
    const ws = new WebSocket(
      `wss://ws.bitmex.com/realtime?subscribe=orderBook10:${usedSymbol}${market}`
    );

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.data) {
        setOrderBook({
          bids: response.data[0].bids.map(([price, amount]: Order[]) => ({
            price,
            amount
          })),
          asks: response.data[0].asks.map(([price, amount]: Order[]) => ({
            price,
            amount
          }))
        });
      }
    };

    return () => {
      ws.close();
    };
  }, [symbol, market]);

  return (
    <div className="order-book">
      <h2 className="mb-2 text-xl font-semibold">Order Book</h2>
      {isMobile ? (
        <MobileTable orderBook={orderBook} />
      ) : (
        <DesktopTable orderBook={orderBook} />
      )}
    </div>
  );
};

export default OrderBookComponent;
