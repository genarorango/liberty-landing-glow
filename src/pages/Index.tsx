import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedOn from "@/components/FeaturedOn";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import VideoTestimonials from "@/components/VideoTestimonials";
import VerifiedReviews from "@/components/VerifiedReviews";
import WrittenTestimonials from "@/components/WrittenTestimonials";
import AboutJesse from "@/components/AboutJesse";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturedOn />
      <WhatWeDo />
      <WhyChoose />
      <HowItWorks />
      <VideoTestimonials />
      <VerifiedReviews />
      <WrittenTestimonials />
      <AboutJesse />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
