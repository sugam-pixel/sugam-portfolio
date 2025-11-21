import { motion } from "framer-motion";
import { Check } from "lucide-react";

const skills = {
  "AI Program Delivery": [
    "AHT Optimization", "Eval Ops Cycles", "RLHF Workflows", "Quality Frameworks", "Contributor Signals", "Model Evaluation", "Data Pipeline Ops"
  ],
  "Robotics Execution": [
    "HW/SW Integration", "Regression QA", "Release Governance", "Field Testing", "Safety Critical Ops", "Fleet Management", "Sensor Calibration Cycles"
  ],
  "Program Leadership": [
    "Multi-squad Orchestration", "Stakeholder Alignment", "Escalation Mgmt", "Sprint Governance", "Risk Gating", "OKRs & KPIs", "Vendor Management"
  ],
  "Tools & Tech": [
    "Jira / Confluence", "ADO / Smartsheet", "Python (Data Analysis)", "Tableau / PowerBI", "PRD / SRS Writing", "SQL (Basic)", "Linear"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 container mx-auto px-4">
      <div className="mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills Grid
        </motion.h2>
        <p className="text-muted-foreground">Core competencies across the program lifecycle.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
            className="bg-card border rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary/20 rounded-sm" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <motion.div 
                  key={skill}
                  className="px-3 py-1.5 bg-muted/50 rounded-full text-sm text-muted-foreground border border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.03) }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
