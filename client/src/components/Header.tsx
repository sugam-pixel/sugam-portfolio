import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Case Studies", id: "work" },
  { label: "How I Work", id: "ask-sugam" },
  { label: "Playground", id: "playground" },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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

  useEffect(() => {
    const sectionIds = navItems.map((n) => n.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35, rootMargin: "-64px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
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
      setIsMobileMenuOpen(false);
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
          className="font-bold text-lg tracking-tight cursor-pointer z-50 relative"
          onClick={() => scrollToSection("hero")}
        >
          Sugam Sharma
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative transition-colors hover:text-primary ${activeSection === item.id ? "text-primary" : "text-foreground/70"}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2 z-50 relative">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a href="/Sugam_CV.pdf" download className="hidden sm:inline-flex">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-background border-b border-border p-4 pt-20 md:hidden shadow-xl"
            >
              <nav className="flex flex-col space-y-4 text-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg font-medium py-2 transition-colors ${activeSection === item.id ? "text-primary" : "hover:text-primary/70"}`}
                  >
                    {item.label}
                  </button>
                ))}
                <a href="/Sugam_CV.pdf" download className="inline-flex justify-center pt-2">
                  <Button variant="outline" className="w-full gap-2 rounded-full">
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
