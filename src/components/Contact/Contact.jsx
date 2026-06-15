import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import './Contact.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('sending')
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: `${form.firstName} ${form.lastName}`,
                    from_email: form.email,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            )
            setStatus('sent')
            setForm({ firstName: '', lastName: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 5000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    return (
        <section id="contact">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In <span>Touch.</span></h2>

                    <div className="contact-grid">
                        <div className="contact-left">
                            <h3>Got a project for me?</h3>
                            <p>
                                I'm always open to discussing new projects, opportunities, or partnerships.
                                Feel free to reach out — I'd love to hear from you!
                            </p>
                            <div className="social-links">
                                <a href="https://github.com/AnuragA1727" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                    <FiGithub /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/anurag-arora-b4a151192/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                    <FiLinkedin /> LinkedIn
                                </a>
                                <a href="mailto:anurag.arora1727@gmail.com" className="social-link" aria-label="Email">
                                    <FiMail /> Email
                                </a>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' && '⏳ Sending...'}
                                {status === 'sent' && '✓ Message Sent!'}
                                {status === 'error' && '✗ Something went wrong. Try again.'}
                                {status === 'idle' && 'Send Message'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
