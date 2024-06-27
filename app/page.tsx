import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Mission from "./components/Mission";
import Roadmaps from "./components/Roadmaps";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
    
      <Hero />
      <AboutUs />
      <Mission />
      <Roadmaps />
      <Tokenomics />
      <Footer />
    </div>
  );
}
