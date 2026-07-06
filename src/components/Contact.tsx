import { useState, FormEvent } from "react";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate standard email form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Store in localStorage for audit demonstration
      const messages = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
      messages.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem("portfolio_messages", JSON.stringify(messages));

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

      // Hide success toast after 5s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background soft blob */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Let's Collaborate
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Have a project concept, business requirement, or freelance inquiry? Send a line, and let's craft something special.
          </p>
        </div>

        {/* Form and info split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information & Socials Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 space-y-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent blur-xl pointer-events-none"></div>

              {/* Title info */}
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Contact Details</span>
              </h3>

              {/* Detail Blocks */}
              <div className="space-y-6">
                
                {/* Email address */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Direct Email</span>
                    <a
                      href="mailto:251ce017@srcw.ac.in"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      251ce017@srcw.ac.in
                    </a>
                  </div>
                </div>

                {/* Geography location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels panel */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Find me online</span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/dhanusriss"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:border-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/dhanusriss"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Actual Message Input Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-2xl rounded-full pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#121212]/75 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                {/* Email address input */}
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#121212]/75 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                {/* Detailed Message Text block */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Dhanusri, I would love to collaborate with you on..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121212]/75 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 hover:shadow-cyan-400/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Toast response message */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-[#090909]/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="p-3 rounded-full bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 mb-4 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-display font-bold text-white mb-2">Message Transmitted!</h4>
                    <p className="text-xs sm:text-sm text-gray-300 max-w-sm">
                      Thank you for reaching out. Your message has been compiled successfully, and I will connect with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-all cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
