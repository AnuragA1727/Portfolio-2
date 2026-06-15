import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
    {
        id: 1,
        title: 'Pharma-Gaurd(Hackathon Project)',
        description: 'A full-stack healthcare web app built with Node.js, Express, HTML, CSS, and Google Gemini, designed to streamline medicine tracking and deliver a polished, responsive user experience.',
        tags: ['HTML', 'Node.js', 'CSS', 'Express', 'Google Gemini'],
        link: 'https://pharma-gaurd-neural-ninjas-rift-202-self.vercel.app/#',
    },
    {
        id: 2,
        title: 'Calculator App 2026',
        description: 'A modern, mobile-friendly calculator built with HTML, CSS, and JavaScript, featuring a clean interface, responsive layout, and intuitive interaction for quick calculations.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://calc-app-2026.netlify.app/',
    },
    {
        id: 3,
        title: 'Pixel Grid Art App',
        description: 'An interactive browser-based pixel art editor using HTML, CSS, and JavaScript, letting users draw, erase, and preview grid-based artwork in a simple and responsive interface.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://pixel-grid-art.netlify.app/',
    },
]

export default function Projects() {
    return (
        <section id="projects">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My <span>Projects.</span></h2>

                    <div className="projects-grid">
                        {projects.map(({ id, title, description, tags, link }, i) => (
                            <motion.div
                                key={id}
                                className="project-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.12 }}
                                whileHover={{ y: -6 }}
                            >
                                <div className="card-number">0{id}</div>
                                <h3 className="card-title">{title}</h3>
                                <p className="card-desc">{description}</p>
                                <div className="card-tags">
                                    {tags.map(t => <span key={t} className="card-tag">{t}</span>)}
                                </div>
                                <a href={link} className="card-btn" target="_blank" rel="noopener noreferrer">
                                    View Project →
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
