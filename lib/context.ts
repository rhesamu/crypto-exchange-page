import { createContext, useContext } from 'react';

import { SubscriptionContextType } from '@/lib/types';

export const SubscriptionContext = createContext<SubscriptionContextType>({
  symbol: '',
  orderBook: {
    bids: [{ price: '', amount: '' }],
    asks: [{ price: '', amount: '' }]
  },
  instrument: {
    symbol: '',
    lastTickDirection: '',
    lastPrice: 0,
    lastChangePcnt: 0
  },
  handleSelectChange: () => {}
});

export const useSubscriptions = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext);

  if (context === undefined) {
    throw new Error('context must be used within context provider');
  }

  return context;
};
