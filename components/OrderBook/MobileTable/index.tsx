import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { OrderBook } from '@/components/OrderBook';

const MobileTable: React.FC<{ orderBook: OrderBook }> = ({ orderBook }) => {
  return (
    <div className="flex">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-1">Price</TableHead>
            <TableHead className="p-1">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderBook.asks.map((ask, index) => (
            <TableRow key={`ask-${index}`} className="text-red-500">
              <TableCell className="p-1">{ask.price}</TableCell>
              <TableCell className="p-1">{ask.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-1">Price</TableHead>
            <TableHead className="p-1">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderBook.bids.map((bid, index) => (
            <TableRow key={`bid-${index}`} className="text-green-500">
              <TableCell className="p-1">{bid.price}</TableCell>
              <TableCell className="p-1">{bid.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MobileTable;
