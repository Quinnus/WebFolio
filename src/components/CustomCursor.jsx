import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };
        const hide = () => setVisible(false);

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseleave', hide);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseleave', hide);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: pos.x,
                top: pos.y,
                opacity: visible ? 1 : 0,
            }}
            aria-hidden="true"
        />
    );
}
