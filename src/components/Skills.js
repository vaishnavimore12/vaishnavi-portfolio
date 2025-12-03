import react from "../images/react.png";
import js from "../images/js.png";
import html5 from "../images/html5.png";
import bootstrap from "../images/bootstrap.png";
import java from "../images/java.png";
import sql from "../images/sql.png";
import css from "../images/css.png";
import github from "../images/github.png";
import "./Skills.css";

function Skills(){
    const skills=[
        {icon: react, label:"ReactJs"},
        {icon: js, label:"Javascript"},
        {icon: bootstrap, label:"Bootstrap"},
        {icon: html5, label:"Html5"},
        {icon: css, label:"CSS"},
        {icon: java, label:"Java"},
        {icon: sql, label:"SQL"},
        {icon: github, label:"Github"},
    ]
    return (<div className="sec1" id="Skills">
     {/* <span className="skill" data-aos="fade-left">Skills</span> */}
     <div className="row2">
     <div className="carousel-container" data-aos="zoom-in">
     <div className="frontend"><span>Technical Skills</span> </div>
        <div className="carousel-track">
          {skills.map((s) => (
            <div className="col">
              <img src={s.icon} alt={s.label} />
              {s.label}
            </div>
          ))}

          
          {skills.map((s) => (
            <div className="col">
              <img src={s.icon} alt={s.label} />
              {s.label}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>)
}
export default Skills;