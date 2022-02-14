
import './App.css';
import { useHistory } from "react-router-dom";
// import {useState} from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    
      <div className="App">
       
     <div className='app-bar-portfolio'>
      <div className='port-div'>
      <h1 className='portfolio'>Portfolio</h1>
      </div>
      <div className='letter-div'>
      <h3 className='letter' onClick={()=>history.push("/")}>Home</h3>
      <h3 className='letter' onClick={()=>history.push("/about")}>About</h3>
      <h3 className='letter' onClick={()=>history.push("/skills")}>Skills</h3>
      <h3 className='letter' onClick={()=>history.push("/project")}>Project</h3>
      <h3 className='letter' onClick={()=>history.push("/contact")}>Contact</h3>
      </div>
      </div>


       <Switch>
      
      <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/project">
          <Project />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        </Switch>
    </div>
  
  );
}

export default App;


function Home(){
  const history = useHistory();
  return(
    <div className='home'>
    <p className='hello-home'>Hello</p>
    <h1 className='name-home'>I'M SANTHIYA BHARATHI</h1>
    <p className='dev'>Full Stack Developer</p>
    <div className='pro-con-button'>
    <p className='button' onClick={()=>history.push("/project")}>Explore My Project</p>
    <p className='button' onClick={()=>history.push("/contact")}>Connect with Me</p>
    </div>
    
    </div>
  );
}


function About(){
  const history = useHistory();
  return(
    <div className='about-div'>
     <h1 className='contact-me'>About Me</h1>
     <div className='email-mobile-div'>
     <p className='about-name'>Hello, I'M Santhiya Bharathi</p>
     <p className='about-details'>Full Stack Web and mobile Developer with background knowledge of MERN stacks and</p>
     <p className='about-details'>developed Full-Stack based web application using React Framework, Node.js, MongoDB</p>
     <p className='about-details'>Knowledge of Websites HTML, CSS, JavaScript</p>
     <div className='pro-con-button'>
    <p className='button'>Hire Me</p>
    <p className='button' onClick={()=>history.push("/resume")}>Get Resume</p>
    </div>
     </div>
     
    </div>
  );
}

function Resume(){
return(
  <div>
    <h1 className='contact-me'>Resume Link</h1>
    <div className='email-mobile-div'>
    <a className='resume-link' target="_blank" href='https://docs.google.com/document/d/1Xma61efahpOY3Na5mozg-4Ol2rDkopDFlRMcEId4HI8/edit'>Resume docs link</a>
    </div>
  </div>
);
}

function Skills(){
  return(
    <div className='hello-home'>
      skills
    </div>
  );
}


function Project(){
  return(
    <div className='hello-home'>
      project
    </div>
  );
}

function Contact(){
  return(
    <div className='contact'>
      <h1 className='contact-me'>Contact Me</h1>

      <div className='email-mobile-div'>
      <div>
      <h2 className='contact-me-heading'>Email</h2>
      <p className='contact-me-heading-det'>santhiyabharathi1999@gmail.com</p>
      </div>
    
      <div>
      <h2 className='contact-me-heading'>Mobile.No</h2>
      <p className='contact-me-heading-det'>9362633683</p>
      </div>
      </div>
    </div>
  );
}