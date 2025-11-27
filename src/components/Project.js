import "./Project.css";

function Project() {
  return (
    <div className="body" id="project">
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
        <div className="column" data-aos="zoom-in" data-aos-delay="400">
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
