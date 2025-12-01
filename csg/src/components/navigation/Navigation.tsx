import { useState } from 'react';
import './navigation.css';
import Button from '../button/Button';
import { navigationConfig } from '../../config/navigationConfig';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navigation-container'>
      <div className='navigation-layout'>
        <div className='nav-logo-section'>
          <p>Logo</p>
        </div>

        {/* Desktop Navigation */}
        <div className='nav-links-desktop'>
          {navigationConfig.map((button) => (
            <Button variant={button.variant} id={button.id} key={button.id}>
              {button.label}
            </Button>
          ))}
        </div>

        {/* Desktop Feedback Button */}
        <div className='nav-feedback-desktop'>
          <Button
            variant='primary'
            id='feedback'
            style={{ padding: '.75rem', borderRadius: '2rem' }}
          >
            Feedback
          </Button>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-content'>
          {navigationConfig.map((button) => (
            <Button 
              variant={button.variant} 
              id={button.id} 
              key={button.id}
              onClick={() => setIsMenuOpen(false)}
            >
              {button.label}
            </Button>
          ))}
          <Button
            variant='primary'
            id='feedback-mobile'
            style={{ padding: '.75rem', borderRadius: '2rem', width: '100%' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}