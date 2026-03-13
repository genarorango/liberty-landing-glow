import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedOn from "@/components/FeaturedOn";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import VideoTestimonials from "@/components/VideoTestimonials";
import WrittenTestimonials from "@/components/WrittenTestimonials";
import AboutJesse from "@/components/AboutJesse";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* Hero (white) → StatsBar (dark) */}
      <div className="section-fade-to-dark" />
      <StatsBar />
      {/* StatsBar (dark) → FeaturedOn (white) */}
      <div className="section-fade-to-light" />
      <FeaturedOn />
      {/* FeaturedOn (white) → WhatWeDo (dark) */}
      <div className="section-fade-to-dark" />
      <WhatWeDo />
      {/* WhatWeDo (dark) → WhyChoose (white) */}
      <div className="section-fade-to-light" />
      <WhyChoose />
      {/* WhyChoose (white) → HowItWorks (dark) */}
      <div className="section-fade-to-dark" />
      <HowItWorks />
      {/* HowItWorks (dark) → VideoTestimonials (white) */}
      <div className="section-fade-to-light" />
      <VideoTestimonials />
      {/* VideoTestimonials (white) → WrittenTestimonials (dark) */}
      <div className="section-fade-to-dark" />
      <WrittenTestimonials />
      {/* WrittenTestimonials (dark) → AboutJesse (white) */}
      <div className="section-fade-to-light" />
      <AboutJesse />
      {/* AboutJesse (white) → FinalCTA (dark) */}
      <div className="section-fade-to-dark" />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
