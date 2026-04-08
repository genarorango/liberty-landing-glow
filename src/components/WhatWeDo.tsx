import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Settings, Shield, ArrowRight } from "lucide-react";

const CTA_URL = "/capital";

const cards = [
  { icon: Search, title: "Credit Profile Analysis", desc: "We analyze credit structure, utilization, profile strength, and risk indicators." },
  { icon: Map, title: "Funding Pathway Planning", desc: "We identify realistic funding pathways that may not require collateral or equity." },
  { icon: Settings, title: "Optimization Guidance", desc: "We help strengthen weaknesses before applications happen." },
  { icon: Shield, title: "Strategic Execution Support", desc: "We help avoid unnecessary denials and costly mistakes." },
];

const WhatWeDo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
              Strategic Business Funding Consulting for Entrepreneurs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Liberty Funding is a professional business funding consulting firm that helps entrepreneurs position themselves for <span className="text-lime">$50K+</span> in potential funding — without collateral, equity, or long operating history requirements.
            </p>
            <p className="text-primary font-semibold text-lg mb-8 italic">
              "We build structure before capital is pursued."
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Request a Funding Review <ArrowRight size={18} />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="rounded-xl p-6 border border-border bg-card hover:border-primary/30 transition-colors card-glow"
              >
                <c.icon size={28} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
