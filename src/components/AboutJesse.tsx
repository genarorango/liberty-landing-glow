import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import jessePhoto from "@/assets/jesse-photo.jpeg";

const tags = ["30+ Years in Business", "Real Estate Expert", "Serial Entrepreneur", "Credit Strategist"];

const aboutVideos = [
  { title: "Meet Jesse Tacoronte", embedUrl: "https://drive.google.com/file/d/1wWYnmoPTppZ_3N1NT0QdUiEm95hDxDJ7/preview", thumbnailUrl: null },
  { title: "Innovative Funding Strategies", embedUrl: "https://www.youtube.com/embed/WhWrRDc5bqk", thumbnailUrl: "https://img.youtube.com/vi/WhWrRDc5bqk/maxresdefault.jpg" },
];

const AboutJesse = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Jesse's Story & Expertise</h2>
          <p className="text-muted-foreground text-lg mt-4">30+ years building businesses and helping entrepreneurs succeed</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Jesse Tacoronte has spent over 30 years as a serial entrepreneur, real estate investor, and business credit strategist. As keynote speaker at the 2007 CFRI Award of Excellence after selling nearly <span className="text-lime">$30 million</span> in real estate in just two years, Jesse brings proven expertise to every client he works with.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full border border-primary/50 text-sm text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex justify-center"
          >
            <img
              src={jessePhoto}
              alt="Jesse Tacoronte"
              className="w-72 h-80 md:w-80 md:h-96 rounded-2xl object-cover shadow-xl border border-border"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {aboutVideos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="rounded-xl overflow-hidden border border-border bg-card shadow-lg"
            >
              <div className="aspect-video relative">
                {playingVideo === i ? (
                  <iframe src={v.embedUrl} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer group"
                    style={{
                      backgroundImage: v.thumbnailUrl ? `url(${v.thumbnailUrl})` : undefined,
                      backgroundColor: v.thumbnailUrl ? undefined : 'hsl(var(--muted))',
                    }}
                    onClick={() => setPlayingVideo(i)}
                  >
                    <div className="w-14 h-14 rounded-full gradient-red flex items-center justify-center group-hover:scale-110 transition-transform glow-red">
                      <Play size={24} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJesse;
