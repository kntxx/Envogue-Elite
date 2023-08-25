import About from "./components/About";
import AllProducts from "./components/AllProducts";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrival";
import NewsLetter from "./components/NewsLetter";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brand />
      <About />
      <NewArrival />
      <AllProducts />
      <Blog />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </main>
  );
}
