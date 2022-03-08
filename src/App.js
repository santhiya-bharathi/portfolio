
import './App.css';
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';



function App() {
  const history = useHistory();
  const project_details = [{projectname:"Book keeping app",
 details:"A Book keeping application with some features such as posting books, explore books.",
  frontend:"https://github.com/santhiya-bharathi/book-app",
   backend:"https://github.com/santhiya-bharathi/book-node",
   image:"https://uusaratoga.org/wp-content/uploads/2020/05/Books.jpg",
   tech:"React, node.js, mongoDB, Material UI",
    demo:"https://bookkeeping-app.netlify.app"},  
    {projectname:"Job Portal App",
 details:"A Job Portal application Where a user can apply for a job and can search and find the dream job.",
  frontend:"https://github.com/santhiya-bharathi/job-app",
   backend:"https://github.com/santhiya-bharathi/job-node",
   image:"https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
   tech:"React, node.js, Express.js, mongoDB, Material UI",
    demo:"https://jobportalapp.netlify.app"},
    {projectname:"Movies Blog App",
 details:"Blog Application where the user can post, edit or delete blogs and you can explore the movies",
  frontend:"https://github.com/santhiya-bharathi/movie-app",
   backend:"https://github.com/santhiya-bharathi/movie-node",
   image:"https://gooyaabitemplates.com/download/Movies-On-Blogger-Template.jpg",
   tech:"React, node.js, mongoDB, JavaScript, Material UI",
    demo:"https://movies-app-blog.netlify.app"},
    {projectname:"Recipes Blog App",
 details:"Blog Application can explore the recipes and can post the new recipe blogs",
  frontend:"https://github.com/santhiya-bharathi/blog-app",
   backend:"https://github.com/santhiya-bharathi/blog-recipe-node-app",
   image:"https://studybreaks.com/wp-content/uploads/2018/02/Food-Blog.jpg",
   tech:"React, node.js, mongoDB, Material UI",
    demo:"https://recipe-blog-app.netlify.app"}
   ]



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

<div className='home-flex'>

<div className='home-details'>
    <p className='hello-home'>Hello!</p>
    <h1 className='name-home'>I'm Santhiya Bharathi</h1>
     <div className='wrapper'>
     <ul className='dynamic-txts'>
     <li><span>Full Stack Developer</span></li>
     <li><span>MERN Stack Developer</span></li>
     </ul>
     </div>
    
    <div className='pro-con-button'>
    <p className='button' onClick={()=>history.push("/project")}>Explore My Project</p>
    <p className='button' onClick={()=>history.push("/contact")}>Connect with Me</p>
    </div>
    </div>

      <div className='home-img-div'>
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
     <p className='about-details'>I like to read books and I enjoy creating applications, I will update myself by learning new technologies</p>
     <p className='about-details'>I am looking for a respectable and responsible work, that can build my personal and professional growth</p>
     <p className='about-details'>and helps me to contribute effectively to the company growth.</p>
     <div className='pro-con-button'>
     <div>
    <a className='button' rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/12h_35J1UFtPpZBB-vg4NVX2YeUBVLBrm/view?usp=sharing'>Get Resume</a>
    </div>
    </div>
     </div>
     </div>
    </div>
  );
}



function Skills(){
  return(
    <div className='skills-dev'>
   
  <Box height={60} width={400}>
    <div className='div-per'>
      <p className='skill-text'>HTML</p><p className='skill-text-per'>90%</p></div>
      <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>
  
  <Box height={60} width={400}>
  <div className='div-per'>
      <p className='skill-text'>CSS</p><p className='skill-text-per'>90%</p></div>
      <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>
    
  <Box height={60} width={400}>
  <div className='div-per'>
      <p className='skill-text'>JavaScript</p><p className='skill-text-per'>90%</p></div>
      <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>
    
  <Box height={60} width={400}>
  <div className='div-per'>
      <p className='skill-text'>React</p><p className='skill-text-per'>85%</p></div>
      <Slider defaultValue={90} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>
 
  <Box height={60} width={400}>
  <div className='div-per'>
      <p className='skill-text'>Node.js</p><p className='skill-text-per'>85%</p></div>
      <Slider defaultValue={75} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>
   
  <Box height={60} width={400}>
  <div className='div-per'>
      <p className='skill-text'>MongoDB</p><p className='skill-text-per'>85%</p></div>
      <Slider defaultValue={75} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>

    <Box height={60} width={400}>
    <div className='div-per'>
      <p className='skill-text'>MySQL</p><p className='skill-text-per'>80%</p></div>
      <Slider defaultValue={75} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>

    <Box height={60} width={400}>
    <div className='div-per'>
      <p className='skill-text'>Bootstrap</p><p className='skill-text-per'>80%</p></div>
      <Slider defaultValue={75} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>

    <Box height={60} width={400}>
    <div className='div-per'>
      <p className='skill-text'>Material UI</p><p className='skill-text-per'>80%</p></div>
      <Slider defaultValue={80} aria-label="Default" valueLabelDisplay="auto" disabled/>
    </Box>
  
    </div>
  );
}



function Project({project_details}){
  return(
    <div className='project-div'>
    <div className='div-flex'>
   
    {project_details.map(({projectname,details,frontend,backend,demo,image,tech,id})=>(<ProjectDetails key={id} 
    projectname={projectname}
     details={details}
      frontend={frontend}
       backend={backend}
       image={image}
       tech={tech}
        demo={demo}/>))}
     
    </div>
    </div>
  );
}

function ProjectDetails({projectname,details,frontend,backend,demo,tech,image}){


  return(
    
<div className='container'>
<h2 className='project-name'>{projectname}</h2>
<br />
  <div className="full-det">

   <img className="user-pic" src={image} alt='website'/>
  

 <div className='details details--blur'>
     
  <p className='details-text'>{details}</p>

  <p className='details-text'>Technologies Used: {tech}</p>
  <div className='div-button'>

  <a className='frontend-link' target="_blank" rel="noreferrer" href={frontend}>
    <div className='button-link'>
      <GitHubIcon />
     <a className='frontend-link' target="_blank" rel="noreferrer" href={frontend}>Frontend</a>
    </div>
    </a>

    <a className='frontend-link' target="_blank" rel="noreferrer" href={backend}>
    <div className='button-link'>
    <GitHubIcon />
    <a className='frontend-link' target="_blank" rel="noreferrer" href={backend}>Backend</a>
    </div>
    </a>

    <a className='frontend-link' target="_blank" rel="noreferrer" href={demo}>
    <div className='button-link'>
      <LinkIcon />
    <a className='frontend-link' target="_blank" rel="noreferrer" href={demo}>Demolink</a>
    </div>
    </a>

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
    
    <a className='contact-name github-link' rel="noreferrer" target="_blank" href='https://mail.google.com'>
<div className='contact-div'>
<div >
<img className='gmail-img' src='https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png'  alt='gmail' />
</div>
<div>
<p className='contact-name'>Email</p>
<a className='contact-name github-link' rel="noreferrer" target="_blank" href='mailto:santhiyabharathi1999@gmail.com'>santhiyabharathi1999@gmail.com</a>
</div>
</div>
</a>

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

<a className='contact-name github-link' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>
<div className='contact-div'>
<div >
<img className='contact-img' src='https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png'  alt='github' />
</div>
<div>
<p className='contact-name'>GitHub</p>
<div>
<a className='github-link' rel="noreferrer" target="_blank" href='https://github.com/santhiya-bharathi'>https://github.com/santhiya-bharathi</a>
</div>
</div>
</div>
</a>

      </div>
    </div>
  
  );
}

