import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Building2, Clock } from "lucide-react";

const cards = [
  { icon: DollarSign, title: "Access Up to $250K", desc: "Get access to substantial business funding without personal guarantees or collateral requirements." },
  { icon: Building2, title: "Build Business Credit", desc: "Establish and strengthen your business credit profile while accessing the capital you need." },
  { icon: Clock, title: "Flexible Terms", desc: "Choose from various funding options with terms that work for your business growth timeline." },
];

const WhyChoose = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-navy-deep">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Liberty Funding</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
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
              className="gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all card-glow group"
            >
              <div className="w-14 h-14 rounded-xl gradient-red flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <c.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
