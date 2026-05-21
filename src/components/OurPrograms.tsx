import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

const CTA_URL = "https://go.libertyfunding.us/capital";

const programs = [
  {
    tag: null,
    name: "Done With You",
    subtitle: "Standard Done With You Program",
    desc: "Perfect for those who want to actively participate in their funding process",
    features: [
      "Dedicated Success Manager (120 days) via private Slack channel",
      "1-on-1 coaching with expert direction and structured accountability",
      "Business structuring guidance for best underwriting results",
      "Strategic bank targeting using proven data points",
      "Step-by-step application assistance ensuring accuracy and compliance",
      "Data-backed application sequencing to maximize approvals",
      "Access to aged corporations (optional) to boost eligibility",
      "Discounted credit repair services (optional, starting at special pricing)",
      "Inquiry removal assistance available ($400 fee)",
      "One flat price — no percentages, no hidden fees, no \"success fee\" gimmicks",
    ],
    popular: false,
  },
  {
    tag: "Most Popular",
    name: "VIP Plan",
    subtitle: "12-Month VIP Coaching Program",
    desc: "Built for entrepreneurs who want to scale and continuously grow access to capital",
    features: [
      "Multiple rounds of funding over 12 months",
      "Done-For-You service — we handle everything",
      "One-on-one coaching and advanced training",
      "Up to $250,000 in 0% business credit cards",
      "Credit health guidance for higher limits and additional funding opportunities",
      "Long-term growth strategy on leveraging business credit",
      "Dedicated account manager",
      "Full year of access",
      "One flat rate — no percentages, no hidden fees",
      "Average client saves $10K–$15K+ vs. traditional 10% programs",
    ],
    popular: true,
  },
  {
    tag: null,
    name: "Performance Plan",
    subtitle: "Performance-Based Program",
    desc: "Perfect for those who want results without upfront cost",
    features: [
      "Low enrollment fee to get started",
      "Pay 8–10% only after funding is received",
      "Designed for clients who want 0% business credit cards",
      "Expert application support throughout the process",
      "Access to lender relationships",
      "Perfect for those who prefer performance-based pricing",
      "Must be paid in full upon enrollment",
      "Does not include additional training or ongoing coaching",
      "Does not include credit leverage guidance once funded",
    ],
    popular: false,
  },
];

const OurPrograms = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="programs" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Programs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the program that fits your business goals
          </p>
        </motion.div>

        {/* Savings banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12 rounded-xl border border-primary/30 bg-primary/5 px-6 py-4 text-center"
        >
          <p className="text-foreground font-semibold text-base md:text-lg">
            Why Overpay for &ldquo;Success Fees&rdquo;?
          </p>
          <p className="text-muted-foreground text-sm md:text-base mt-1">
            Liberty Funding&apos;s Flat VIP Plan costs nearly half as much as the traditional 10% model —
            saving business owners{" "}
            <span className="text-lime font-bold">$10K–$15K+</span> on average while securing higher approval rates.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all card-glow ${
                p.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-red text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap glow-red">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-2">{p.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check size={15} className="text-lime mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                  p.popular
                    ? "gradient-red text-primary-foreground glow-red hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPrograms;
