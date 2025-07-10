import React, { useState } from 'react';
import './MobileNav.css';

function MobileNav({ currentPage, onNavLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (page) => {
    onNavLinkClick(page);
    setIsOpen(false);
  };

  return (
    <div className="mobile-nav">
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </button>

      <nav className={`mobile-nav-links ${isOpen ? 'open' : ''}`}>
        <a
          href="#home"
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>
        <a // New link for About Us
          href="#about"
          className={currentPage === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          About Us
        </a>
        <a
          href="#services"
          className={currentPage === 'services' ? 'active' : ''}
          onClick={() => handleLinkClick('services')}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={currentPage === 'portfolio' ? 'active' : ''}
          onClick={() => handleLinkClick('portfolio')}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={currentPage === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default MobileNav;
