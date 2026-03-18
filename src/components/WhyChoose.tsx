import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Building2, Clock } from "lucide-react";

const cards = [
  { icon: DollarSign, title: "Access Up to $250K", desc: "Get access to substantial business funding without personal guarantees or collateral requirements.", hasMoney: true, moneyTitle: <>Access Up to <span className="text-lime">$250K</span></> },
  { icon: Building2, title: "Build Business Credit", desc: "Establish and strengthen your business credit profile while accessing the capital you need.", hasMoney: false, moneyTitle: null },
  { icon: Clock, title: "Flexible Terms", desc: "Choose from various funding options with terms that work for your business growth timeline.", hasMoney: false, moneyTitle: null },
];

const floatingItems = Array.from({ length: 20 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * -30}s`,
  animationDuration: `${20 + Math.random() * 15}s`,
  size: 16 + Math.random() * 8,
  opacity: 0.04 + Math.random() * 0.04,
}));

const WhyChoose = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-dark py-20 md:py-28 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {floatingItems.map((item, i) => (
          <span
            key={i}
            className="absolute animate-float-up text-lime"
            style={{
              left: item.left,
              bottom: `-${item.size}px`,
              animationDelay: item.animationDelay,
              animationDuration: item.animationDuration,
              fontSize: `${item.size}px`,
              opacity: item.opacity,
            }}
          >
            $
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Liberty Funding</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            We've simplified business funding to help you focus on what matters — growing your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="gradient-card-dark rounded-xl p-8 border border-white/10 hover:border-primary/30 transition-all card-glow-dark group"
            >
              <div className="w-14 h-14 rounded-xl gradient-red flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <c.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{c.moneyTitle || c.title}</h3>
              <p className="text-white/60 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
