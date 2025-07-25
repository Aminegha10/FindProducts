import { Search, ChefHat, Zap, Shield, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setSearchItem } from "../app/products";
import { useDispatch, useSelector } from "react-redux";
const heroSection = () => {
  const { searchItem } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Find Your <span className="text-indigo-600">Perfect Machine</span>.
      </h1>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for appliances..."
            className="pl-10 py-3 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            onChange={(e) => dispatch(setSearchItem(e.target.value))}
          />
        </div>

        <Select>
          <SelectTrigger className="w-full md:w-48 py-3 rounded-xl border-gray-200">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-100">$0 - $100</SelectItem>
            <SelectItem value="100-300">$100 - $300</SelectItem>
            <SelectItem value="300-500">$300 - $500</SelectItem>
            <SelectItem value="500+">$500+</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl font-medium">
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default heroSection;
