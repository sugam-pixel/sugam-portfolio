import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:sugam.sharma041@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <footer id="contact" className="border-t bg-muted/10 relative">
      <motion.div
        className="h-1 bg-primary absolute top-0 left-0"
        style={{ width }}
      />

      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 items-start">
          {/* Left — intro + social links */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Let's ship something great.</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
              Open for AI Program Management roles. Let's discuss how I can bring clarity and speed to your engineering teams.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8">
              <a href="mailto:sugam.sharma041@gmail.com">
                <Button size="default" className="rounded-full gap-2 text-sm sm:text-base">
                  <Mail className="h-4 w-4" />
                  Email Directly
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ersugamsharma" target="_blank" rel="noreferrer">
                <Button variant="outline" size="default" className="rounded-full gap-2 text-sm sm:text-base">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="text-muted-foreground text-xs sm:text-sm space-y-2">
              <div><span className="font-medium text-foreground">Location:</span> Ghaziabad, India</div>
              <div><span className="font-medium text-foreground">Email:</span> sugam.sharma041@gmail.com</div>
            </div>
          </div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center gap-3"
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
                <p className="font-semibold text-lg">Opening your email client…</p>
                <p className="text-sm text-muted-foreground">Your message is pre-filled and ready to send.</p>
                <Button variant="ghost" size="sm" className="mt-2" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-semibold text-base mb-1">Send a message</h3>
                <Input
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl"
                />
                <Textarea
                  placeholder="What would you like to discuss?"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-xl resize-none"
                />
                <Button type="submit" className="w-full rounded-xl gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-center text-[10px] sm:text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Sugam Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
