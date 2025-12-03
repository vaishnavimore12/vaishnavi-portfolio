import "./Project.css";
import view from "../images/view.svg";

function Project() {
  return (
    <div className="body" id="project">

<span className="work"> My Projects</span>
      <div className="row4">
      
        
        <div className="column4" data-aos="zoom-in">
          <ul>
            <li>
              <span className="title">Rock-Paper-Scisoor Game</span>
            </li>
            <li>
              <span className="plat">Platform : </span>Reactjs
            </li>
            <li>
              <span className="desc">Description : </span>A small interactive game where the user picks rock, paper, or scissors and the bot chooses randomly. 
              The hands animate before showing the result, and the game displays whether you win, lose, or tie. Built with React using state, simple game logic, 
              and images from the public folder.
            </li>
            <li><button className="view-btn" onClick={()=> window.location.href="https://vaishnavimore12.github.io/Rock-paper-scissor/"}>View Project <img className="view" src={view}></img></button></li>
          </ul>
        </div>

        <div className="column4" data-aos="zoom-in">
          <ul>
            <li>
              <span className="title">Anime Dimension Cube</span>
            </li>
            <li>
              <span className="plat">Platform : </span>HTML/CSS
            </li>
            <li>
              <span className="desc">Description : </span>A visually engaging 3D cube created using HTML and CSS. Each face of the cube displays an image, and CSS 3D transforms position the sides in space to form a rotating cube. The project also includes a second inner cube for added depth, showcasing my skills in 3D transforms, animations, and creative UI design.
            </li>
            <li><button className="view-btn" onClick={()=> window.location.href="https://vaishnavimore12.github.io/3Dcube/"} >View Project <img className="view" src={view}></img></button></li>
          </ul>
        </div>
       
      </div>

      <span className="acd"> Academic Projects</span>

            <div className="row">

        
        <div className="column" data-aos="zoom-in">
          <ul>
            <li>
              <span className="title">HomEase</span>
            </li>
            <li>
              <span className="plat">Platform : </span>Java, SpringBoot,
              Reactjs, SQL
            </li>
            <li>
              <span className="desc">Description : </span>HomEase is a platform
              for the persons who are relocated for there jobs in different
              cities. They all have a common issue to find right person for
              doing there house hold work such as electrician, plumber etc. So,
              we provide them the services at there door steps i.e. HomEase
            </li>
            
          </ul>
        </div>
        <div className="column" data-aos="zoom-in" >
          <ul>
            <li>
              <span className="title">Calorie Estimation from Food images</span>
            </li>
            <li>
             
              <span className="plat">Platform : </span>Python
            </li>
            <li>
              <span className="desc">Description : </span>The main objective of
              my team project is to estimate calorie from food image.The system
              works as it take image by user and after several process like
              segmentation to segment the image, CNN to recognized image the
              final output is showed like fruit image with its name and
              estimated calorie.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Project;
