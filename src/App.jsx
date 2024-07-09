/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Offering from "./Components/Offering";
import Testi from "./Components/Testi";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <Offering />
        <Gallery />
        <Testi />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
