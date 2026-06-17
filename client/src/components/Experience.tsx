import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

const experiences = [
  {
    company: "Mercor",
    role: "TPM II, AI Operations",
    period: "Jul 2025 – Present",
    status: "on-track",
    sprint: "Active",
    description: "AI evaluation & data programs for Obsidian & OpenAI. Built Claude Code workflows across 6+ daily ops.",
    items: [
      "150+ expert contractors across 2 programs",
      "6+ Claude Code AI workflows in production",
      "AI-powered sourcing & rate estimation",
      "Automated QC via review error analysis",
      "Real-time batch drop alerts & monitoring",
      "70% faster Intercom triage with AI"
    ],
    details: [
      "Owning Aesthetic Colosseum (Obsidian) + Project Babel (OpenAI) end-to-end — 150+ expert contractors, daily quality tracking, and client communication",
      "Built 6+ Claude Code AI workflows: SSOT auto-fill, AHT reporting, batch drop alerts (every 2h), task hoarding detection (every 6h), and weekly 1:1 prep",
      "Deployed AI-powered sourcing pipeline using geography-based rate estimation — shortlisted 85 from 118 candidates with composite scoring across YoE, interview score & outside wage",
      "Automated quality control via /review-errors skill: parses Airtable CSV exports + queries Ferrum DB to surface major/minor task errors per reviewer in seconds",
      "Reduced Intercom first-response time by ~70% using Maven AI agent for expert triage across two projects",
      "Cut weekly 1:1 prep from 30 min to under 2 min using /update-11 Claude skill for live doc updates"
    ]
  },
  {
    company: "Techolution",
    role: "Program Manager",
    period: "Aug 2024 – Jun 2025",
    status: "completed",
    sprint: "FY24",
    description: "Managed 2 CV streams, 30+ engineers & release governance.",
    items: [
      "95% milestone adherence",
      "Zero P0 at go-live",
      "Risk gating protocols",
      "Regression playbooks"
    ],
    details: [
      "Managed 2 CV streams with 30+ engineers",
      "Achieved 95% milestone adherence",
      "Ensured zero P0 defects at go-live",
      "Implemented risk gating protocols and regression playbooks"
    ]
  },
  {
    company: "Miso Robotics",
    role: "Program Manager",
    period: "Dec 2022 – Apr 2024",
    status: "completed",
    sprint: "Robotics v2.4",
    description: "Robotics HW/SW integration cycles & predictability.",
    items: [
      "Structured regression QA",
      "Dependency mapping",
      "Zero missed release windows",
      "HW/SW Integration"
    ],
    details: [
      "Orchestrated Robotics HW/SW integration cycles",
      "Implemented structured regression QA processes",
      "Managed dependency mapping across teams",
      "Achieved zero missed release windows",
      "Ensured predictability in delivery"
    ]
  },
  {
    company: "Early Roles",
    role: "Program Manager",
    period: "2018 – 2021",
    status: "completed",
    sprint: "Legacy",
    description: "OYO Life, OxfordCaps, Innovations Workspace.",
    items: [
      "Vendor management",
      "Resource allocation",
      "Process optimization",
      "Stakeholder management"
    ],
    details: [
      "Managed vendor relationships and contracts",
      "Optimized resource allocation across projects",
      "Streamlined operational processes",
      "Handled stakeholder management and reporting"
    ]
  }
];

function StatusIcon({ status }: { status: string }) {
  if (status === "on-track") return <CheckCircle2 className="text-green-500 w-4 h-4" />;
  if (status === "challenging") return <AlertCircle className="text-yellow-500 w-4 h-4" />;
  if (status === "completed") return <CheckCircle2 className="text-blue-500 w-4 h-4" />;
  return <Clock className="text-muted-foreground w-4 h-4" />;
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" className="py-24 bg-muted/30" ref={containerRef}>
      <div className="container mx-auto px-4 mb-8 sm:mb-12">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          <span className="hidden sm:inline">Horizontal sprint board of my professional journey. Hover over cards to see detailed responsibilities.</span>
          <span className="sm:hidden">Swipe to explore my journey. Tap cards for details.</span>
        </p>
      </div>

      <div className="overflow-x-auto hide-scrollbar px-4 pb-8 sm:pb-12">
        <div className="flex gap-4 sm:gap-6 w-max mx-auto md:mx-0 min-w-full md:px-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[260px] sm:w-[300px] md:w-[350px] group/card perspective-1000"
            >
              <div className="relative h-full transition-all duration-500 ease-out transform-style-3d group-hover/card:scale-105">
                <Card className="h-full relative overflow-hidden border-t-4 border-t-primary/10 hover:border-t-primary transition-colors bg-card z-10">
                  {/* Drag Handle Visual */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-border group-hover/card:bg-primary/20 transition-colors" />
                  
                  <CardHeader className="pb-3 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-background flex gap-1 items-center text-xs font-normal">
                        <StatusIcon status={exp.status} />
                        {exp.status === "on-track" ? "On Track" : 
                         exp.status === "challenging" ? "At Risk" : "Completed"}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                        {exp.sprint}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{exp.company}</CardTitle>
                    <CardDescription className="font-medium text-primary">{exp.role}</CardDescription>
                    <div className="text-xs text-muted-foreground mt-1">{exp.period}</div>
                  </CardHeader>
                  <CardContent className="pl-6 pb-6">
                    <p className="text-sm text-muted-foreground mb-4 group-hover/card:hidden">
                      {exp.description}
                    </p>
                    
                    {/* Collapsed View Items */}
                    <ul className="space-y-2 group-hover/card:hidden">
                      {exp.items.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expanded Details View */}
                    <motion.div 
                      className="hidden group-hover/card:block space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2">
                        {exp.details?.map((detail, i) => (
                          <li key={i} className="text-xs sm:text-sm flex items-start gap-2 text-foreground/90">
                            <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
