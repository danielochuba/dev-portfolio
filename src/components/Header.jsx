import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import menuIcon from '/Images/Union.png'; // Replace with your actual menu icon path
import closeIcon from '/Images/close-btn.png'; // Replace with your actual close icon path
import githubIcon from '/Images/github.png'; // Replace with your actual GitHub icon path
import linkedinIcon from '/Images/linkedin.png'; // Replace with your actual LinkedIn icon path
import twitterIcon from '/Images/twitter.png'; // Replace with your actual Twitter icon path
import mediumIcon from '/Images/medium.png'; // Replace with your actual Medium icon path
import fingersIcon from '/Images/Fingers icon.png'; // Replace with your actual Fingers icon path

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);  

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('none-scroll');
    } else {
      document.body.classList.remove('none-scroll');
    }

    return () => {
      document.body.classList.remove('none-scroll');
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="header bg-white border-b-80">
      <nav>
        <div className='nav-bar'>
          <a href="#" className="logo">
            DANIEL OCHUBA            
          </a>
          <button
            type="button"
            className="hambug-menu "
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <i className='closeIcon text-white material-icons'><img src={closeIcon} alt="Close" className="" /></i>
            ) : (
              <i className='menuIcon material-icons'><img src={menuIcon} alt="Menu" className="" /></i>
            )}
          </button>          
          <div className={`${
              menuOpen ? 'showMenu' : ''
            } mobile-menu md:hidden mt-4`}>
              
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="menuItem block py-2 text-white hover:text-blue-500 cursor-pointer"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="menuItem block py-2 text-white hover:text-blue-500 cursor-pointer"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="menuItem block py-2 text-white hover:text-blue-500 cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>          
          
          <ul className="nav-links hidden md:flex space-x-4">
          <li className="links"><Link to="work" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 cursor-pointer">Portfolio</Link></li>
          <li className="links"><Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 cursor-pointer">About</Link></li>
          <li className="links"><Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 cursor-pointer">Contact</Link></li>
          </ul>
        
        </div>
        
      </nav>
      
      <section className="head-section appear-from-bottom">
        <h1 className="header-title">
          Hey There, <br className='desk-break'/> I'm Daniel
        </h1>
        <p className="header-text">
          <span className="role-text typing-effect">I'm a software developer!</span>{' '}<br className='desk-break'/>
          <span className='md:block'>
            As a Full Stack Engineer driven by a passion for development of innovative tech solutions, I am currently open to new job opportunities and dive into projects that demand fresh thinking and foster continuous learning.
          </span>
        </p>
        <p className="connect">Let's connect</p>
        <div className="social-icon">
          <ul>
          <li>
            <a href="https://github.com/danielochuba" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniel-ochuba-ugochukwu" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ochuba_daniel" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@danielochuba" target="_blank" rel="noopener noreferrer">
              <img src={mediumIcon} alt="Medium" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://wellfound.com/u/daniel-ugochukwu-ochuba" target="_blank" rel="noopener noreferrer">
              <img src={fingersIcon} alt="Wellfound" className="h-6 w-6" />
            </a>
          </li>
          </ul>          
          </div>        
        {/* <div className="flex justify-center md:justify-start mt-4 space-x-4">          

          <a href="https://www.linkedin.com/in/daniel-ochuba-ugochukwu" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/ochuba_daniel" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://medium.com/@danielochuba" target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="h-6 w-6" />
          </a>
          <a href="https://wellfound.com/u/daniel-ugochukwu-ochuba" target="_blank" rel="noopener noreferrer">
            <img src={fingersIcon} alt="Wellfound" className="h-6 w-6" />
          </a>
        </div>         */}
        </section>
    </header>    
  );
};

export default Header;