import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3,000+", label: "Entrepreneurs Funded" },
  { value: "$75M+", label: "Capital Secured" },
  { value: "30+", label: "Years Experience" },
  { value: "5-Star", label: "Rated" },
];

const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-secondary/50 border-y border-border py-12 relative overflow-hidden">
      {/* Aura glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, hsl(8 100% 40% / 0.1), transparent 70%)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
