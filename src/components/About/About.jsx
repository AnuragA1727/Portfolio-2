import { motion } from 'framer-motion'
import './About.css'

const categories = [
    { label: 'Frontend', value: 'HTML, CSS, JavaScript, React.js' },
    { label: 'Backend', value: 'Node.js, Express.js' },
    { label: 'Databases', value: 'MongoDB' },
    { label: 'AI Integration', value: 'AI-powered features via APIs & Tools' },
    { label: 'DevOps', value: 'Git, GitHub, Cloud Hosting Platforms' },
]

export default function About() {
    return (
        <section id="about">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About <span>Me.</span></h2>

                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                Hi, I'm <span className="highlight">Anurag Arora</span> — a certified{' '}
                                <span className="highlight">Full Stack Developer</span> with{' '}
                                <span className="highlight">AI</span> integration, trained to design and build
                                modern, scalable, and intelligent web applications.
                            </p>
                            <p>
                                The program helped me strengthen my problem-solving skills, sharpen my coding
                                practices, and build end-to-end projects that combine functionality with clean
                                design.
                            </p>
                            <p>
                                I believe <em>"Slow progress is better than no progress"</em> — completing this
                                journey has given me the confidence to keep learning, experimenting, and building
                                impactful applications.
                            </p>
                            <p>
                                My goal is to create solutions that not only solve problems but also enhance user
                                experiences, and I'm eager to apply my skills in real-world opportunities.
                            </p>
                        </div>

                        <div className="about-skills-list">
                            <h3>What I work with</h3>
                            {categories.map(({ label, value }) => (
                                <div key={label} className="skill-row">
                                    <span className="skill-label">{label}</span>
                                    <span className="skill-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
