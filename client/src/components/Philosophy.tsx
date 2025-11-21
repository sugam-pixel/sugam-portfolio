import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const quotes = [
  "Clarity creates momentum.",
  "Alignment reduces 80% of chaos.",
  "Velocity is a byproduct of disciplined systems."
];

export default function Philosophy() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <Quote className="w-12 h-12 mx-auto mb-8 opacity-50" />
        
        <div className="h-32 flex items-center justify-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-balance max-w-4xl"
          >
            "{quotes[index]}"
          </motion.div>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {quotes.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${i === index ? "bg-white w-8" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
