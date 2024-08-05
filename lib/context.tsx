import React, { createContext, useContext, useEffect, useState } from 'react';

import { OrderBook, Order, Instrument } from './types';
import { getSymbol } from './utils';

interface SubscriptionContextType {
  symbol: string;
  orderBook: OrderBook;
  instrument: Instrument;
  handleSelectChange: (value: string) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined
);

export const useSubscriptions = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext);

  if (context === undefined) {
    throw new Error('context must be used within context provider');
  }

  return context;
};

export function SubscriptionContextProvider({
  initialSymbol,
  children
}: {
  initialSymbol: string;
  children: React.ReactNode;
}) {
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
      if (response.data) {
        if (response.table === 'orderBook10') {
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

        if (response.table === 'instrument') {
          setInstrument((prev) => ({
            ...prev,
            symbol: response.data[0].symbol
              ? response.data[0].symbol
              : prev.symbol,
            lastTickDirection: response.data[0].lastTickDirection
              ? response.data[0].lastTickDirection
              : prev.lastTickDirection,
            lastPrice: response.data[0].lastPrice
              ? response.data[0].lastPrice
              : prev.lastPrice,
            lastChangePcnt: response.data[0].lastChangePcnt
              ? response.data[0].lastChangePcnt
              : prev.lastChangePcnt
          }));
        }
      }
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  return (
    <SubscriptionContext.Provider
      value={{
        symbol,
        orderBook,
        instrument,
        handleSelectChange
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
