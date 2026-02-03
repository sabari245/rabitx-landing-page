"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "How many cryptocurrencies do you support?", answer: "We support over 400+ cryptocurrencies across multiple networks." },
  { question: "Which fiat currencies does RabitX provide support for?", answer: "We support 22+ fiat currencies including USD, EUR, INR, TRY, and many more." },
  { question: "Can I subsidize fees charged to users?", answer: "Yes, our partners can choose to subsidize fees for their users to provide a seamless experience." },
  { question: "Where does RabitX source liquidity from?", answer: "We aggregate liquidity from multiple top-tier exchanges and liquidity providers." },
  { question: "What all integration options do you support?", answer: "We provide Widget, API, and SDK integration options for web and mobile platforms." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        <p className="text-muted-foreground mb-12">
           Let us take care of payment processing—so you can focus on growing your business.
        </p>

        <div className="space-y-4">
           {faqs.map((faq, index) => (
             <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-sm hover:bg-gray-100 transition-colors"
                >
                   {faq.question}
                   <ChevronDown className={`w-4 h-4 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                   {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                         <div className="p-6 pt-0 text-sm text-muted-foreground">
                            {faq.answer}
                         </div>
                      </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
