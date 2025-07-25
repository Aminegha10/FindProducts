import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchItem } from "../app/products";
// import { useGetOneProductQuery } from "../app/prompt";
// import Image from "next/image"; // Optional, commented since image isn't used

export default function ProductCard() {
  // const [ref, setRef] = useState("");
  // const { data: product, error, isLoading } = useGetOneProductQuery(ref);
  const { searchItem } = useSelector((state) => state.products);
  // const [product, setProduct] = useState(products);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      image: "https://via.placeholder.com/300?text=Headphones",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      inStock: true,
      rating: 4.7,
      reviews: 256,
      features: ["Bluetooth 5.0", "Noise Cancellation", "20h Battery Life"],
    },
    {
      id: 2,
      name: "Smart Fitnss Watch",
      category: "Wearables",
      image: "https://via.placeholder.com/300?text=Fitness+Watch",
      price: 59.99,
      originalPrice: 89.99,
      discount: 33,
      inStock: false,
      rating: 4.3,
      reviews: 189,
      features: ["Heart Rate Monitor", "Sleep Tracking", "Water Resistant"],
    },
  ];

  // Filter products based on searchItem
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase()) || item.category.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden group shadow-sm"
        >
          {/* Product Image */}
          <div className="relative overflow-hidden">
            <img
              src="/a.jpg"
              width={300}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              alt={product.name}
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
      ))}
    </div>
  );
}
