import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, BarChart3, Target, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    id: "mercor",
    title: "AHT Reduction in AI Evaluation Ops",
    company: "Mercor",
    objective: "Reduce variance; increase weekly throughput",
    approach: "Contributor performance signals; proactive low-engagement flags; cadence design",
    outcome: "~32% AHT variance reduction; stable quality; higher predictability",
    status: "Shipped",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    fullDetails: {
      problem: "High variability in Average Handling Time (AHT) across 500+ global contributors was leading to unpredictable delivery schedules and budget overruns.",
      strategy: [
        "Implemented real-time contributor performance signaling to identify outliers.",
        "Designed a proactive flagging system for low-engagement sessions.",
        "Restructured the review cadence to provide faster feedback loops."
      ],
      results: [
        "Reduced AHT variance by ~32% within 8 weeks.",
        "Stabilized quality scores above 95%.",
        "Increased weekly throughput capacity by 20% without adding headcount."
      ]
    }
  },
  {
    id: "miso",
    title: "Robotics HW–SW Release Predictability",
    company: "Miso Robotics",
    objective: "Cadence across HW/SW streams",
    approach: "Unified board; dependency map; structured regression; stability checkpoints",
    outcome: "Zero missed windows; earlier integration issue detection",
    status: "Completed",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    fullDetails: {
      problem: "Hardware and software teams were operating on disconnected cycles, causing integration bottlenecks and missed release windows.",
      strategy: [
        "Established a unified release board visualizing HW/SW dependencies.",
        "Mapped critical path dependencies to identify blockers early.",
        "Implemented structured regression QA with mandatory stability checkpoints."
      ],
      results: [
        "Achieved zero missed release windows for 12 consecutive months.",
        "Detected integration issues 2 weeks earlier in the cycle.",
        "Reduced hotfix releases by 40%."
      ]
    }
  },
  {
    id: "techolution",
    title: "Two-Stream CV Delivery",
    company: "Techolution",
    objective: "Deliver two CV streams with 30 engineers on schedule",
    approach: "Clear DRIs; risk gating; weekly priority alignment; regression routing",
    outcome: "95% milestone adherence; zero P0s at launch",
    status: "Success",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    fullDetails: {
      problem: "Simultaneous delivery of two complex Computer Vision streams with a large, distributed team was creating alignment risks.",
      strategy: [
        "Assigned clear Direct Responsible Individuals (DRIs) for each stream.",
        "Implemented strict risk gating criteria for feature promotion.",
        "Established weekly priority alignment sessions with stakeholders."
      ],
      results: [
        "Maintained 95% milestone adherence throughout the program.",
        "Launched with zero P0 (Critical) defects.",
        "Optimized resource utilization across streams."
      ]
    }
  }
];

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Case Studies
          </motion.h2>
          <p className="text-sm sm:text-base text-muted-foreground">Deep dives into program challenges and solutions.</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {cases.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
              onClick={() => setExpanded(expanded === study.id ? null : study.id)}
            >
              <div className="p-4 sm:p-6 flex items-start justify-between gap-2">
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">{study.company}</span>
                    <Badge variant="secondary" className={`text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0 ${study.color} hover:bg-transparent border-0`}>
                      {study.status}
                    </Badge>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary/80 transition-colors leading-tight">{study.title}</h3>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${expanded === study.id ? "rotate-180" : ""}`} 
                />
              </div>

              <AnimatePresence>
                {expanded === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-border/50 bg-muted/10">
                      {/* Summary Grid */}
                      <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-6 sm:mb-8">
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                            <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Objective
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{study.objective}</p>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Approach
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{study.approach}</p>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Outcome
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{study.outcome}</p>
                        </div>
                      </div>

                      {/* Detailed Breakdown */}
                      <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 border-t border-border/50">
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2 flex items-center gap-2">
                            <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                            The Challenge
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {study.fullDetails.problem}
                          </p>
                        </div>
                        
                        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                              Strategy Executed
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {study.fullDetails.strategy.map((item, i) => (
                                <li key={i} className="text-xs sm:text-sm text-muted-foreground flex gap-2 items-start">
                                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                              Key Results
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {study.fullDetails.results.map((item, i) => (
                                <li key={i} className="text-xs sm:text-sm text-muted-foreground flex gap-2 items-start">
                                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
