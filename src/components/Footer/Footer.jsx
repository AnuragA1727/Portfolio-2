import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-logo">Portfolio.</span>
                <p className="footer-copy">© 2026 Anurag Arora. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="https://github.com/AnuragA1727" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/anurag-arora-b4a151192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                    <a href="mailto:anurag.arora1727@gmail.com" aria-label="Email"><FiMail /></a>
                </div>
            </div>
        </footer>
    )
}
