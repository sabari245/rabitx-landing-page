export function WorksWith() {
  const methods = [
    "DANA", "pix", "iPay", "Khipu", "InstantEFT", "GPay", "SEPA", "PhonePe"
  ];

  return (
    <section className="py-12 border-b border-border/50">
      <div className="container-custom">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          WORKS WITH
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {methods.map((method) => (
             <span key={method} className="text-xl font-bold text-gray-400">{method}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
