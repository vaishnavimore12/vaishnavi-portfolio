
import "./Contact.css";
import gmail from "../images/mail.png";
import linkedin from "../images/Vector.png";
import Swal from 'sweetalert2';
import { useState } from "react";

function Contact(){
const [result] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dc227e3b-f1cc-4a93-a73b-1130352c5271");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    // setResult(data.success ? "Success!" : "Error");

    if(data.success){
      Swal.fire({
        title:"Message sent successfully!",
        icon: "success",
      })
    }
     else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error"
      });
    }
  };




    return(<div className="sect" id="contact">
        <div className="row3">
          <label className="heading" data-aos="fade-down">Always ready for new opportunity &#128522;</label>
            <div className="col3" data-aos="fade-up">
                 <form onSubmit={onSubmit} >
                    <label className="contact">Contact Me</label>
   <div class="mb-3 mt-3">
    <label for="name" class="form-label">Your Name:</label>
    <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required></input>
  </div>   
   <div class="mb-3 mt-3">
    <label for="email" class="form-label">Your Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
  </div>   
   <div class="mb-3 mt-3">
    <label for="msg" class="form-label">Your Message:</label>
    <textarea class="form-control" rows="5" id="msg" name="message"></textarea>
  </div>   
  <button type="submit" class="btn ">Submit</button>
  <p>{result}</p>
  </form>
</div>
       <div className="icon">
       
        
       <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=morevaishnavi011@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img className="mail" src={gmail} alt="Gmail" />
</a>

       <a 
  href="https://www.linkedin.com/in/vaishnavi-more-199a6b230/" 
  target="_blank" 
  rel="noopener noreferrer"
>
    <img className="lnk" src={linkedin} alt="Linkedin" />
</a>
  
       </div>
        </div>
       </div>)
    
}

export default Contact;