import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';
import Typewriter from 'typewriter-effect';

const TopContent = () => {
    return(
        <div className='home'>

        <div className='home-flex'>
        
        <div className='home-details'>
            <p className='hello-home'>Hello!</p>
            <h1 className='name-home'>I'm Santhiya Bharathi</h1>
            <div className='type'>
            <h1 >
                        {
                            <Typewriter

                                options={{
                                    strings: [`A Full Stack Developer `,`MERN Stack Developer`,`A Passionate Programmer `],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor',
                                    cursor: ''
                                }}
                
                            />
                        }
                        </h1>
                        </div>
            
            <div className='pro-con-button'>
            <a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1BDBuz1ng8XvMq3U-VrCA3mam0aOhQZgI/view'>
                <button className='topcontent__downloadButton'>Resume</button>
                </a>
            <Link to='projects' smooth={true} duration={500}>
         <button className='topcontent__workButton'>My Work</button>
         </Link>
           
            
            </div>
            </div>
        
          
            </div>
                 {/* <div className='topcontent'>
         <div className='topcontent__container'>
          <h1>Santhiya Bharathi</h1>
          <p>Full Stack Developer</p>
          <a href='www.google.com'>
             <button className='topcontent__downloadButton'>Download CV</button>
         </a>
         <Link to='projects' smooth={true} duration={500}>
         <button className='topcontent__workButton'>My Work</button>
         </Link>
         </div>
     </div> */}
            </div>
       
    );
}

export default TopContent;