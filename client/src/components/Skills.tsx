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
  "Tools & AI Ops": [
    "Claude Code", "Jira / Linear", "Snowflake SQL", "Airtable / Smartsheet", "Python (Data Analysis)", "Tableau / PowerBI", "MCP / Automation Workflows"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 container mx-auto px-4">
      <div className="mb-8 sm:mb-12">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills Grid
        </motion.h2>
        <p className="text-sm sm:text-base text-muted-foreground">Core competencies across the program lifecycle.</p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card border rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 sm:w-2 h-5 sm:h-6 bg-primary/20 rounded-sm" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {items.map((skill, i) => (
                <motion.div 
                  key={skill}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-muted/50 rounded-full text-xs sm:text-sm text-muted-foreground border border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
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
