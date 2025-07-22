import { Search, ChefHat, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/heroSection";
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

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Reviews
            </a>
          </nav>

          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium">
            SHOP NOW
          </Button>
        </header>

        {/* Main Content */}
        <main className="px-6 lg:px-8 pb-8">
          {/* Hero Section */}
          <HeroSection />

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                High Performance
              </h3>
              <p className="text-gray-600">
                Powerful motors and advanced technology for superior results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                Premium materials with extended warranty coverage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Top Rated
              </h3>
              <p className="text-gray-600">
                Trusted by thousands of satisfied customers worldwide
              </p>
            </div>
          </div>

          {/* Appliance Illustration */}
          <div className="relative h-64 overflow-hidden">
            <svg viewBox="0 0 800 200" className="w-full h-full">
              {/* Kitchen Counter */}
              <rect
                x="0"
                y="150"
                width="800"
                height="50"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="2"
              />

              {/* Mixer */}
              <g transform="translate(100, 80)">
                <rect
                  x="0"
                  y="40"
                  width="60"
                  height="70"
                  rx="8"
                  fill="#6366f1"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />
                <circle
                  cx="30"
                  cy="25"
                  r="20"
                  fill="#8b5cf6"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />
                <rect
                  x="20"
                  y="15"
                  width="20"
                  height="20"
                  rx="4"
                  fill="#a78bfa"
                />
                <line
                  x1="30"
                  y1="5"
                  x2="30"
                  y2="45"
                  stroke="#4f46e5"
                  strokeWidth="3"
                />
              </g>

              {/* Blender */}
              <g transform="translate(250, 70)">
                <rect
                  x="0"
                  y="50"
                  width="40"
                  height="60"
                  rx="6"
                  fill="#6366f1"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />
                <polygon
                  points="5,50 35,50 30,20 10,20"
                  fill="#8b5cf6"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />
                <circle cx="20" cy="35" r="8" fill="#a78bfa" />
                <rect
                  x="15"
                  y="5"
                  width="10"
                  height="15"
                  rx="2"
                  fill="#4f46e5"
                />
              </g>

              {/* Coffee Machine */}
              <g transform="translate(400, 60)">
                <rect
                  x="0"
                  y="60"
                  width="80"
                  height="50"
                  rx="8"
                  fill="#6366f1"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />
                <rect
                  x="10"
                  y="40"
                  width="60"
                  height="30"
                  rx="4"
                  fill="#8b5cf6"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />
                <circle cx="40" cy="55" r="12" fill="#a78bfa" />
                <rect
                  x="35"
                  y="20"
                  width="10"
                  height="20"
                  rx="2"
                  fill="#4f46e5"
                />
                <rect
                  x="20"
                  y="25"
                  width="6"
                  height="15"
                  rx="1"
                  fill="#7c3aed"
                />
                <rect
                  x="54"
                  y="25"
                  width="6"
                  height="15"
                  rx="1"
                  fill="#7c3aed"
                />
              </g>

              {/* Food Processor */}
              <g transform="translate(550, 75)">
                <rect
                  x="0"
                  y="45"
                  width="50"
                  height="65"
                  rx="6"
                  fill="#6366f1"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />
                <circle
                  cx="25"
                  cy="30"
                  r="18"
                  fill="#8b5cf6"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />
                <circle cx="25" cy="30" r="10" fill="#a78bfa" />
                <rect
                  x="20"
                  y="10"
                  width="10"
                  height="10"
                  rx="2"
                  fill="#4f46e5"
                />
              </g>

              {/* Toaster */}
              <g transform="translate(680, 90)">
                <rect
                  x="0"
                  y="30"
                  width="60"
                  height="80"
                  rx="8"
                  fill="#6366f1"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />
                <rect
                  x="10"
                  y="40"
                  width="15"
                  height="50"
                  rx="2"
                  fill="#8b5cf6"
                />
                <rect
                  x="35"
                  y="40"
                  width="15"
                  height="50"
                  rx="2"
                  fill="#8b5cf6"
                />
                <circle cx="30" cy="20" r="6" fill="#a78bfa" />
                <rect
                  x="25"
                  y="5"
                  width="10"
                  height="10"
                  rx="2"
                  fill="#4f46e5"
                />
              </g>

              {/* Decorative elements */}
              <circle cx="150" cy="40" r="15" fill="#e0e7ff" opacity="0.6" />
              <circle cx="350" cy="30" r="20" fill="#ddd6fe" opacity="0.5" />
              <circle cx="600" cy="35" r="12" fill="#e0e7ff" opacity="0.7" />

              {/* Steam/smoke effects */}
              <g opacity="0.4">
                <path
                  d="M 130 60 Q 135 50 140 60 Q 145 50 150 60"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 430 40 Q 435 30 440 40 Q 445 30 450 40"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 700 20 Q 705 10 710 20 Q 715 10 720 20"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            </svg>
          </div>
        </main>
      </div>
    </div>
  );
}
