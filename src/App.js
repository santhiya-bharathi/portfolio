
import './App.css';
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";


function App() {
  const history = useHistory();
  const project_details = [{projectname:"Recipe Blog App",
 details:"here you can explore more recipes and can add recipes if you want to add  and you can delete and edit the recipes",
  frontend:"https://github.com/santhiya-bharathi/book-app",
   backend:"https://github.com/santhiya-bharathi/book-node",
   image:"https://i.pinimg.com/550x/4b/39/36/4b3936f9b378c7c59a58f9b4dbeb932a.jpg",
    demo:"https://bookkeeping-app.netlify.app"},
    {projectname:"Recipe Blog App",
 details:"here you can explore more recipes and can add recipes if you want to add  and you can delete and edit the recipes",
  frontend:"https://github.com/santhiya-bharathi/job-app",
   backend:"https://github.com/santhiya-bharathi/job-node",
   image:"https://i.pinimg.com/550x/4b/39/36/4b3936f9b378c7c59a58f9b4dbeb932a.jpg",
    demo:"https://jobportalapp.netlify.app"},
    {projectname:"Movies Blog App",
 details:"you can explore the movies, Blog Application where the user can read, post, edit or delete blogs.",
  frontend:"https://github.com/santhiya-bharathi/movie-app",
   backend:"https://github.com/santhiya-bharathi/movie-node",
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCpJMoaQKp3H_ZW-Ij585ODwDfTldTHWXxo_E31_70oJcB8qIjUewEc2jbZTGVDx9sKY&usqp=CAU",
    demo:"https://movies-app-blog.netlify.app"}
   ]

             const skills_icon = [
              {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzP12pZI4QhCB39yh-xQxZ8HLCispTv-kWQZOGGNaWe5bZIlWVjkbjmKRDAzFKbSTLMw&usqp=CAU", tag:"HTML"},
            {image:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0", tag:"CSS"},
            {image:"https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png", tag:"React"},
            {image:"https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg", tag:"Node.js"},
            {image:"https://digital.ai/sites/default/files/pictures/styles/maxwidth_300/public/pt_logos/mongodb.png?itok=pYTrNt-U", tag:"MongoDB"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeY7qx5ZMl-NTPlKljuvJ2u-8YUmXkow5LX_Yl-kB6LVZZQnRKom_oMjCgesca2C5ye0&usqp=CAU", tag:"MySQL"},
            {image:"https://ih1.redbubble.net/image.1091999270.7282/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", tag:"JavaScript"},
            {image:"https://pgjones.dev/tozo/frontend/img/material-ui.png", tag:"Material ui"},
            {image:"https://avatars.githubusercontent.com/u/2918581?s=280&v=4", tag:"Bootstrap"}]

            const [show,setShow] = useState(false);
            
  return (
    
      <div className="App">
       
     <div className='app-bar-portfolio'>
      <div className='port-div'>
      <h1 className='portfolio'>Portfolio</h1>
      </div>
      <div className='menu-icon' onClick={()=>setShow(!show)}><MenuIcon /></div>
      {show?
      <div className='letter-div'>
      <h3 className='letter' onClick={()=>history.push("/")}>Home</h3>
      <h3 className='letter' onClick={()=>history.push("/about")}>About</h3>
      <h3 className='letter' onClick={()=>history.push("/skills")}>Skills</h3>
      <h3 className='letter' onClick={()=>history.push("/project")}>Project</h3>  
      <h3 className='letter' onClick={()=>history.push("/contact")}>Contact</h3>
      </div>:""
      }
      <div className='letter-div-det'>
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
        
        <Route path="/skills">
          <Skills skills_icon={skills_icon}/>
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

<div className='home-flex'>

<div className='home-details'>
    <p className='hello-home'>Hello!</p>
    <h1 className='name-home'>I'm Santhiya Bharathi</h1>
    <p className='dev'>Full Stack Developer</p>
    <div className='pro-con-button'>
    <p className='button' onClick={()=>history.push("/project")}>Explore My Project</p>
    <p className='button' onClick={()=>history.push("/contact")}>Connect with Me</p>
    </div>
    </div>

      <div>
    <img className='home-img' src='https://static.vecteezy.com/system/resources/previews/002/127/337/original/isometric-laptop-analysis-information-futuristic-concept-vector.jpg'  alt='img'/>
  </div>
  
    </div>
    </div>
  );
}


function About(){
  
  return(
    <div className='about-div'>
    <div className='about-flex'>
     <h1 className='contact-me'>About Me</h1>
     <div>
     <p className='about-name'>Hello, I'M Santhiya Bharathi</p>
     <p className='about-details'>Full Stack Web and mobile Developer with background knowledge of MERN stacks and</p>
     <p className='about-details'>developed Full-Stack based web application using React Framework, Node.js, MongoDB</p>
     <p className='about-details'>Knowledge of Websites HTML, CSS, JavaScript</p>
     <div className='pro-con-button'>
     <div>
    <a className='button' rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1fHZDtpkL13S1Qmi0SU3UJuEqlnzslBRS/view?usp=sharing'>Get Resume</a>
    </div>
    </div>
     </div>
     </div>
    </div>
  );
}



function Skills({skills_icon}){
  return(
    <div className='skills-dev'>
       <div className='img-div'>
  <div className='img-div-flex'>
     {skills_icon.map(({image, tag, id})=>(<Skillsimg key={id} image={image} tag={tag}/>))}
     </div>
   </div>
    </div>
  );
}

function Skillsimg({image, tag}){
return(
 
    <div>
   <img  className='img-size' src={image} alt={tag} />
   </div>
);

}

function Project({project_details}){
  return(
    <div className='project-div'>
    <div className='div-flex'>
   
    {project_details.map(({projectname,details,frontend,backend,demo,image,id})=>(<ProjectDetails key={id} 
    projectname={projectname}
     details={details}
      frontend={frontend}
       backend={backend}
       image={image}
        demo={demo}/>))}
     
    </div>
    </div>
  );
}

function ProjectDetails({projectname,details,frontend,backend,demo,image}){

  return(
    
<div className='container'>
  <div className="full-det">
 
   <img className="user-pic" src={image} alt='website'/>
 <div className='details'>
  <h2 className='project-name'>{projectname}</h2>
  <p className='details-text'>{details}</p>

  <div className='div-button'>
    <div className='button-link'>
      <GitHubIcon />
     <a className='frontend-link' target="_blank" rel="noreferrer" href={frontend}>Frontend</a>
    </div>
    <div className='button-link'>
    <GitHubIcon />
    <a className='frontend-link' target="_blank" rel="noreferrer" href={backend}>Backend</a>
    </div>
    <div className='button-link'>
      <LinkIcon />
    <a className='frontend-link' target="_blank" rel="noreferrer" href={demo}>Demolink</a>
    </div>
    </div>
  </div>
  </div>
</div>
   
  );
}



function Contact(){
  return(
    <div className='contact'>
      <div className='contact-flex'>
    <h2>Mail me for any other Further queries</h2>
<div className='contact-div'>
<div >
<img className='gmail-img' src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png'  alt='gmail' />
</div>
<div>
<p className='contact-name'>Email</p>
<p className='contact-name'>santhiyabharathi1999@gmail.com</p>
</div>
</div>

<div className='contact-div'>
<div >
<img className='contact-img' src='https://w7.pngwing.com/pngs/314/17/png-transparent-truecaller-android-telephone-phone-blue-telephone-call-mobile-phones.png'  alt='mobile' />
</div>
<div>
<p className='contact-name'>Mobile.No</p>
<p className='contact-name'>9362633683</p>
</div>
</div>

<h2>see all other my works on GitHub</h2>
<div className='contact-div'>
<div >
<img className='contact-img' src='https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png'  alt='github' />
</div>
<div>
<p className='contact-name'>GitHub</p>
<div>
<a className='contact-name github-link' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>https://github.com/santhiya-bharathi</a>
</div>
</div>
</div>
      

      </div>
    </div>
  
  );
}