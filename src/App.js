
import './App.css';
import { useHistory } from "react-router-dom";
// import {useState} from "react";
import { Switch, Route } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const history = useHistory();
  const project_details = [{projectname:"Recipe Blog App",
 details:"here you can explore more recipes and can add recipes if you want to add  and you can delete and edit the recipes",
  frontend:"https://github.com/santhiya-bharathi/blog-app",
   backend:"https://github.com/santhiya-bharathi/blog-node",
    demo:"https://recipe-blog-app.netlify.app/"},
    {projectname:"Recipe Blog App",
    details:"here you can explore more recipes and can add recipes if you want to add  and you can delete and edit the recipes",
     frontend:"https://github.com/santhiya-bharathi/blog-app",
      backend:"https://github.com/santhiya-bharathi/blog-node",
       demo:"https://recipe-blog-app.netlify.app/"},
       {projectname:"Recipe Blog App",
       details:"here you can explore more recipes and can add recipes if you want to add  and you can delete and edit the recipes",
        frontend:"https://github.com/santhiya-bharathi/blog-app",
         backend:"https://github.com/santhiya-bharathi/blog-node",
          demo:"https://recipe-blog-app.netlify.app/"},
          {projectname:"Recipe Blog App",
          details:"here you can explore more recipes and can add recipes if you want to add  and you can delete and edit the recipes",
           frontend:"https://github.com/santhiya-bharathi/blog-app",
            backend:"https://github.com/santhiya-bharathi/blog-node",
             demo:"https://recipe-blog-app.netlify.app/"}]

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
          <Project project_details={project_details}/>
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
  <div className='skills-dev'>
    <h1 className='contact-me'>Resume Link</h1>
    <div className='email-mobile-div'>
    <a className='resume-link' rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1Xma61efahpOY3Na5mozg-4Ol2rDkopDFlRMcEId4HI8/edit'>Resume docs link</a>
    </div>
    <br></br>
    <h1 className='contact-me'>GitHub Link</h1>
    <div className='email-mobile-div'>
    <a className='resume-link' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>GitHub link</a>
    </div>
  </div>
);
}

function Skills(){
  return(
    <div className='skills-dev'>
      <h1 className='contact-me'>Skills</h1>

      <h1 className='contact-me'>GitHub Profile Link</h1>
    <div className='email-mobile-div'>
    <a className='resume-link' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>GitHub Profile link</a>
    </div>
    
      <h1 className='contact-me'>Platforms - <span className='skills-data'>(React-Native)</span></h1>
      <div className='img-div'>
      <img  className='img-size' src='https://reactjs.org/logo-og.png' alt='React-Native'/>
      </div>

      <h1 className='contact-me'>Web Front End - <span className='skills-data'>(HTML, CSS, React)</span></h1>
      <div className='img-div'>
     
      <img  className='img-size' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' alt='HTML'/>
      <img  className='img-size' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' alt='CSS'/>
      <img  className='img-size' src='https://reactjs.org/logo-og.png' alt='React'/>

      </div>

      <h1 className='contact-me'>Web Back End - <span className='skills-data'>(Node.js)</span></h1>
      <div className='img-div'>
      <img  className='img-size' src='https://cdn-icons-png.flaticon.com/512/919/919825.png' alt='Node.js'/>
      </div>

      <h1 className='contact-me'>Databases - <span className='skills-data'>(MongoDB, MySQL)</span></h1>
      <div className='img-div'>
      <img  className='img-size' src='https://digital.ai/sites/default/files/pictures/styles/maxwidth_300/public/pt_logos/mongodb.png?itok=pYTrNt-U' alt='MongoDB'/>
      <img  className='img-size' src='https://e7.pngegg.com/pngimages/700/692/png-clipart-mysql-mysql-thumbnail.png' alt='MySQL'/>
      </div>

      <h1 className='contact-me'>Programming Languages - <span className='skills-data'>(JavaScript)</span></h1>
      <div className='img-div'>
      <img  className='img-size' src='https://ih1.redbubble.net/image.1091999270.7282/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' alt='JavaScript'/>
      </div>

    </div>
  );
}

function Project({project_details}){
  return(
    <div className='skills-dev'>
     <h1 className='contact-me'>Projects</h1>
     <div className='project-grid-margin'>
    {project_details.map(({projectname,details,frontend,backend,demo,id})=>(<ProjectDetails key={id} projectname={projectname} details={details} frontend={frontend} backend={backend} demo={demo}/>))}
     
    </div>
    </div>
  );
}

function ProjectDetails({projectname,details,frontend,backend,demo}){
  return(
   
     <div className='project-grid'>

      <div className='container'>
     <p className='project-name'>{projectname}</p>
     <p className='about-div'>{details}</p>
   
     <p className='project-name'>Front-end & Back-end gitHub and demo Links</p>
    <div className='logo-img-div'>

      <a rel="noreferrer" target="_blank" href={frontend}>
      <img className='logo-link-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFd8OQgaQxY_6_GnWY6sIkyXm-MfDbnZpl0cQ7ijItv6mN3SkDi3vmrmEuO7gywrwalg&usqp=CAU' alt='Frondend'/>
      </a>

      <a rel="noreferrer" target="_blank" href={backend}>
      <img className='logo-link-img' src='https://www.pngfind.com/pngs/m/206-2063047_smart-data-transform-back-end-systems-icon-png.png' alt='Backend'/>
      </a>
      
      <a rel="noreferrer" target="_blank" href={demo}>
      <img className='logo-link-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrs0rMh22IqEyJb35IAKRhum-_eZIlH3IMGXwgjX_DvGUHijc--zqjy42et6hmOeI7bRA&usqp=CAU' alt='Live Demo'/>
      </a>
     
    </div>

     </div>
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
      
     
    <div>
    <h1 className='git-name-color'>GitHub Profile Link</h1>
    <div className='flex-git'>
    <GitHubIcon/>
    <a className='resume-link' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>GitHub Profile link</a>
    </div>
    </div>
      </div>
    </div>
  );
}