import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="logo">
                    Yusuf.
                </NavLink>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={toggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={toggleMenu}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/experience" className={({ isActive }) => "nav-links" + (isActive ? " active" : "")} onClick={toggleMenu}>
                            Experience
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
