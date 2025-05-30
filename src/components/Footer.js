import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-contact footer-email">
                    <a href="mailto:o.golovatskaia@gmail.com">o.golovatskaia@gmail.com</a>
                </div>

                <div className="footer-name">Olga Golovatskaia</div>

                <div className="footer-links">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#main" className="footer-link">Projects</a>
                    <a href="#experience" className="footer-link">Experience</a>
                    <a href="#skills" className="footer-link">Skills</a>
                </div>

                <div className="social-links">
                    <a href="/papers/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="/images/CVicon.png" alt="CV" />
                    </a>
                    <a href="https://github.com/Olga-Gol" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/olga-golovatskaia-a4a874232" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="mailto:o.golovatskaia@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/gmail.png" alt="Gmail" />
                    </a>
                </div>

                <div className="footer-copyright">
                    © {new Date().getFullYear()} All rights reserved
                </div>

                <div className="footer-contact footer-phone">
                    <a href="tel:+16464206154">+1 (646) 420-61-64</a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;