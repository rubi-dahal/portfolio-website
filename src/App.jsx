import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
