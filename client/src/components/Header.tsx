import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const isDarkStored = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="font-bold text-lg tracking-tight cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Sugam Sharma
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {["Experience", "Skills", "Work", "Playground"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-primary/70 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a href="/Sugam_CV.pdf" download className="hidden sm:inline-flex">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
