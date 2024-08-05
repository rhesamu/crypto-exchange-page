import { useSubscriptions } from '@/lib/context';

import MobileTable from './MobileTable';
import DesktopTable from './DesktopTable';

import { useMobileSize } from '@/lib/hooks';
interface OrderBookProps {
  market: string;
}

const OrderBookComponent: React.FC<OrderBookProps> = ({}) => {
  const isMobile = useMobileSize(768);

  const { orderBook, instrument } = useSubscriptions();

  return (
    <div className="order-book">
      <h2 className="mb-2 text-xl font-semibold">Order Book</h2>
      {isMobile ? (
        <MobileTable orderBook={orderBook} />
      ) : (
        <DesktopTable orderBook={orderBook} instrument={instrument} />
      )}
    </div>
  );
};

export default OrderBookComponent;
