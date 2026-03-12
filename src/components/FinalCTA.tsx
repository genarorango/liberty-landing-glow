import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageSquare, DollarSign, Users } from "lucide-react";

const cards = [
  { icon: MessageSquare, title: "Free Consultation", desc: "No cost to get started" },
  { icon: DollarSign, title: "$50,000+", desc: "Average funding secured" },
  { icon: Users, title: "3,000+", desc: "Entrepreneurs helped" },
];

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Join thousands of entrepreneurs who have successfully funded their business dreams. No collateral, no equity, no hassle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="gradient-card rounded-xl p-6 border border-primary/20 card-glow"
            >
              <c.icon size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://libertyfunding.us/start779500-1722"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-red text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:opacity-90 transition-all glow-red"
          >
            Apply For Funding Today <ArrowRight size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
