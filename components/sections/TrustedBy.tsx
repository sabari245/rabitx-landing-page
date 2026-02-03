export function TrustedBy() {
  const partners = [
    "BYBIT", "world", "BINANCE", "coinbase", "cenoa", "WALLET", "Confix", "LEDGER"
  ];

  return (
    <section className="py-10 border-y border-border/50 bg-gray-50/50">
      <div className="container-custom">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Trusted By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {partners.map((partner) => (
             <div key={partner} className="text-xl md:text-2xl font-bold text-gray-400 font-serif">
                {partner}
             </div>
           ))}
        </div>
        
        {/* Integration Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                   <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">T</div>
                </div>
                <div>
                   <p className="text-xs font-semibold text-blue-600 mb-1">PROUDLY POWERED WIDGET INSIDE</p>
                   <p className="font-bold text-gray-900">TRUEONE</p>
                   <p className="text-xs text-muted-foreground">Data-driven tools for crypto investments</p>
                </div>
             </div>
             
             <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                   <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center font-bold">B</div>
                </div>
                <div>
                   <p className="text-xs font-semibold text-blue-600 mb-1">LIVE INTEGRATION WITH</p>
                   <p className="font-bold text-gray-900">BingX</p>
                   <p className="text-xs text-muted-foreground">Buy crypto on BingX with RabitX</p>
                </div>
             </div>

             <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                   <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center font-bold">P</div>
                </div>
                <div>
                   <p className="text-xs font-semibold text-blue-600 mb-1">LIVE INTEGRATION WITH</p>
                   <p className="font-bold text-gray-900">PAXFUL</p>
                   <p className="text-xs text-muted-foreground">Buy crypto in Paxful with RabitX</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
