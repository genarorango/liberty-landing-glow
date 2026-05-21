import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";


const CTA_URL = "https://go.libertyfunding.us/capital";

const badges = [
  { amount: "$65,000", top: "12%", right: "2%", delay: 0.5 },
  { amount: "$80,000", top: "30%", right: "-4%", delay: 0.8 },
  { amount: "$141,000", bottom: "38%", right: "-2%", delay: 1.1 },
  { amount: "$50,000", bottom: "18%", right: "8%", delay: 1.4 },
];

const trustItems = [
  "No Hidden Fees",
  "0% APR Options",
  "Keep 100% Equity",
  "Full-Service Support",
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center overflow-hidden relative" style={{ background: "linear-gradient(to right, #0a1628 40%, #0a1628 60%, #1a0a12 100%)" }}>
      {/* Radial glow behind Jesse */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, #3a0a0a 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen pt-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Access{" "}
              <span className="text-lime">$50K–$250K</span>{" "}
              in Zero-Percent Business Funding
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed" style={{ color: "#9ca3af" }}>
              We handle everything from application to approval. You focus on growing your business while we secure the capital you need — no interest, no equity required.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all glow-red"
              >
                Apply For Funding <ArrowRight size={20} />
              </a>
              <a
                href="/accelerator"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(164,230,51,0.5)", color: "#A4E633" }}
              >
                Funding Accelerator <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <Check size={16} className="text-lime" />
                  {item === "0% APR Options" ? (
                    <span><span className="text-lime">0% APR</span> Options</span>
                  ) : (
                    item
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Jesse photo — full height, blending into background */}
          <div className="relative self-end flex justify-center lg:justify-center items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-[1]"
            >
              <video
                src="/videos/jesse-reel.mp4"
                poster="/videos/jesse-poster.jpg"
                controls
                playsInline
                className="w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-auto rounded-3xl shadow-2xl shadow-black/40"
              />
            </motion.div>

            {/* Floating badges */}
            {badges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: b.delay, duration: 0.5, type: "spring" }}
                className={`floating-badge z-10 ${i % 2 === 0 ? "animate-float" : "animate-float-slow"}`}
                style={{
                  top: (b as any).top,
                  bottom: (b as any).bottom,
                  right: (b as any).right,
                }}
              >
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-lime" />
                  <span className="font-bold text-lime">{b.amount}</span>
                </div>
                <p className="text-[10px] text-white/70">Approved</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
