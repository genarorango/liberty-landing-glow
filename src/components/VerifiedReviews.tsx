import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

const googleReviews = [
  { text: "Jesse and his team made the entire process seamless. I was approved for $95,000 in business funding within days. Can't recommend them enough!", author: "Verified Client" },
  { text: "I was skeptical at first, but Liberty Funding delivered exactly what they promised. Professional, transparent, and fast.", author: "Verified Client" },
  { text: "They helped me secure $120,000 at 0% interest. This changed my business trajectory completely. Five stars all the way.", author: "Verified Client" },
];

const trustpilotReviews = [
  { text: "Outstanding service from start to finish. The team walked me through every step and I never felt pressured. Highly recommend to any business owner.", author: "Verified Client" },
  { text: "Got funded in under a week. The process was straightforward and the team was incredibly responsive to all my questions.", author: "Verified Client" },
  { text: "Best decision I made for my business. Liberty Funding helped me access capital I didn't even know was available to me.", author: "Verified Client" },
];

const Stars = ({ color = "text-green-500" }: { color?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className={`${color} fill-current`} />
    ))}
  </div>
);

const ReviewCard = ({ text, author }: { text: string; author: string }) => (
  <div
    className="rounded-xl p-5 flex flex-col gap-3"
    style={{
      backgroundColor: "#162032",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <Stars />
    <p className="text-gray-300 text-sm leading-relaxed">"{text}"</p>
    <p className="text-gray-500 text-xs font-medium mt-auto">— {author}</p>
  </div>
);

const VerifiedReviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 md:py-28" style={{ backgroundColor: "#0d1b2e" }}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Publicly Verified. <span className="text-gradient-red">Fully Transparent.</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            We operate openly. See what real clients are saying about their experience working with us.
          </p>
        </motion.div>

        {/* Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-lg">Google Reviews</span>
              <span className="text-white font-bold">5.0</span>
              <Stars color="text-yellow-400" />
              <span className="text-gray-400 text-sm">(70 reviews)</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View on Google <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {googleReviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <ReviewCard text={r.text} author={r.author} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trustpilot Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-lg">Trustpilot Reviews</span>
              <span className="text-white font-bold">4.8</span>
              <Stars color="text-green-500" />
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View on Trustpilot <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {trustpilotReviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <ReviewCard text={r.text} author={r.author} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerifiedReviews;
