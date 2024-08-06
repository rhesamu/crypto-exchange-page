import React, { useEffect, useState, useMemo } from 'react';

import { OrderBook, Order, Instrument } from '@/lib/types';
import { getSymbol } from '@/lib/utils';
import { SubscriptionContext } from '@/lib/context';

interface SubscriptionProviderProps {
  initialSymbol: string;
  children: React.ReactNode;
}

export default function SubscriptionProvider({
  initialSymbol,
  children
}: SubscriptionProviderProps) {
  const market = 'USD';

  const [symbol, setSymbol] = useState(initialSymbol);

  const [orderBook, setOrderBook] = useState<OrderBook>({
    bids: [{ price: '', amount: '' }],
    asks: [{ price: '', amount: '' }]
  });

  const [instrument, setInstrument] = useState<Instrument>({
    symbol: '',
    lastTickDirection: '',
    lastPrice: 0,
    lastChangePcnt: 0
  });

  const handleSelectChange = (value: string) => {
    setSymbol(value);
  };

  useEffect(() => {
    const usedSymbol = getSymbol(symbol);
    const ws = new WebSocket(
      `wss://ws.bitmex.com/realtime?subscribe=instrument:${usedSymbol}${market},orderBook10:${usedSymbol}${market}`
    );

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.action === 'update') {
        const data = response.data[0];
        if (response.table === 'orderBook10') {
          setOrderBook({
            bids: data.bids.map(([price, amount]: Order[]) => ({
              price,
              amount
            })),
            asks: data.asks.map(([price, amount]: Order[]) => ({
              price,
              amount
            }))
          });
        }

        if (response.table === 'instrument') {
          setInstrument((prev) => ({
            ...prev,
            symbol: data.symbol ?? prev.symbol,
            lastTickDirection: data.lastTickDirection
              ?? prev.lastTickDirection,
            lastPrice: data.lastPrice
              ?? prev.lastPrice,
            lastChangePcnt: data.lastChangePcnt
              ?? prev.lastChangePcnt
          }));
        }
      }
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  const value = useMemo(
    () => ({
      symbol,
      orderBook,
      instrument,
      handleSelectChange
    }),
    [symbol, orderBook, instrument]
  );

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
