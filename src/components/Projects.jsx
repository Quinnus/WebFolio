import projects from "../data/projects.js";
import './Projects.css'
import {motion} from 'framer-motion'


export default function Projects() {
    return (

        <section id="projectssection">
            <div className="container">
                <h2>Some things I've worked on</h2>
                {projects.map((p, index) => (
                    <motion.div
                        key={p.id}
                        className={index % 2 === 0 ? "card-left" : "card-right"}

                        initial={{
                            opacity: 0,
                            transform: index % 2 === 0 ? "translateX(-10rem)" : "translateX(10rem)"
                        }}
                        whileInView={{
                            opacity: 1,
                            transform: "translateX(0px)"
                        }}
                        viewport={{once: false, margin: "-20px"}}
                        transition={{
                            duration: 1.6,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.1
                        }}
                    >
                        <img className="project-img" src={p.image} alt={p.name}/>
                        <div className="card-content">
                            <p className="projectname"><strong>Project name: </strong> {p.name}</p>
                            <p><strong>Description: </strong>{p.desc}</p>
                            {p.url && <p><a href={p.url} target="_blank" rel="noopener noreferrer">Have a look here</a></p>}
                            <div className="tech-stack">
                                {p.stack.map((t) => (
                                    <span key={t} className="tech-badge">
                        {t}
                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>))}
            </div>
        </section>
    )

}