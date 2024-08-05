import { ArrowUp, ArrowDown } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { cn } from '@/lib/utils';

import { OrderBook, Instrument } from '@/lib/types';

const Icon = ({ direction }: { direction?: string }) => {
  switch (direction) {
    case 'PlusTick':
      return <ArrowUp size={20} />;
    case 'MinusTick':
      return <ArrowDown size={20} />;
    default:
      return null;
  }
};

const CurrentPriceRow: React.FC<{ instrument: Instrument }> = ({
  instrument
}) => {
  const classNames = cn(
    'flex items-center gap-1 w-full py-4 px-2 my-4 rounded bg-secondary',
    {
      'text-red-500': instrument.lastTickDirection === 'MinusTick',
      'text-green-500': instrument.lastTickDirection === 'PlusTick',
      'text-slate-500 dark:text-white':
        instrument.lastTickDirection === 'ZeroPlusTick' ||
        instrument.lastTickDirection === 'ZeroMinusTick'
    }
  );

  return (
    <div className={classNames}>
      <div className="text-xl font-semibold">
        {Number(instrument.lastPrice).toLocaleString('en-US')}
      </div>
      <Icon direction={instrument.lastTickDirection} />
      <div className="ml-3">
        {Number(instrument.lastChangePcnt).toLocaleString(undefined, {
          style: 'percent',
          minimumFractionDigits: 2
        })}
      </div>
    </div>
  );
};

const DesktopTable: React.FC<{
  orderBook: OrderBook;
  instrument: Instrument;
}> = ({ orderBook, instrument }) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="m-0 p-1">Price</TableHead>
            <TableHead className="m-0 p-1">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderBook.asks.map((ask, index) => (
            <TableRow key={`ask-${index}`} className="text-red-500">
              <TableCell className="p-1">
                {Number(ask.price).toLocaleString('en-US')}
              </TableCell>
              <TableCell className="p-1">
                {Number(ask.amount).toLocaleString('en-US')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CurrentPriceRow instrument={instrument} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="m-0 p-1">Price</TableHead>
            <TableHead className="m-0 p-1">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderBook.bids.map((bid, index) => (
            <TableRow key={`bid-${index}`} className="text-green-500">
              <TableCell className="p-1">
                {Number(bid.price).toLocaleString('en-US')}
              </TableCell>
              <TableCell className="p-1">
                {Number(bid.amount).toLocaleString('en-US')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DesktopTable;
