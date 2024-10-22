import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
// import About from "./component/About";
// import Project from "./component/Project.";
// import Contact from "./component/Contact";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      {/* <About />
      <Project />
      <Contact /> */}
      <Footer />
    </main>
  );
};

export default App;
