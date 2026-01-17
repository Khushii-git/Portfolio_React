import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';
import './Navbar.css';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    // Scroll to section after navigation
    setTimeout(() => {
      const section = path === '/' || path === '/home' ? 'home' : path.substring(1);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="n-wrapper">
        <div className="n-left">
            <Link to="/" className="n-name">Khushi</Link>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <span className="theme-icon">☀️</span>
              ) : (
                <span className="theme-icon">🌙</span>
              )}
            </button>
        </div>
    
        <div className="n-right">
            <div className={`n-list ${isMenuOpen ? 'active' : ''}`}>
                <ul style={{listStyleType:'none'}}>
                    <li onClick={() => handleNavClick('/home')}>Home</li>
                    <li onClick={() => handleNavClick('/skillset')}>Skillset</li>
                    <li onClick={() => handleNavClick('/projects')}>Projects</li>
                    <li onClick={() => handleNavClick('/contact')}>Contact</li>
                </ul>
            </div> 
            <button 
              className="button n-button"
              onClick={() => handleNavClick('/contact')}
            >
                Contact 
            </button>
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
        </div>
    </div>
  );
}

export default Navbar;