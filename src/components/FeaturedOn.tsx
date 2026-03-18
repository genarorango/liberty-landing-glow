import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = ["Daily Mail", "New York Magazine", "The Real Deal", "Business Insider", "The New York Times"];

const FeaturedOn = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-sm tracking-[0.3em] text-muted-foreground uppercase mb-10"
        >
          As Featured On
        </motion.p>

        <div className="overflow-hidden">
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 0.4, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ opacity: 0.8 }}
                className="text-lg md:text-xl font-semibold text-foreground/40 transition-opacity cursor-default whitespace-nowrap"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
