import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

const experiences = [
  {
    company: "Mercor",
    role: "AI Program Manager",
    period: "Jul 2025 – Present",
    status: "on-track",
    sprint: "Q1",
    description: "Leading AI evaluation ops for global clients (OpenAI-aligned).",
    items: [
      "AHT optimization frameworks",
      "Contributor quality signals",
      "Cross-timezone cadence",
      "Throughput dashboards"
    ]
  },
  {
    company: "Techolution",
    role: "Program Manager",
    period: "Aug 2024 – Jun 2025",
    status: "challenging",
    sprint: "FY24",
    description: "Managed 2 CV streams, 30+ engineers & release governance.",
    items: [
      "95% milestone adherence",
      "Zero P0 at go-live",
      "Risk gating protocols",
      "Regression playbooks"
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
      <div className="container mx-auto px-4 mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl">
          Horizontal sprint board of my professional journey. Scroll to explore each role as a program increment.
        </p>
      </div>

      <div className="overflow-x-auto hide-scrollbar px-4 pb-12">
        <div className="flex gap-6 w-max mx-auto md:mx-0 min-w-full md:px-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[300px] md:w-[350px]"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group border-t-4 border-t-primary/10 hover:border-t-primary">
                {/* Drag Handle Visual */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-border group-hover:bg-primary/20 transition-colors" />
                
                <CardHeader className="pb-3 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-background flex gap-1 items-center text-xs font-normal">
                      <StatusIcon status={exp.status} />
                      {exp.status === "on-track" ? "On Track" : 
                       exp.status === "challenging" ? "At Risk" : "Done"}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {exp.sprint}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{exp.company}</CardTitle>
                  <CardDescription className="font-medium text-primary">{exp.role}</CardDescription>
                  <div className="text-xs text-muted-foreground mt-1">{exp.period}</div>
                </CardHeader>
                <CardContent className="pl-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.items.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
