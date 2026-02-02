"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronDown, Info } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 rounded-b-[4rem]" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="text-primary block text-4xl md:text-5xl lg:text-6xl mb-2">1,418,277+ users</span>
            buy, sell & swap crypto with Onramp Money
          </h1>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground">
             <span className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded-full text-xs">
                🔴 60+ countries
             </span>
             <span className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full text-xs">
                🟡 130+ tokens
             </span>
          </div>

          <p className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
             <Info className="w-4 h-4" /> Lowest processing fees for most currencies
          </p>
        </motion.div>

        {/* Widget Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
           {/* Decorative Elements around widget */}
           <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl" />
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl" />

           <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 relative z-10">
              {/* Widget Tabs */}
              <div className="flex bg-gray-50 p-1 rounded-xl mb-6">
                <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow-sm text-foreground">Buy</button>
                <button className="flex-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Sell</button>
                <button className="flex-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Swap</button>
              </div>

              {/* Input 1 */}
              <div className="space-y-4 mb-6">
                 <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 transition-colors text-blue-700 px-4 py-3 rounded-2xl font-semibold min-w-[120px]">
                       <span className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center text-[10px] text-white">₿</span>
                       BTC
                       <ChevronDown className="w-4 h-4 ml-auto" />
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition-colors px-4 py-3 rounded-2xl font-medium min-w-[120px]">
                       <span className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] text-white">Ξ</span>
                       ETH
                    </button>
                 </div>
                 
                 <div className="flex gap-2">
                    <button className="flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition-colors px-4 py-3 rounded-2xl font-medium min-w-[120px]">
                       <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white">$</span>
                       USDT
                    </button>
                    <button className="flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition-colors px-4 py-3 rounded-2xl font-medium min-w-[120px]">
                       <span className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] text-white">B</span>
                       BNB
                    </button>
                     <button className="flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors px-4 py-3 rounded-2xl font-medium text-sm text-muted-foreground flex-1">
                       Other
                    </button>
                 </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                 <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Pay</span>
                    <span className="font-medium">100 EUR</span>
                 </div>
                 <div className="h-px bg-gray-200 my-2" />
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Receive</span>
                    <span className="font-medium">0.0023 BTC</span>
                 </div>
              </div>

              <Button className="w-full h-12 text-base rounded-xl shadow-lg shadow-blue-500/25">
                 Buy Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                 <div className="w-2 h-2 bg-green-500 rounded-full" />
                 Secure & fast transactions
              </div>
           </div>

           {/* Social Proof Popups (Static) */}
           <div className="absolute -bottom-12 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-xs">👤</div>
              <div className="text-xs">
                 <p className="font-medium">Someone from France</p>
                 <p className="text-muted-foreground">bought 0.05 BTC</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
