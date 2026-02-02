export function GlobalMap() {
  return (
    <section className="py-24 relative overflow-hidden bg-blue-50/10">
      <div className="container-custom relative z-10">
         <div className="max-w-4xl mx-auto text-center">
            {/* Abstract Map using CSS Grid dots or SVG */}
            <div className="aspect-[2/1] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center opacity-20 mb-12 relative">
               {/* Pulse dots for active regions */}
               <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-blue-500 rounded-full animate-ping" />
               <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-100" />
               <div className="absolute top-[60%] left-[70%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300" />
               <div className="absolute top-[35%] left-[80%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-500" />
               <div className="absolute top-[70%] left-[30%] w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
               Helping build crypto<br/>
               infrastructure in over<br/>
               60+ countries
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
               {['European Union', 'India', 'Turkey', 'UAE', 'Mexico', 'Vietnam', 'Nigeria', 'Brazil', 'Peru', 'Chile', 'Philippines'].map(country => (
                  <span key={country} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-gray-300" /> {country}
                  </span>
               ))}
               <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">See all</span>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-2xl inline-block">
               <p className="text-xs text-muted-foreground mb-4">Get Started Now - No Hidden Fees.<br/>Just Fast & Secure Transactions.</p>
               <div className="flex gap-2 justify-center">
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-200">Buy</button>
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-200">Sell</button>
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-200">Swap</button>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
