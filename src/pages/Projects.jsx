import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
    {
        title: "Automated Crypto Trading Bot",
        description: "A 24/7 automated cryptocurrency trading bot executing trades based on Bollinger Bands and RSI indicators. Integrated position sizing and risk management strategies.",
        image: "/images/cryptobot.png",
        tech: ["Python", "AWS", "CCXT", "API"],
        links: {
            // No link provided in original html for this one, leaving empty or generic
        }
    },
    {
        title: "Ascend Limits Music Bot",
        description: "Next-generation Discord music bot delivering high-fidelity audio. Features real-time filters, loop modes, and dynamic queue control.",
        image: "/images/nolimits.png",
        tech: ["Python", "discord.py", "FFmpeg", "Lavalink"],
        links: {
            github: "https://github.com/YusufTheDev/Ascend-Limits-Music-Bot"
        }
    },
    {
        title: "Web Pong",
        description: "Dynamic multiplayer Pong game featuring robust server architecture for real-time competition directly in the browser.",
        image: "/images/webpong.png",
        tech: ["JavaScript", "HTML", "CSS", "Socket.io"],
        links: {
            github: "https://github.com/YusufTheDev/WebPong",
            live: "https://yusufthedev.github.io/WebPong/"
        }
    },
    {
        title: "Meteorite Defender",
        description: "Engaging space shooter game where players defend against meteorites. Features multiple levels and endless mode.",
        image: "/images/meteoritedefender.png",
        tech: ["Python", "Pygame"],
        links: {
            github: "https://github.com/YusufTheDev/Meteor-Defender"
        }
    },
    {
        title: "Focus Forge",
        description: "Productivity tool for individuals with ADHD. Built during a 24-hour build-a-thon to help users manage tasks and maintain focus.",
        image: "/images/focusforge.png",
        tech: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/YusufTheDev/FocusForge",
            live: "https://yusufthedev.github.io/FocusForge/"
        }
    }
];

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="projects-page"
        >
            <h1 className="page-title">My Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="View Code">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" title="View Live">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
