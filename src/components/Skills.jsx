import {motion} from 'framer-motion';
import mySkills from '../data/skills.js';
import './Skills.css';

export default function Skills() {
    const categories = [
        {id: 'build', label: 'Build'},
        {id: 'pipeline', label: 'Deploy'},
        {id: 'strategy', label: 'Grow'}
    ];

    return (
        <section id="skillssection">
            <div className="container">
                <h2>Skills & Capabilities</h2>
                <div className="organized-rows">
                    {categories.map((cat) => (
                        <div key={cat.id} className="skill-row">
                            <motion.span
                                className="row-label"
                                initial={{opacity: 0, x: -60}} // Starts 20px to the left
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: false, amount: 0.5}}
                                transition={{duration: 0.6, ease: "easeOut"}}
                            >
                                {cat.label}
                            </motion.span>
                            <ul className="skills-list">
                                {mySkills
                                    .filter(s => s.category === cat.id)
                                    .map((skill, index) => (
                                        <motion.li
                                            key={skill.id}
                                            className="skill-badge"
                                            initial={{opacity: 0, y: -20}} // Reduced drop distance to prevent overlap
                                            whileInView={{opacity: 1, y: 0}}
                                            viewport={{once: false, amount: 0.1}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 150, // Higher stiffness = faster snap
                                                damping: 18,    // Higher damping = less "jiggling"
                                                delay: index * 0.2 // Increased delay to 0.15s to clear space
                                            }}
                                        >
                                            {skill.name}
                                        </motion.li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}