import { motion } from "framer-motion";
import { FileText, Linkedin, ArrowRight } from "lucide-react";
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
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Building clarity, speed & alignment in AI and robotics programs.
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
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
            className="grid grid-cols-3 gap-4 py-4 border-y border-border/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { label: "Programs Shipped", value: "30+" },
              { label: "Engineers Led", value: "30" },
              { label: "On-Time Releases", value: "95%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
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
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src="/assets/photo.png" 
                alt="Sugam Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 bg-card p-3 rounded-lg shadow-lg border border-border z-20 hidden md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Status: On Track
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-0 bg-card p-3 rounded-lg shadow-lg border border-border z-20 hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="space-y-2 w-32">
              <div className="h-2 bg-muted rounded w-full overflow-hidden">
                <div className="h-full bg-primary w-[75%]" />
              </div>
              <div className="text-[10px] text-muted-foreground flex justify-between">
                <span>Sprint Progress</span>
                <span>75%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
