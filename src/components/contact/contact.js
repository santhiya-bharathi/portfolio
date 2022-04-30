import React from 'react';
import { Element } from 'react-scroll';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './contact.css';
import emailjs from "emailjs-com";


const ContactContainer = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
            "service_6wmaihj",
            "template_gh21v09",
            e.target,
            "Egd9kUxOGHG3Hwugr"
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
}

    return(
   <Element className='contactcontainer' id='contact'>
      <h2 className='reach'>REACH OUT TO ME</h2>
     <div className='contact'>
    
      <div className='contact-flex'>
      
   
   <div>
    <a className='contact-name github-link' rel="noreferrer" target="_blank" href='https://mail.google.com'>    
<div className='contact-div'>
<div>
<p className='contact-name icon'><MailIcon fontSize='large'/>Email Me</p>
<a className='contact-name github-link gap-name' rel="noreferrer" target="_blank" href='mailto:santhiyabharathi1999@gmail.com'>santhiyabharathi1999@gmail.com</a>
</div>
</div>
</a>
</div>

<div>
<a className='contact-name github-link ' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>
<div className='contact-div'>
<div>
<p className='contact-name icon'><GitHubIcon fontSize='large'/>GitHub</p>
<div>
<a className='contact-name github-link gap-name' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>https://github.com/santhiya-bharathi</a>
</div>
</div>
</div>
</a>
</div>




<div className='contact-div'>
<div>
<p className='contact-name icon'><CallIcon fontSize='large'/>Call Me</p>
<p className='contact-name gap-name'>9362633683</p>
</div>
</div>

<div className='contact-div'>
<div>
<p className='contact-name icon'><LocationOnIcon fontSize='large'/>Location</p>
<p className='contact-name gap-name'>TamilNadu, India</p>
</div>
</div>

</div>

      <div className='form-div'>
  {/* <h1 className='reach'>CONTACT ME</h1> */}
  <div >
  <form className='flex-contact' onSubmit={sendEmail}>
    {/* <div className='flex-input'> */}
    <label>Name</label>
    <input className='input-field' type='text' name='name'  placeholder="Your Name" required/>

    <label>Email</label>
    <input className='input-field' type='email' name='user_email' placeholder="email" required/>
    {/* </div> */}

    <label>Message</label>
    <textarea className='input-field-area' name='message' rows='5' placeholder="message" required/>

    <button className='topcontent__downloadButton'>send</button>
  </form>
</div>
    </div>
    
    </div>
   </Element>
       );
    }
    
    export default ContactContainer;