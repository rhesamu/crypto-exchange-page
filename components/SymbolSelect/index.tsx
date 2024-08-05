import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useSubscriptions } from '@/lib/context';

interface Symbol {
  code: string;
  name: string;
}

interface SymbolSelectProps {
  symbols: Symbol[];
}

const SymbolSelect: React.FC<SymbolSelectProps> = ({ symbols }) => {
  const { handleSelectChange, symbol } = useSubscriptions();
  return (
    <Select defaultValue={symbol} onValueChange={handleSelectChange}>
      <SelectTrigger className="mb-1 w-[180px]">
        <SelectValue placeholder="Choose currency..." />
      </SelectTrigger>
      <SelectContent>
        {symbols.map((symbol) => (
          <SelectItem value={symbol.code as string} key={symbol.code}>
            <div>
              <span className="font-semibold">{symbol.code}</span>
              <span className="text-sm text-gray-500"> - {symbol.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SymbolSelect;
