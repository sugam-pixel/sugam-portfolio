import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  ChevronRight, 
  Search, 
  X,
  ShieldAlert,
  Clock,
  Target,
  Users,
  BarChart3,
  GitMerge,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How do you resolve conflicts across teams or senior stakeholders?",
    answer: "I resolve conflicts by grounding discussions in data, outcomes, and business priorities. My role is to remove emotion from decision-making, align stakeholders on shared objectives, and drive resolutions that protect delivery and relationships.",
    tags: ["Stakeholder Management", "Communications", "Resource Management"],
    icon: Users
  },
  {
    question: "How do you control scope creep while keeping teams agile?",
    answer: "Scope change is managed through structured impact analysis across timeline, cost, and quality. This allows leadership to make informed decisions without slowing execution or introducing delivery risk.",
    tags: ["Scope Management", "Integration", "Change Control"],
    icon: Target
  },
  {
    question: "What is your approach when requirements are unclear or evolving?",
    answer: "I bring structure to ambiguity through documented assumptions, decision checkpoints, and short execution cycles. This ensures progress continues even when inputs are imperfect.",
    tags: ["Scope Management", "Requirements", "Integration"],
    icon: Lightbulb
  },
  {
    question: "How do you ensure predictable execution and on-time delivery?",
    answer: "I establish delivery governance early, including milestones, dependencies, and risk indicators. Continuous monitoring allows early intervention rather than last-minute escalation.",
    tags: ["Schedule Management", "Integration", "Risk Management"],
    icon: Clock
  },
  {
    question: "How do you manage multiple programs simultaneously?",
    answer: "I prioritize initiatives based on business impact, risk exposure, and strategic alignment. Centralized dashboards provide leadership visibility without operational noise.",
    tags: ["Program Management", "Resource Management"],
    icon: BarChart3
  },
  {
    question: "How do you manage operational and delivery risk?",
    answer: "Risks are identified early, quantified, and assigned clear ownership. Mitigation plans are reviewed continuously to prevent escalation into production or customer-impacting issues.",
    tags: ["Risk Management", "Integration"],
    icon: ShieldAlert
  },
  {
    question: "How do you communicate with executive leadership?",
    answer: "I deliver concise, decision-ready updates focused on outcomes, risks, and trade-offs. Leaders receive clarity, not status reports.",
    tags: ["Communications", "Stakeholder Management"],
    icon: Users
  },
  {
    question: "What delivery frameworks or operating models do you use?",
    answer: "I apply Agile, Hybrid, or Waterfall models based on organizational maturity and risk profile. The framework serves execution—not the other way around.",
    tags: ["Development Approach", "Integration"],
    icon: GitMerge
  }
];

export default function AskSugam() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? faq.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(faqs.flatMap(faq => faq.tags)));

  return (
    <>
      <section id="ask-sugam" className="py-24 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 sm:p-12 opacity-10">
            <MessageCircle className="w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 text-primary" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Have a question about my approach?</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Explore how I handle conflict, scope creep, risk, and delivery in high-stakes environments.
            </p>
            
            <Button 
              size="lg" 
              className="rounded-full h-14 px-8 text-lg gap-2 shadow-xl hover:scale-105 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="w-5 h-5" />
              Ask Sugam
              <ChevronRight className="w-5 h-5 opacity-50" />
            </Button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-4xl h-[90vh] sm:h-[85vh] bg-card border shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden flex flex-col mx-2"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-3 sm:p-4 md:p-6 border-b flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">PM Knowledge Base</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Sugam's Approach to Program Management</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full h-8 w-8 sm:h-10 sm:w-10">
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>

              {/* Search & Filters */}
              <div className="p-3 sm:p-4 md:p-6 border-b bg-card space-y-3 sm:space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search 'conflict', 'risk'..." 
                    className="pl-9 h-10 sm:h-12 text-sm sm:text-base md:text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 hide-scrollbar">
                  <Badge 
                    variant={selectedTag === null ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/90 transition-colors whitespace-nowrap text-[10px] sm:text-xs px-2 py-0.5"
                    onClick={() => setSelectedTag(null)}
                  >
                    All
                  </Badge>
                  {allTags.map(tag => (
                    <Badge 
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/90 transition-colors whitespace-nowrap text-[10px] sm:text-xs px-2 py-0.5"
                      onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <ScrollArea className="flex-1 p-3 sm:p-4 md:p-6 bg-muted/5">
                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow duration-200 border-primary/10 group">
                        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                          <div className="flex items-start justify-between gap-3 sm:gap-4">
                            <h4 className="font-semibold text-sm sm:text-base md:text-lg leading-tight group-hover:text-primary transition-colors">
                              {faq.question}
                            </h4>
                            <div className="bg-primary/5 p-1.5 sm:p-2 rounded-lg shrink-0">
                              <faq.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary/70" />
                            </div>
                          </div>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="pt-1 sm:pt-2 flex flex-wrap gap-1.5 sm:gap-2">
                            {faq.tags.map(tag => (
                              <span key={tag} className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60 bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                {filteredFaqs.length === 0 && (
                  <div className="text-center py-20 text-muted-foreground">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="text-lg">No matching answers found.</p>
                    <p className="text-sm">Try searching for different keywords or clear filters.</p>
                  </div>
                )}

                <div className="mt-8 sm:mt-12 text-center text-[10px] sm:text-xs text-muted-foreground border-t pt-6 sm:pt-8 pb-4">
                  <span className="hidden sm:inline">Execution aligned with PMBOK®, Agile Practice Guide, and PMI Program & Portfolio Management standards — applied pragmatically, not academically.</span>
                  <span className="sm:hidden">Aligned with PMBOK® & Agile standards.</span>
                </div>
              </ScrollArea>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
