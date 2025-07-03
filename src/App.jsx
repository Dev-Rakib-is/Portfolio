
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/layouts/Header"
import Banner from "./components/sections/Banner";
import Counter from "./components/sections/Counter";
import Services from "./components/sections/Services";



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
    </>
  );
}

export default App;
