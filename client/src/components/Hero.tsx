import { useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Linkedin, ArrowRight, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeIn, scaleIn, staggerContainer, EASE_PREMIUM } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      className="min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden relative"
    >
      <div className="aurora-bg" />
      <div className="grid-overlay" />
      <div className="spotlight" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Open to Work chip */}
          <motion.div variants={scaleIn(0)}>
            <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 rounded-full px-3 py-1 gap-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Opportunities
            </Badge>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance"
            >
              Building{" "}
              <span className="text-gradient">clarity, speed &amp; alignment</span>{" "}
              in AI and robotics programs.
            </motion.h1>
            <motion.p
              variants={fadeUp(0.15)}
              className="text-base sm:text-lg md:text-xl text-muted-foreground"
            >
              AI Program Manager • 8+ Years • Robotics • AI Ops • SaaS Delivery
            </motion.p>
          </div>

          <motion.div variants={fadeIn(0.25)} className="flex flex-wrap gap-2">
            {["PMP®", "CSM®", "SAFe®", "Lean Six Sigma GB"].map((cert) => (
              <Badge
                key={cert}
                variant="secondary"
                className="rounded-full px-4 py-1 text-sm font-normal border border-border/80 bg-secondary/60"
              >
                {cert}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn(0.3)}
            className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-border/40"
          >
            {[
              { label: "Programs Shipped", value: "30+" },
              { label: "Experts Managed", value: "150+" },
              { label: "On-Time Releases", value: "95%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp(0.35, 12)} className="flex flex-wrap items-center gap-3">
            <a href="/Sugam_CV.pdf" download className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full rounded-full gap-2 group bg-gradient-to-r from-primary to-accent-2 text-primary-foreground border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-110 transition-all"
              >
                Download Résumé
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ersugamsharma"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full gap-2 border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>

            <a
              href="https://topmate.io/sugam_sharma_pmp_csm?utm_source=linkedin&utm_medium=product&utm_campaign=ss"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                className="w-full sm:w-auto relative group border border-primary/30 bg-primary/5 hover:bg-primary/10 text-foreground font-semibold rounded-full px-6 py-2.5 transition-colors flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              >
                <Video className="h-4 w-4 text-primary" />
                <span>Connect on Topmate</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
            className="relative z-10 mb-8"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/40 to-accent-2/30 blur-2xl opacity-60" />
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl group">
              <img
                src="/assets/photo.png"
                alt="Sugam Sharma"
                fetchPriority="high"
                width={320}
                height={320}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE_PREMIUM }}
            className="text-center relative z-30"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient pb-2">
              Sugam Sharma
            </h2>
          </motion.div>

          {/* Playground Link */}
          <motion.a
            href="#playground"
            className="relative md:absolute mt-8 md:mt-0 md:-bottom-4 right-0 md:-right-12 z-40 flex items-center gap-2 bg-gradient-to-r from-primary to-accent-2 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/25 cursor-pointer"
            initial={{ y: 0, rotate: 5 }}
            animate={{ y: [-5, 5, -5] }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 },
            }}
          >
            <span>🎮 Try the PM Games!</span>
          </motion.a>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-0 md:-right-4 glass-card p-3 rounded-lg shadow-lg z-20 hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Status: On Track
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 -left-8 glass-card p-3 rounded-lg shadow-lg z-20 hidden md:block"
            animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="space-y-2 w-32">
              <div className="h-2 bg-muted rounded w-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent-2"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </div>
              <div className="text-[10px] text-muted-foreground flex justify-between">
                <span>Sprint Progress</span>
                <span>75%</span>
              </div>
            </div>
          </motion.div>

          {/* AI-powered chip */}
          <motion.div
            className="absolute top-2 left-0 md:-left-8 bg-primary/10 border border-primary/20 p-2 rounded-lg z-20 hidden md:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
              <Sparkles className="w-3 h-3" />
              AI-Powered Ops
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
