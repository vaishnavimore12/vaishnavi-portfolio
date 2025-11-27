import "./About.css";
import girl from "../images/girlll.png";
function About() {
  return (
    <div className="section" id="about">
      <div className="block">
        <img className="girl" src={girl} alt="girl" data-aos="zoom-out-up"></img>
        <div className="para" data-aos="zoom-in-up" data-aos-delay="400">
          <span className="abt">About Me</span>
          <p>
            Hi! I’m Vaishnavi More, a passionate Web Developer specializing in
            building responsive, user-friendly, and visually engaging websites.
            I love turning creative ideas into fully functional digital
            experiences that people enjoy using. With experience in HTML, CSS,
            JavaScript, and modern frameworks like React and Node.js, I focus on
            writing clean, efficient code while keeping performance and
            usability in mind. I enjoy solving complex problems, learning new
            technologies, and constantly improving my craft.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
