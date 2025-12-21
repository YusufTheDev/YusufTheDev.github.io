import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import SkillsSection from '../components/SkillsSection';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="home-page"
        >

            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Hi, I'm <span className="highlight">Yusuf Khan</span>
                        </motion.h1>
                        <motion.h3
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Software Engineer
                        </motion.h3>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="hero-bio"
                        >
                            I'm a Computer Science Engineering student at McMaster University. Passionate about software development and problem-solving, I enjoy working on innovative projects and exploring new technologies. Whether it's developing multiplayer games, creating efficient algorithms, or optimizing code, I'm always eager to take on new challenges and grow my skills. Connect with me to discuss ideas, collaborations, or just about anything else!
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <a href="https://github.com/YusufTheDev" target="_blank" rel="noopener noreferrer" className="btn primary">Github</a>
                            <a href="mailto:yusuf.k2606@gmail.com" className="btn secondary">Email Me</a>
                        </motion.div>

                        <motion.div
                            className="social-links"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            <a href="https://www.instagram.com/yusuf_k.20/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/yusuf-k06/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://discordapp.com/users/394880684138823680" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="hero-image-wrapper">
                            <img src="/images/face.png" alt="Yusuf Khan" className="hero-image" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <SkillsSection />
        </motion.div>
    );
};

export default Home;
