import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import thumb1 from "@/assets/testimonial-thumb-1.jpeg";
import thumb2 from "@/assets/testimonial-thumb-2.jpeg";
import thumb3 from "@/assets/testimonial-thumb-3.jpeg";
import thumb4 from "@/assets/testimonial-thumb-4.png";
import thumb5 from "@/assets/testimonial-thumb-5.png";

const videos = [
  {
    title: "Client Testimonial 1",
    description: "Hear how we helped this client secure funding to grow their business.",
    embedUrl: "https://drive.google.com/file/d/1wWYnmoPTppZ_3N1NT0QdUiEm95hDxDJ7/preview",
    thumbnail: thumb1,
    useModal: false,
  },
  {
    title: "Client Testimonial 2",
    description: "A real success story — from application to approval in under a week.",
    embedUrl: "https://drive.google.com/file/d/1cbAHhjm1W7a6eZh0dE408lfarYbeiaul/preview",
    thumbnail: thumb2,
    useModal: true,
  },
  {
    title: "Client Testimonial 3",
    description: "Watch how zero-percent funding changed this entrepreneur's trajectory.",
    embedUrl: "https://drive.google.com/file/d/1mftAsJg4LbhxVuiEuKi0_lHnoctHQxMc/preview",
    thumbnail: thumb3,
    useModal: false,
  },
  {
    title: "Client Testimonial 4",
    description: "See how our funding process helped this business owner take the next step.",
    embedUrl: "https://drive.google.com/file/d/11qpTECfZcja0kMwR_NkS62bpZ9L87_iH/preview",
    thumbnail: thumb4,
    useModal: true,
  },
  {
    title: "Client Testimonial 5",
    description: "Another success story — real funding for real entrepreneurs.",
    embedUrl: "https://drive.google.com/file/d/1aNSIIWXbnYXJNXSlmNaoxWHBySRRD71w/preview",
    thumbnail: thumb5,
    useModal: true,
  },
];

const VideoTestimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [playing, setPlaying] = useState<number | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlay = (i: number) => {
    const v = videos[i];
    if (v.useModal) {
      setModalVideo(v.embedUrl);
    } else {
      setPlaying(i);
    }
  };

  const scrollLeft = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const scrollRight = () => setCurrentIndex((prev) => Math.min(videos.length - 1, prev + 1));

  return (
    <section ref={ref} className="py-20 md:py-28" style={{ backgroundColor: "#0d1b2e" }}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Real People. <span className="text-gradient-red">Real Results</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Hear from real people we've helped get real results for their businesses
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((v, i) => (
            <VideoCard key={i} video={v} index={i} inView={inView} playing={playing === i} onPlay={() => handlePlay(i)} />
          ))}
        </div>

        {/* Mobile carousel with arrows */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((v, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <VideoCard video={v} index={i} inView={inView} playing={playing === i} onPlay={() => handlePlay(i)} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            disabled={currentIndex === videos.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <iframe
              src={modalVideo}
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

interface VideoCardProps {
  video: typeof videos[0];
  index: number;
  inView: boolean;
  playing: boolean;
  onPlay: () => void;
}

const VideoCard = ({ video, index, inView, playing, onPlay }: VideoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.2 + index * 0.15 }}
    className="rounded-xl overflow-hidden p-3"
    style={{
      backgroundColor: "#162032",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
    }}
  >
    <div className="aspect-video relative rounded-lg overflow-hidden cursor-pointer" onClick={onPlay}>
      {playing && !video.useModal ? (
        <iframe
          src={video.embedUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-full relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
            <div className="w-14 h-14 rounded-full gradient-red flex items-center justify-center group-hover:scale-110 transition-transform glow-red">
              <Play size={24} className="text-white ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="pt-4 pb-2 px-1">
      <h3 className="font-bold text-white text-sm">{video.title}</h3>
      <p className="text-gray-400 text-xs mt-1 leading-relaxed">{video.description}</p>
    </div>
  </motion.div>
);

export default VideoTestimonials;
