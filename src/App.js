import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Main from './components/Main';
import Experience from './components/Experience';
import Skills from './components/Skills';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer'; 
import './cursor.js';
import './App.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This function will handle the click event for menu items
  const handleMenuItemClick = (anchor) => {
    setIsOpen(false);
    // Smooth scroll to the anchor section
    document.querySelector(anchor).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {!isOpen && (
        <button className="menu-button" onClick={() => setIsOpen(true)}>☰</button>
      )}
      {isOpen && (
        <div className="side-menu">
          <button className="close-menu" onClick={() => setIsOpen(false)}>x</button>
          <div style={{ height: '40px' }}></div>
          <a href="#home" onClick={() => handleMenuItemClick('#home')}>Home</a>
          <a href="#main" onClick={() => handleMenuItemClick('#main')}>Projects</a>
          <a href="#experience" onClick={() => handleMenuItemClick('#experience')}>Experience</a>
          <a href="#skills" onClick={() => handleMenuItemClick('#skills')}>Skills</a>
          <a href="mailto:o.golovatskaia@gmail.com">Contact</a>
        </div>
      )}
    </>
  );
};

function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <SideMenu />
          <section id="home"><HomePage /></section>
          <section id="main"><Main /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;