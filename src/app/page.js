import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner";
import NewsLogoSlider from "./components/NewsLogoSlider";
import AboutUsSection from "./components/AboutUs";
import OurFinance from "./components/OurFinance";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Banner />
    <NewsLogoSlider />
    <AboutUsSection />
    <OurFinance />
   </div>
  );
}
