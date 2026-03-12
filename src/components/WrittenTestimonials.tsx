import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Jesse and his team are incredible. They walked me through every step and got me approved for $80,000 in business funding. Highly recommend!",
    author: "Verified Client",
    source: "Google Review",
  },
  {
    text: "I had no idea this was even possible. Liberty Funding helped me access $141,000 to grow my business. Life changing.",
    author: "Verified Client",
    source: "Google Review",
  },
  {
    text: "Professional, fast, and they actually deliver. Got funded in under a week.",
    author: "Verified Client",
    source: "Google Review",
  },
];

const WrittenTestimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="gradient-card rounded-xl p-6 md:p-8 border border-border card-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <Quote size={24} className="text-primary/30 mb-3" />
              <p className="text-muted-foreground leading-relaxed mb-6">{r.text}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm">{r.author}</p>
                <p className="text-xs text-muted-foreground">{r.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonials;
