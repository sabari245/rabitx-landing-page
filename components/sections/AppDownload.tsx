import { Button } from "../ui/Button";
import { QrCode } from "lucide-react";

export function AppDownload() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative flex justify-center lg:justify-end">
           {/* Phone Mockup */}
           <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] shadow-2xl border-8 border-gray-900 z-10 overflow-hidden">
             {/* Screen Content */}
             <div className="absolute inset-0 bg-white">
                <div className="bg-blue-600 h-32 p-6 text-white pt-12">
                   <div className="w-12 h-12 bg-white/20 rounded-full mb-4" />
                   <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                </div>
                <div className="p-4 space-y-4">
                   <div className="h-24 bg-gray-100 rounded-xl" />
                   <div className="h-24 bg-gray-100 rounded-xl" />
                   <div className="h-24 bg-gray-100 rounded-xl" />
                </div>
             </div>
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl" />
           </div>
           {/* Decorative Blob */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10" />
        </div>

        <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
           <div className="inline-block p-4 bg-white border border-gray-100 rounded-2xl shadow-sm mb-4">
              <QrCode className="w-24 h-24 text-primary" />
              <p className="text-[10px] text-center mt-2 text-muted-foreground">Scan to<br/>download</p>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
             Buy any token.<br />
             Sell on the go.<br />
             <span className="text-blue-600">Get the App.</span>
           </h2>

           <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="h-14 px-6 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center gap-3">
                 <div className="w-6 h-6 bg-gradient-to-tr from-blue-400 to-green-400 rounded-sm" /> 
                 <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                 </div>
              </Button>
              <Button size="lg" className="h-14 px-6 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center gap-3">
                 <div className="w-6 h-6 text-2xl leading-none"></div>
                 <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                 </div>
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
}
