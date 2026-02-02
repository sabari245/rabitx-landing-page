import { ArrowDownToLine, ArrowUpFromLine, Repeat, Gift } from "lucide-react";

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">All-in-1 Package</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Buy, sell & swap crypto.<br />
            Or buy gift cards with crypto.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Buy Card */}
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <ArrowDownToLine className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Buy</h3>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-1">22</p>
                <p className="text-sm text-blue-400">Fiat Currencies</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-1">480</p>
                <p className="text-sm text-blue-400">Cryptocurrencies</p>
              </div>
            </div>
          </div>

          {/* Sell Card */}
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                <ArrowUpFromLine className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Sell</h3>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-1">22</p>
                <p className="text-sm text-blue-400">Fiat Currencies</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-1">480</p>
                <p className="text-sm text-blue-400">Cryptocurrencies</p>
              </div>
            </div>
          </div>

          {/* Swap Card */}
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <Repeat className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Swap</h3>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-1">350</p>
              <p className="text-sm text-blue-400">Cryptocurrencies</p>
            </div>
          </div>

          {/* Gift Cards Card */}
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:bg-blue-50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Gift Cards</h3>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-1">90+</p>
              <p className="text-sm text-blue-400">Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
