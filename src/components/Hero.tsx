import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import jesseHero from "@/assets/jesse-hero.png";


const CTA_URL = "https://libertyfunding.us/start779500-1722";

const badges = [
  { amount: "$65,000", top: "8%", left: "55%", delay: 0.5 },
  { amount: "$80,000", top: "20%", right: "0%", delay: 0.8 },
  { amount: "$141,000", top: "45%", right: "-5%", delay: 1.1 },
  { amount: "$50,000", bottom: "30%", right: "5%", delay: 1.4 },
  { amount: "$25,000", bottom: "12%", left: "50%", delay: 1.7 },
  { amount: "$75,000", top: "35%", left: "45%", delay: 2.0 },
];

const trustItems = [
  "No Hidden Fees",
  "0% APR Options",
  "Keep 100% Equity",
  "Full-Service Support",
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative" style={{ backgroundColor: "#eeecea" }}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Access{" "}
              <span className="text-lime">$50K–$250K</span>{" "}
              in Zero-Percent Business Funding
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We handle everything from application to approval. You focus on growing your business while we secure the capital you need — no interest, no equity required.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all glow-red"
            >
              Apply For Funding <ArrowRight size={20} />
            </a>

            <div className="flex flex-wrap gap-4 mt-8">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check size={16} className="text-primary" />
                  {item === "0% APR Options" ? (
                    <span><span className="text-lime">0% APR</span> Options</span>
                  ) : (
                    item
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden relative z-10 shadow-xl border-2 border-dashed border-muted-foreground/40 bg-muted/50 flex items-center justify-center p-6"
            >
              <p className="text-center text-muted-foreground font-semibold text-sm leading-relaxed">
                INSERT PRESS / REAL ESTATE ARTICLE PHOTO
              </p>
            </motion.div>

            {badges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: b.delay, duration: 0.5, type: "spring" }}
                className={`floating-badge ${i % 2 === 0 ? "animate-float" : "animate-float-slow"}`}
                style={{
                  top: b.top,
                  bottom: (b as any).bottom,
                  left: b.left,
                  right: (b as any).right,
                }}
              >
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-primary" />
                  <span className="font-bold text-lime">{b.amount}</span>
                </div>
                <p className="text-[10px] text-muted-foreground">Approved</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
