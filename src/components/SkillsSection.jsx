import React from 'react';
import './SkillsSection.css';
import { motion } from 'framer-motion';

const skillsData = {
    "Programming Languages": ["Python", "SQL", "C++", "C", "C#", "JavaScript", "TypeScript", "Java", "R", "HTML", "CSS", "PHP", "Haskell"],
    "Frameworks": ["React", "Next.js", "Flask", "Express.js", "Node.js", "Angular"],
    "Libraries": ["Pandas", "PyTorch", "pytest", "NumPy", "TensorFlow", "XGBoost", "Socket.io", "Tailwind CSS", "Plotly"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    "Developer Tools": ["AWS", "GCP", "Docker", "Kubernetes", "Git", "GitHub", "Postman", "Linux", "Unity", "Geode", "Unreal Engine", "VS Code", "Excel"]
};

const SkillsSection = () => {
    return (
        <div className="skills-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="skills-title"
            >
                Skills & Technologies
            </motion.h2>

            <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        className="skill-category-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3>{category}</h3>
                        <div className="skill-tags">
                            {skills.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
