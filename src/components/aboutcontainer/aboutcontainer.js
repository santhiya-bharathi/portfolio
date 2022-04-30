import React from 'react';
import { Element } from 'react-scroll';
import './aboutcontainer.css';
import LinearProgress from '@mui/material/LinearProgress';
const AboutContainer = () => {
 
    return(
   <Element className='aboutcontainer' id='about'>
       <div className='about-skills-flex'>
   <div className='about-div'>
    <div className='about-flex'>
     <h1 className='contact-me'>About Me</h1>
     <div>
     <p className='about-name'>Hello, I'M Santhiya Bharathi</p>
     <p className='about-details'>Full Stack Web and mobile Developer with background knowledge of MERN stacks and</p>
     <br/>
     <p className='about-details'>I like to draw and paintings and As a full stack developer,</p>
     <br/>
     <p className='about-details'>I am eager to be challenged in order to grow and further improve my Technical skills.</p>
     <br/>
     <p className='about-details'>I am looking for a respectable and responsible work, that can build my personal and professional growth</p>
     <br/>
     <p className='about-details'>and helps me to contribute effectively to the company growth.</p>
     <div className='pro-con-button'>
    </div>
     </div>
     </div>
    </div>

    <div className='skillcontainer__text'>
     <h2>SKILLSET</h2>
    
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>HTML</p><p className='skill-text-per'>93%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider1'>
       <LinearProgress variant="determinate" value={93} />
       </div>
     </div>
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>CSS</p><p className='skill-text-per'>85%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider2'>
       <LinearProgress variant="determinate" value={85} />
       </div>
     </div>
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>React</p><p className='skill-text-per'>86%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider3'>
       <LinearProgress variant="determinate" value={86} />
       </div>
     </div>
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>Node.js</p><p className='skill-text-per'>83%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider4'>
       <LinearProgress variant="determinate" value={83} />
       </div>
     </div>
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>MongoDB</p><p className='skill-text-per'>88%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider5'>
       <LinearProgress variant="determinate" value={88} />
       </div>
     </div>
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>Express.js</p><p className='skill-text-per'>82%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider6'>
       <LinearProgress variant="determinate" value={82} />
       </div>
     </div>
     <div className='skillcontainer__skillset'>
     <div className='div-per'>
      <p className='skill-text'>JavaScript</p><p className='skill-text-per'>83%</p></div>
       <div className='skillcontainer__slider skillcontainer__slider7'>
       <LinearProgress variant="determinate" value={83} />
       </div>
     </div>
     </div>
     </div>
   </Element>
   );
}

export default AboutContainer;