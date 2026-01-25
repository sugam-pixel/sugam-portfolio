import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Playground from "@/components/Playground";
import AskSugam from "@/components/AskSugam";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Header />
      <main>
        <Hero />
        <div className="bg-card relative z-10 shadow-xl rounded-t-[2rem] md:rounded-t-[3rem] border-t border-border/50 mt-[-2rem]">
          <div className="pt-12">
            <div className="container mx-auto px-4 mb-24">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m an AI & Technology Program Manager with 8+ years across AI evaluation ops, robotics delivery, and multi-squad SaaS programs. I turn ambiguity into predictable pipelines—balancing speed with quality through disciplined systems, not heroics.
                </p>
                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <div className="px-3 py-1 bg-muted rounded-full">MS Engineering Mgmt (SJSU)</div>
                  <div className="px-3 py-1 bg-muted rounded-full">Agile / Scrum / SAFe</div>
                </div>
              </div>
            </div>

            <Experience />
            <Skills />
            <CaseStudies />
            <AskSugam />
            <Playground />
            <Philosophy />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
