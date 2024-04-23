import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Middle from "@/components/Middle";
import Footer from "@/components/Footer";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-400 dark:bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCourses />
      <Middle />
      <Footer />
    </main>
  );
}
