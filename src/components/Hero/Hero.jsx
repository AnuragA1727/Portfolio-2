import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
    const typedEl = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Full Stack Developer.', 'Web Developer.', 'MERN Stack Developer.', 'AI Enthusiast.'],
            loop: true,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
        })
        return () => typed.destroy()
    }, [])

    return (
        <section id="home" className="hero">
            <div className="section">
                <div className="hero-inner">
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <p className="hero-greeting">Hello, I'm</p>
                        <h1 className="hero-name">Anurag <span>Arora</span></h1>
                        <h2 className="hero-typed">
                            a Passionate <br />
                            <span ref={typedEl} className="typed-text"></span>
                        </h2>
                        <p className="hero-sub">
                            Building modern, scalable web applications &amp; intelligent digital experiences.
                        </p>
                        <div className="hero-ctas">
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href="#contact" className="btn-secondary">Contact Me</a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="hero-img-wrapper">
                            <img src="/Developer.png" alt="Developer illustration" />
                            <div className="hero-blob" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
