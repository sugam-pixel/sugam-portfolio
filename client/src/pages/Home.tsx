import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Playground from "@/components/Playground";
import AskSugam from "@/components/AskSugam";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Header />
      <main className="relative">
        <Hero />

        <section className="relative">
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <motion.div
              className="max-w-3xl"
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Who I Am</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI &amp; Technology Program Manager with 8+ years across AI evaluation ops, robotics delivery, and multi-squad SaaS programs. I turn ambiguity into predictable pipelines—balancing speed with quality through disciplined systems, not heroics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                <div className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full">
                  MS Engineering Mgmt (SJSU)
                </div>
                <div className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full">
                  Agile / Scrum / SAFe
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Experience />
        <Skills />
        <CaseStudies />
        <AskSugam />
        <Playground />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
