import { motion } from "framer-motion";
import { Check } from "lucide-react";

const skills = {
  "AI Program Delivery": [
    "AHT Optimization", "Eval Ops Cycles", "Data Workflows", "Quality Frameworks", "Contributor Signals"
  ],
  "Robotics Execution": [
    "HW/SW Integration", "Regression QA", "Release Governance", "Field Testing", "Safety Critical Ops"
  ],
  "Program Leadership": [
    "Multi-squad Orchestration", "Stakeholder Alignment", "Escalation Mgmt", "Sprint Governance", "Risk Gating"
  ],
  "Tools & Tech": [
    "Jira / Confluence", "ADO / Smartsheet", "Python (Data Analysis)", "Tableau / PowerBI", "PRD / SRS Writing"
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
            className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary/20 rounded-sm" />
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((skill, i) => (
                <motion.div 
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                >
                  <Check className="w-3 h-3 text-primary" />
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
