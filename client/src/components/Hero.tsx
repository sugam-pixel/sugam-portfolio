import { motion } from "framer-motion";
import { FileText, Linkedin, ArrowRight, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden relative">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Open to Work chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/30 rounded-full px-3 py-1 gap-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to Opportunities
            </Badge>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Building clarity, speed & alignment in AI and robotics programs.
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              AI Program Manager • 8+ Years • Robotics • AI Ops • SaaS Delivery
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {["PMP®", "CSM®", "SAFe®", "Lean Six Sigma GB"].map((cert) => (
              <Badge key={cert} variant="secondary" className="rounded-full px-4 py-1 text-sm font-normal border border-border">
                {cert}
              </Badge>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-2 sm:gap-4 py-4 border-y border-border/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { label: "Programs Shipped", value: "30+" },
              { label: "Experts Managed", value: "150+" },
              { label: "On-Time Releases", value: "95%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="/Sugam_CV.pdf" download className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full gap-2 group">
                Download Résumé
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/ersugamsharma" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full rounded-full gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            
            {/* 3D Topmate Button */}
            <a href="https://topmate.io/sugam_sharma_pmp_csm?utm_source=linkedin&utm_medium=product&utm_campaign=ss" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto relative group bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-full px-6 py-2.5 shadow-[0_4px_0_rgb(194,65,12)] active:shadow-[0_0px_0_rgb(194,65,12)] active:translate-y-[4px] transition-all flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Video className="h-4 w-4" />
                <span className="relative z-10">Connect on Topmate</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mb-8"
          >
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
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center relative z-30"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2">
              Sugam Sharma
            </h2>
          </motion.div>

          {/* Funky Playground Link */}
          <motion.a
            href="#playground"
            className="relative md:absolute mt-8 md:mt-0 md:-bottom-4 right-0 md:-right-12 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg cursor-pointer hover:bg-primary/90"
            initial={{ y: 0, rotate: 5 }}
            animate={{ y: [-5, 5, -5] }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }}
          >
            <span>🎮 Try the PM Games!</span>
          </motion.a>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-0 md:-right-4 bg-card p-3 rounded-lg shadow-lg border border-border z-20 hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Status: On Track
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 -left-8 bg-card p-3 rounded-lg shadow-lg border border-border z-20 hidden md:block"
            animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="space-y-2 w-32">
              <div className="h-2 bg-muted rounded w-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
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
