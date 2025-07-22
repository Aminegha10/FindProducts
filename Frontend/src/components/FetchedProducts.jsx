import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetOneProductQuery } from "../app/prompt";
// import Image from "next/image"; // Optional, commented since image isn't used

export default function ProductCard() {
  const [ref, setRef] = useState("");
  const { data: product, error, isLoading } = useGetOneProductQuery(ref);
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
            -{product.discount}%
          </Badge>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <Badge className="absolute top-3 right-3 bg-gray-500 text-white">
            Out of Stock
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {product.features.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{product.features.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  );
}
