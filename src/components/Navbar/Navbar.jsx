import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('#home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const sections = navLinks.map(l => document.querySelector(l.href))
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) setActive(`#${e.target.id}`)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )
        sections.forEach(s => s && observer.observe(s))
        return () => observer.disconnect()
    }, [])

    return (
        <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="navbar-inner">
                <a href="#home" className="logo">Portfolio.</a>

                <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className={active === href ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}
