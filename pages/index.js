import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Content from "../components/Content.js";
import Testimonials from "../components/Testimonials.js";
import Gallery from "../components/Gallery.js";
import Footer from "../components/Footer.js";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}
