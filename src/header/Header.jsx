import './Header.css';
import ScrollIndicator from "./ScrollIndicator.jsx";
import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: '#aboutsection' },
    { label: 'Projects', href: '#projectssection' },
    { label: 'Skills', href: '#skillssection' },
    { label: 'Contact', href: '#contact-section' },
];

const sectionIds = navLinks.map(l => l.href.slice(1));

export default function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="nav-links">
            <ScrollIndicator />
            <h1 className="logo">John Does Web</h1>
            <nav className="nav-items">
                {navLinks.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        className={`nav-item${activeSection === href.slice(1) ? ' nav-item--active' : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
