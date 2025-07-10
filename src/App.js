import React, { useState, useEffect } from 'react';
import './App.css';

// Import your page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage'; // New import for AboutPage

// Import the logo image
import IngweplexLogo from './assets/IBBC FULL.LOGO.png';

// Import the ScrollToTopButton component
import ScrollToTopButton from './components/ScrollToTopButton';

// Import the MobileNav component
import MobileNav from './components/MobileNav';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setCurrentPage(hash || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about': // New case for About page
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <img src={IngweplexLogo} alt="Ingweplex Group Logo" className="app-logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home" className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>Home</a>
          <a href="#about" className={currentPage === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>About Us</a> {/* New navigation link */}
          <a href="#services" className={currentPage === 'services' ? 'active' : ''} onClick={() => handleNavLinkClick('services')}>Services</a>
          <a href="#portfolio" className={currentPage === 'portfolio' ? 'active' : ''} onClick={() => handleNavLinkClick('portfolio')}>Portfolio</a>
          <a href="#contact" className={currentPage === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>Contact</a>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav currentPage={currentPage} onNavLinkClick={handleNavLinkClick} />
      </header>

      <main className="app-main">
        {renderPage()}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Ingweplex Group. All rights reserved.</p>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
