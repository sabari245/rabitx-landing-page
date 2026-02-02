import { LockKeyhole } from "lucide-react";

export function Compliance() {
  return (
    <section className="py-20 bg-blue-50/30">
      <div className="container-custom max-w-4xl flex flex-col md:flex-row items-center gap-8">
         <div className="w-32 h-32 bg-blue-100 rounded-3xl flex items-center justify-center shrink-0">
             <LockKeyhole className="w-12 h-12 text-blue-600" />
         </div>
         <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Onramp Money is secure and compliant with regulations</h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
               Onramp Money is a global digital asset and Web3 infrastructure provider, operated by OMOLLO (Saint Vincent & the Grenadines, ID: 1547) globally, with operations in India and Europe through affiliated registered entities.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-medium text-blue-600">
               <a href="#" className="hover:underline">Read our Compliance Statement &gt;</a>
               <a href="#" className="hover:underline">For Law Enforcement requests &gt;</a>
            </div>
         </div>
      </div>
    </section>
  );
}
