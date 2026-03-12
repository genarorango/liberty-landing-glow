import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    title: "Meet Jesse Tacoronte",
    desc: "Watch Jesse share his journey from building seven-figure businesses to helping entrepreneurs access the capital they need to succeed.",
    embedUrl: "https://drive.google.com/file/d/1wWYnmoPTppZ_3N1NT0QdUiEm95hDxDJ7/preview",
  },
  {
    title: "Innovative Funding Strategies",
    desc: "Discover Jesse's secret to real estate success through strategic business credit and zero-percent funding strategies.",
    embedUrl: "https://www.youtube.com/embed/WhWrRDc5bqk",
  },
  {
    title: "Client Success Story",
    desc: "Real results from a real client.",
    embedUrl: "https://drive.google.com/file/d/1mftAsJg4LbhxVuiEuKi0_lHnoctHQxMc/preview",
  },
];

const VideoTestimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);

  const prev = () => setActiveIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

  return (
    <section ref={ref} className="py-20 md:py-28 bg-navy-deep">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Real People. <span className="text-gradient-red">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Hear from real people we've helped get real results for their businesses
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground">
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-4 md:gap-6 overflow-hidden max-w-4xl">
            {videos.map((v, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? {
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.85,
                    display: Math.abs(i - activeIndex) <= 1 || (activeIndex === 0 && i === videos.length - 1) || (activeIndex === videos.length - 1 && i === 0) ? "block" : "none",
                  } : {}}
                  transition={{ duration: 0.4 }}
                  className={`flex-shrink-0 w-64 md:w-72 ${!isActive ? "hidden md:block" : ""}`}
                >
                  {/* Phone frame */}
                  <div className="rounded-[2rem] border-2 border-border bg-card overflow-hidden">
                    <div className="aspect-[9/16] relative">
                      {playing === i ? (
                        <iframe
                          src={v.embedUrl}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="w-full h-full bg-secondary flex items-center justify-center cursor-pointer group"
                          onClick={() => setPlaying(i)}
                        >
                          <div className="w-16 h-16 rounded-full gradient-red flex items-center justify-center group-hover:scale-110 transition-transform glow-red">
                            <Play size={28} className="text-primary-foreground ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm">{v.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{v.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary/50 transition-colors text-muted-foreground hover:text-foreground">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
