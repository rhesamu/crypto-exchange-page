import { useEffect, useState } from 'react';

import { getSymbol } from './utils';
import { OrderBook, Order } from './types';

export const useMobileSize = (innerWidth: number) => {
  const [isMobileSize, setIsMobileSize] = useState(
    window.innerWidth <= innerWidth
  );

  useEffect(() => {
    const windowResizeHandler = () => {
      const matchMediaString = `(max-width: ${innerWidth}px)`;

      if (matchMedia(matchMediaString).matches) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    };

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  return isMobileSize;
};
