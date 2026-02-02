import { Globe, ScanFace, Percent, Layers } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multiple Fiat options",
    description: "Easily buy crypto using bank transfers or popular payment methods across 60+ countries, ensuring a smooth experience."
  },
  {
    icon: ScanFace,
    title: "Seamless Identity Verification Process",
    description: "Quickly verify your identity with our streamlined KYC process, allowing you to start trading in minutes."
  },
  {
    icon: Percent,
    title: "Lowest transaction fee",
    description: "Enjoy the most competitive rates for fiat-to-crypto conversions with transparent pricing and no hidden fees."
  },
  {
    icon: Layers,
    title: "Supports Multiple Blockchains",
    description: "Buy or sell crypto on Ethereum, Polygon, BSC, Solana, NEAR, Optimism, Arbitrum, Tron, and more - giving you flexibility."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Super-charge your crypto transactions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
