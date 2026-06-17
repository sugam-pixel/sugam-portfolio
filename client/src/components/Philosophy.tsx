import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 30, suffix: "+", label: "Programs Shipped", sub: "across AI, robotics & SaaS" },
  { value: 150, suffix: "+", label: "Experts Managed", sub: "Mercor AI evaluation teams" },
  { value: 95, suffix: "%", label: "On-Time Delivery", sub: "across 8 years of programs" },
  { value: 6, suffix: "+", label: "AI Skills Built", sub: "Claude Code workflows in prod" },
  { value: 70, suffix: "%", label: "Triage Time Saved", sub: "via AI-powered Intercom" },
  { value: 0, suffix: " P0s", label: "At Go-Live", sub: "Techolution CV program" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Philosophy() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Impact at a Glance</h2>
          <p className="text-primary-foreground/60 text-sm">8 years. Real numbers. No filler.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 group-hover:scale-110 transition-transform duration-200">
                <AnimatedCounter target={m.value} suffix={m.suffix} />
              </div>
              <div className="text-sm font-semibold mb-1">{m.label}</div>
              <div className="text-[11px] text-primary-foreground/50 leading-tight">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
