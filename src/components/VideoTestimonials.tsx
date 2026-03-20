import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import thumb1 from "@/assets/testimonial-thumb-1.jpeg";
import thumb2 from "@/assets/testimonial-thumb-2.jpeg";
import thumb3 from "@/assets/testimonial-thumb-3.jpeg";

const videos = [
  {
    title: "Client Testimonial 1",
    embedUrl: "https://drive.google.com/file/d/1wWYnmoPTppZ_3N1NT0QdUiEm95hDxDJ7/preview",
    thumbnail: thumb1,
  },
  {
    title: "Client Testimonial 2",
    embedUrl: "https://www.youtube.com/embed/WhWrRDc5bqk",
    thumbnail: thumb2,
  },
  {
    title: "Client Testimonial 3",
    embedUrl: "https://drive.google.com/file/d/1mftAsJg4LbhxVuiEuKi0_lHnoctHQxMc/preview",
    thumbnail: thumb3,
  },
];

const VideoTestimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real People. <span className="text-gradient-red">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Hear from real people we've helped get real results for their businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all shadow-lg cursor-pointer"
              onClick={() => setPlaying(i)}
            >
              <div className="aspect-video relative">
                {playing === i ? (
                  <iframe
                    src={v.embedUrl}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full relative">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
                      <div className="w-14 h-14 rounded-full gradient-red flex items-center justify-center group-hover:scale-110 transition-transform glow-red">
                        <Play size={24} className="text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
