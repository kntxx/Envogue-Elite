import AllProducts from "./components/AllProducts";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import PageWrapper from "./page-wrapper";
import Hero from "./components/Hero";

import NewArrival from "./components/NewArrival";

import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <Navbar/>
        <Hero />
        <Brand />
        <NewArrival />
        <AllProducts />
        <Blog />
        <Testimonials />
     
      </PageWrapper>
    </main>
  );
}
