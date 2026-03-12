import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Submit Application", desc: "Complete our simple application form with your basic business information." },
  { num: "02", title: "Strategy Session", desc: "Our team matches you with the best funding options." },
  { num: "03", title: "Get Funded", desc: "Receive your funding quickly, often within 48 hours of submission." },
  { num: "04", title: "Grow Your Business", desc: "Use your capital to start growing your business to new heights." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-gradient-red mb-4">{s.num}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://libertyfunding.us/start779500-1722"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all glow-red"
          >
            Apply for Funding Today <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
