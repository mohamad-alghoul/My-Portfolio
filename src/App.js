import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
    <Navbar />
    <Sidebar />
    <Intro />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
