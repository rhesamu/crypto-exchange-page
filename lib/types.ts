export interface Order {
  price: string;
  amount: string;
}

export interface Symbol {
  code: string;
  name: string;
}

export interface Instrument {
  symbol?: string;
  lastTickDirection?: string;
  lastPrice?: number;
  lastChangePcnt?: number;
}

export interface OrderBook {
  bids: Order[];
  asks: Order[];
}
