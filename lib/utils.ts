import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mappedSymbol: { [dict_key: string]: string } = {
  BTC: 'XBT'
};

export function getSymbol(symbol: string) {
  return mappedSymbol[symbol] || symbol;
}
