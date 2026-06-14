import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const TAGLINE = 'Full-stack developer.\nFormer corporate.\nBased in Dublin.';

function Typewriter({ text, delay = 600 }) {
    const [displayed, setDisplayed] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        const start = setTimeout(() => {
            const tick = setInterval(() => {
                indexRef.current += 1;
                setDisplayed(text.slice(0, indexRef.current));
                if (indexRef.current >= text.length) clearInterval(tick);
            }, 40);
            return () => clearInterval(tick);
        }, delay);
        return () => clearTimeout(start);
    }, [text, delay]);

    return (
        <span style={{ whiteSpace: 'pre-line' }}>
            {displayed}
            <span className="typewriter-cursor" aria-hidden="true">|</span>
        </span>
    );
}

export default function Hero() {
    return (
        <section id="herosection">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="hero-title">John Does Web</h1>
                <p className="hero-tagline">
                    <Typewriter text={TAGLINE} delay={800} />
                </p>
                <a href="#projectssection" className="hero-cta">See my work</a>
            </motion.div>
        </section>
    );
}
