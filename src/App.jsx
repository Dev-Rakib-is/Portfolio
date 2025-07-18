
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/layouts/Header"
import Banner from "./components/sections/Banner";
import Counter from "./components/sections/Counter";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Testimonials from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import Footer from "./components/layouts/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header/>
      <Banner/>
      <Counter />
      <Services/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );

}
export default App;
