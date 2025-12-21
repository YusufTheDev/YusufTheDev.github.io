import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/YusufTheDev" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/yusuf-y-038b0525b/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:yusufyusuf2911@gmail.com" className="footer-icon">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="copyright">© 2025 Yusuf</p>
            </div>
        </footer>
    );
};

export default Footer;
