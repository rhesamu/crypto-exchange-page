import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import cryptoList from '@/lib/cryptoList';

interface SymbolSelectProps {
  handleSelectChange: (value: string) => void;
  defaultValue: string;
}

const SymbolSelect: React.FC<SymbolSelectProps> = ({
  handleSelectChange,
  defaultValue
}) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={handleSelectChange}>
      <SelectTrigger className="mb-1 w-[180px]">
        <SelectValue placeholder="Choose currency..." />
      </SelectTrigger>
      <SelectContent>
        {cryptoList.map((crypto) => (
          <SelectItem value={crypto.code as string} key={crypto.code}>
            <div>
              <span className="font-semibold">{crypto.code}</span>
              <span className="text-sm text-gray-500"> - {crypto.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SymbolSelect;
