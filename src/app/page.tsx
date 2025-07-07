import CallToAction from "@/components/Landing/CallToAction";
import Features from "@/components/Landing/Features";
import Footer from "@/components/Landing/Footer";
import Hero from "@/components/Landing/Hero";
import LivePreview from "@/components/Landing/LivePreview";
import Navbar from "@/components/Landing/Navbar";
import Testimonials from "@/components/Landing/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="live-preview">
        <LivePreview />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="call-to-action">
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
