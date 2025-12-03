import "./Home.css";
import profilepic from "../images/portfoliopic.jpg";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";


function Home() {
  const project = () => {
    document.getElementById("project").scrollIntoView({ behaviour: "smooth" });
  };

  return (<div className="home">
    <div className="row1">
      <div className="column1">
        <img className="pic" src={profilepic} alt="Vaishnavi More" data-aos="fade-right"  ></img>
      </div>
      <div className="column2">
        <div className="top" data-aos="fade-left" data-aos-delay="400">
        <span className="name">
             Hi there! My name is <span style={{ color: "#FF010B" }}>Vaishnavi More</span>
           </span>
           <p className="role">
            I'm a Web Developer who enjoys building websites that are not just
             beautiful, but also fast and user friendly.
           </p>
       <button className="Projects" onClick={project}>
         Projects
       </button>
        
      

       <div className="download" data-aos="fade-up" data-aos-delay="600">
           <a href="/resume.pdf" download>
             <DotLottieReact
              src="https://lottie.host/9c6d08a6-4e46-4f34-bb23-3bb703225210/QqTmcowXLE.lottie"
             loop
             autoplay
             style={{width: "80px", display: "block", margin: "0 auto 10px auto"}}
           />
           Download Resume
         </a>
       </div>
      </div>
    </div>
</div>
  </div>

  );
}
export default Home;

