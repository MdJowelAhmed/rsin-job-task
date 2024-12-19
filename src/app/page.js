import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner";
import NewsLogoSlider from "./components/NewsLogoSlider";
import AboutUsSection from "./components/AboutUs";
import OurFinance from "./components/OurFinance";
import Testimonials from "./components/Testimonials";
import ProcessSection from "./components/ProcessSection";
import ImageSection from "./components/ImageSection";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Banner />
    <NewsLogoSlider />
    <AboutUsSection />
    <OurFinance />
    <Testimonials />
    <ProcessSection />
    <ImageSection />
   </div>
  );
}
