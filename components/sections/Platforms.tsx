import { Wallet, LayoutGrid } from "lucide-react";

export function Platforms() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container-custom">
        <div className="text-center mb-16">
           <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">SUPPORTS MULTIPLE PLATFORMS</p>
           <h2 className="text-3xl md:text-4xl font-bold">Use RabitX to transact anywhere</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                 <Wallet className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="text-lg font-bold mb-2 text-blue-900">Blockchain wallets</h3>
                 <p className="text-sm text-muted-foreground">Major blockchain wallets such as Metamask have integrated RabitX for a seamless purchase experience.</p>
              </div>
           </div>

           <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                 <LayoutGrid className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="text-lg font-bold mb-2 text-blue-900">NFT platforms</h3>
                 <p className="text-sm text-muted-foreground">We provide a gateway to buy and sell NFTs, tickets or other assets. Allow users to pay in fiat.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
