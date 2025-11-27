import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    Aos.init({duration: 1000, once:false, easing:"ease-out", mirror:true, offset:120});
},[]);
  return (
    
    <div className="App">
      <title>Portfolio</title>
     <Navbar/>
    <Home/>
     <About/>
     <Project/>
     <Skills/>
     <Contact/>
    
     
    </div>
  );
}

export default App;
