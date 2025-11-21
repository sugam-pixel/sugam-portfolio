import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <footer id="contact" className="border-t bg-muted/10 relative">
      <motion.div 
        className="h-1 bg-primary absolute top-0 left-0"
        style={{ width }} 
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's ship something great.</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Open for AI Program Management roles. Let's discuss how I can bring clarity and speed to your engineering teams.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="mailto:sugam.sharma041@gmail.com">
                <Button size="lg" className="rounded-full gap-2">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ersugamsharma" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="rounded-full gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <div className="md:text-right text-muted-foreground text-sm space-y-4">
            <div>
              <div className="font-medium text-foreground mb-1">Sugam Sharma</div>
              <div>Ghaziabad, India</div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-1">Email</div>
              <div>sugam.sharma041@gmail.com</div>
            </div>
            <div className="pt-8 text-xs opacity-50">
              &copy; {new Date().getFullYear()} Sugam Sharma. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
