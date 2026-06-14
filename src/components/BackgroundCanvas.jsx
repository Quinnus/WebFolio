import { useEffect, useRef } from 'react';

const SPACING = 28;
const COLOR = '94, 234, 212';

export default function BackgroundCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let dots = [];

        function buildDots() {
            dots = [];
            const cols = Math.ceil(canvas.width / SPACING) + 1;
            const rows = Math.ceil(canvas.height / SPACING) + 1;
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * SPACING,
                        y: j * SPACING,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.0003 + Math.random() * 0.0004,
                    });
                }
            }
        }

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildDots();
        }

        resize();
        window.addEventListener('resize', resize);

        function draw(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const dot of dots) {
                const opacity = 0.04 + 0.1 * (0.5 + 0.5 * Math.sin(time * dot.speed + dot.phase));
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${COLOR}, ${opacity})`;
                ctx.fill();
            }
            animId = requestAnimationFrame(draw);
        }

        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
