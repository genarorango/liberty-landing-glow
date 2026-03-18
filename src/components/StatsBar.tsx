import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3,000+", label: "Entrepreneurs Funded", isMoney: false },
  { value: "$75M+", label: "Capital Secured", isMoney: true },
  { value: "30+", label: "Years Experience", isMoney: false },
  { value: "5-Star", label: "Rated", isMoney: false },
];

const StatsBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-dark bg-navy-deep border-y border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className={`text-2xl md:text-3xl font-bold ${s.isMoney ? "text-lime" : "text-white"}`}>{s.value}</div>
              <div className="text-sm text-white/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
