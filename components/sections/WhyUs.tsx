import { ShieldCheck, Lock, HandCoins } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Onramp Money?</h2>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
           <div className="bg-blue-50/30 p-8 rounded-2xl text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                 <HandCoins className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Best prices</h3>
              <p className="text-sm text-muted-foreground">We source liquidity from multiple providers to find the best prices.</p>
           </div>
           
           <div className="bg-blue-50/30 p-8 rounded-2xl text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                 <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Security</h3>
              <p className="text-sm text-muted-foreground">We use an engine to reduce risks, bringing fraud rate to &lt; 0.01%.</p>
           </div>

           <div className="bg-blue-50/30 p-8 rounded-2xl text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                 <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Privacy</h3>
              <p className="text-sm text-muted-foreground">Rest assured that we take and store minimal user data.</p>
           </div>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center border-t border-gray-100 pt-12">
           <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">TOKENS</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">123+</p>
           </div>
           <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">BLOCKCHAINS</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">12+</p>
           </div>
           <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">USERS</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">1,418,277+</p>
           </div>
        </div>
        
        {/* Scrolling Partner Strip Bottom */}
        <div className="mt-16 overflow-hidden">
           <div className="flex gap-16 opacity-40 grayscale animate-scroll">
              <span className="text-xl font-bold">POLYGON</span>
              <span className="text-xl font-bold">BINANCE</span>
              <span className="text-xl font-bold">ARBITRUM</span>
              <span className="text-xl font-bold">MANTLE</span>
              <span className="text-xl font-bold">TRON</span>
              <span className="text-xl font-bold">BASE</span>
              <span className="text-xl font-bold">OPTIMISM</span>
           </div>
        </div>
      </div>
    </section>
  );
}
