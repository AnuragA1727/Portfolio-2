import { motion } from 'framer-motion'
import './Skills.css'

const skillGroups = [
    {
        category: 'Frontend',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
        category: 'Database',
        skills: ['MongoDB', 'Mongoose'],
    },
    {
        category: 'AI & Tools',
        skills: ['AI APIs', 'Google Gemini', 'Prompt Engineering'],
    },
    {
        category: 'DevOps & Version Control',
        skills: ['Git', 'GitHub', 'Vercel', 'Netlify'],
    },
]

export default function Skills() {
    return (
        <section id="skills">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My <span>Skills.</span></h2>

                    <div className="skills-grid">
                        {skillGroups.map(({ category, skills }, gi) => (
                            <motion.div
                                key={category}
                                className="skill-group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: gi * 0.1 }}
                            >
                                <h3 className="group-title">{category}</h3>
                                <div className="skill-tags">
                                    {skills.map(skill => (
                                        <span key={skill} className="tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
