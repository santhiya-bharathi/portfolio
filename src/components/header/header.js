import React from 'react';
import { Link } from 'react-scroll';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

const Header = () => {

    const [show,setShow] = useState(false);

    return(
        <div className='header'>
          <div className='header__left'>
            <h1>
                Portfolio
            </h1>
          </div>
          <div className='menu-icon' onClick={()=>setShow(!show)}><MenuIcon /></div>
          {show?
          <div className='letter-div'>
          <Link to="home" smooth={true} duration={500}>
                  <h4 className='letter'>
                      Home
                  </h4>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                  <h4 className='letter'>
                      About
                  </h4>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                  <h4 className='letter'>
                      Projects
                  </h4>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                  <h4 className='letter'>
                      Contact
                  </h4>
              </Link>
              {/* <h4 className='header__rightButton'>Join with me</h4> */}
          </div>:""
      }
      <div className='letter-div-det'>
          <Link to="home" smooth={true} duration={500}>
                  <h4 className='letter'>
                      Home
                  </h4>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                  <h4 className='letter'>
                      About
                  </h4>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                  <h4 className='letter'>
                      Projects
                  </h4>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                  <h4 className='letter'>
                      Contact
                  </h4>
              </Link>
              {/* <h4 className='header__rightButton'>Join with me</h4> */}
          </div>
        </div>
    );
}


export default Header;