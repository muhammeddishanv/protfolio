import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'summary', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [activeSegment, setActiveSegment] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            for (const item of NAV_ITEMS) {
                const el = document.getElementById(item.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSegment(item.id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    {/* Desktop nav links */}
                    <ul className="nav-links desktop-only">
                        {NAV_ITEMS.map((item) => (
                            <li
                                key={item.id}
                                className={`nav-link ${activeSegment === item.id ? 'active' : ''}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop resume button */}
                    <div className="nav-cta desktop-only">
                        <button className="btn-nav-outline" onClick={() => window.open('/resume.pdf', '_blank')}>
                            Resume <span className="arrow">↗</span>
                        </button>
                    </div>

                    {/* Mobile hamburger button */}
                    <button
                        className="mobile-menu-btn mobile-only"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={26} color="#fff" />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Drawer Panel */}
            <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                <button
                    className="mobile-drawer-close"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={24} color="#fff" />
                </button>

                <ul className="mobile-nav-list">
                    {NAV_ITEMS.map((item) => (
                        <li
                            key={item.id}
                            className={`mobile-nav-item ${activeSegment === item.id ? 'active' : ''}`}
                            onClick={() => scrollTo(item.id)}
                        >
                            <span className="mobile-nav-dot" />
                            {item.label}
                        </li>
                    ))}
                </ul>

                <button
                    className="mobile-resume-btn"
                    onClick={() => { window.open('/resume.pdf', '_blank'); setIsMenuOpen(false); }}
                >
                    Resume ↗
                </button>
            </div>
        </>
    );
};

export default Navbar;
