import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
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
                <h2>Skills & capabilities</h2>
                <p>I have a somewhat unusual background for a software developer. The skills I list below are a mix
                    of old and new. Having worked in senior positions in a large multinational, I've lead teams, coached
                    individuals, and managed senior stakeholders. The newer stuff: I was awarded a 1.1 in
                    Software Development from Maynooth University in 2026.</p>
                <div className="organized-rows">
                    {categories.map((cat) => (
                        <div key={cat.id} className="skill-row">
                            <motion.span
                                className="row-label"
                                initial={{opacity: 0, x: -60}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, amount: 0.5}}
                                transition={{duration: 0.6, ease: "easeOut"}}
                            >
                                {cat.label}
                            </motion.span>
                            <SkillList skills={mySkills.filter(s => s.category === cat.id)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillList({ skills }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('skills-visible'); observer.disconnect(); } },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <ul className="skills-list" ref={ref}>
            {skills.map((skill, index) => (
                <li
                    key={skill.id}
                    className="skill-badge"
                    style={{ animationDelay: `${index * 0.08}s` }}
                >
                    {skill.name}
                </li>
            ))}
        </ul>
    );
}