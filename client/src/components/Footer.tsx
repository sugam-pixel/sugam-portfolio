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
      
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Let's ship something great.</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
              Open for AI Program Management roles. Let's discuss how I can bring clarity and speed to your engineering teams.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a href="mailto:sugam.sharma041@gmail.com">
                <Button size="default" className="rounded-full gap-2 text-sm sm:text-base">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ersugamsharma" target="_blank" rel="noreferrer">
                <Button variant="outline" size="default" className="rounded-full gap-2 text-sm sm:text-base">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right text-muted-foreground text-xs sm:text-sm space-y-3 sm:space-y-4">
            <div>
              <div className="font-medium text-foreground mb-1">Sugam Sharma</div>
              <div>Ghaziabad, India</div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-1">Email</div>
              <div className="break-all">sugam.sharma041@gmail.com</div>
            </div>
            <div className="pt-4 sm:pt-8 text-[10px] sm:text-xs opacity-50">
              &copy; {new Date().getFullYear()} Sugam Sharma. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
