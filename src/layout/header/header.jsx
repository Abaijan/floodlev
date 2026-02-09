import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()
  const isHome = location.pathname === '/monitoring' 
  const isAbout = location.pathname === '/about'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!isHome) {
      setScrolled(false)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])


  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${scrolled || isAbout || isHome ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to='/' className="logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt='logo' />
          </Link>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <Link to='/' onClick={() => setMenuOpen(false)}><li>Главная</li></Link>
              <Link to='/about' onClick={() => setMenuOpen(false)}><li>О проекте</li></Link>
              <Link to='/contacts' onClick={() => setMenuOpen(false)}><li>Контакты</li></Link>
              <Link to='/monitoring' onClick={() => setMenuOpen(false)}><li>Мониторинг</li></Link>
            </ul>
          </nav>

          <div className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
    </header>
  );
};

export default Header;
