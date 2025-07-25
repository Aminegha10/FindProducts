import { Search, ChefHat, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/heroSection";
import FetchedProducts from "./components/FetchedProducts";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { store } from "./app/store.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function ApplianceLanding() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-300 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">KitchenPro</span>
          </div>

          <Navbar />

          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium">
            SHOP NOW
          </Button>
        </header>

        {/* Main Content */}
        <main className="px-6 lg:px-8 pb-8">
          {/* Hero Section */}
          <HeroSection />

          {/* Fetched Products Section */}
          <FetchedProducts />
        </main>
      </div>
    </div>
  );
}
