import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
    {
        title: "Research Assistant",
        company: "McMaster University DeGroote School of Business",
        date: "Oct 2025 – Present",
        location: "Hamilton, ON",
        description: [
            "Conduct research on NBA athlete injury prediction using 38,000+ reports and 2,800+ player datasets.",
            "Built ETL pipelines using Python (Pandas, BeautifulSoup, Selenium) and SQL for large-scale data processing.",
            "Developed ML models (scikit-learn, XGBoost) for predictive analysis, applying SHAP for model explainability."
        ],
        type: "research"
    },
    {
        title: "Member",
        company: "Google Developer Groups - McMaster",
        date: "Sep 2025 – Present",
        location: "Hamilton, ON",
        description: [
            "Participated in workshops and hackathons focused on Google Cloud, AI/ML, and web technologies.",
            "Collaborated with peers on hands-on projects integrating APIs and automation tools."
        ],
        type: "community"
    },
    {
        title: "Software Engineer Intern",
        company: "U4RIA",
        date: "Sep 2025 – Dec 2025",
        location: "Greater Toronto Area, Canada · Remote",
        description: [
            "Developed and optimized AI-driven workflows to enhance the efficiency of U4RIA’s wellness platform.",
            "Applied machine learning models and automation techniques to improve recommendation accuracy and reduce manual processing time.",
            "Collaborated with developers and designers to integrate intelligent features that improved overall platform performance and user engagement."
        ],
        type: "work"
    },
    {
        title: "Software Engineer | COO & Co-Founder",
        company: "Xenix AI",
        date: "Nov 2024 – May 2025",
        location: "Toronto, ON",
        description: [
            "Co-founded and led Xenix AI, a consulting firm focused on intelligent automation solutions.",
            "Directed product development and software infrastructure, enhancing operational efficiency and scalability.",
            "Delivered full-stack AI-driven solutions using Python, Flask, and modern web technologies."
        ],
        type: "work"
    }
];

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="experience-page"
        >
            <h1 className="page-title">Experience</h1>
            <div className="timeline">
                {experienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <div className="timeline-meta">
                                    <span><FaCalendarAlt /> {item.date}</span>
                                    <span><FaMapMarkerAlt /> {item.location}</span>
                                </div>
                            </div>
                            <ul className="timeline-description">
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            <span className="timeline-icon">
                                {item.type === 'work' ? <FaBriefcase /> : item.type === 'community' ? <FaUsers /> : <FaGraduationCap />}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Experience;
