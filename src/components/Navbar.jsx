import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [activeSegment, setActiveSegment] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'summary', 'experience', 'achievements', 'publications', 'skills', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSegment(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-only">
                    {[
                        { id: 'home', label: 'Home' },
                        { id: 'summary', label: 'About Me' },
                        { id: 'experience', label: 'Experience' },
                        { id: 'achievements', label: 'Achievements' },
                        { id: 'publications', label: 'Publications' },
                        { id: 'skills', label: 'Skills' },
                        { id: 'projects', label: 'Projects' },
                        { id: 'contact', label: 'Contact' }
                    ].map((item) => (
                        <li
                            key={item.id}
                            className={`nav-link ${activeSegment === item.id ? 'active' : ''}`}
                            onClick={() => scrollTo(item.id)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="nav-cta desktop-only">
                    <button className="btn-nav-outline" onClick={() => window.open('/resume.pdf', '_blank')}>
                        Resume <span className="arrow">↗</span>
                    </button>
                </div>

                {/* Mobile Navigation via Sheet */}
                <div className="mobile-only">
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <button className="burger" style={{ display: 'flex', background: 'transparent', border: 'none', padding: 0 }}>
                                <Menu className="text-white w-8 h-8" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" style={{ backgroundColor: 'var(--bg-dark)', borderLeft: '1px solid var(--glass-border)' }}>
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <SheetDescription className="sr-only">Navigate through the portfolio sections</SheetDescription>
                            <ul className="nav-links-mobile" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '40px',
                                padding: '40px 0',
                                listStyle: 'none'
                            }}>
                                {[
                                    { id: 'home', label: 'Home' },
                                    { id: 'summary', label: 'About Me' },
                                    { id: 'experience', label: 'Experience' },
                                    { id: 'achievements', label: 'Achievements' },
                                    { id: 'publications', label: 'Publications' },
                                    { id: 'skills', label: 'Skills' },
                                    { id: 'projects', label: 'Projects' },
                                    { id: 'contact', label: 'Contact' }
                                ].map((item) => (
                                    <li
                                        key={item.id}
                                        className={`nav-link ${activeSegment === item.id ? 'active' : ''}`}
                                        style={{ fontSize: '1.5rem' }}
                                        onClick={() => scrollTo(item.id)}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                                <li>
                                    <button className="btn-nav-outline" onClick={() => window.open('/resume.pdf', '_blank')}>
                                        Resume ↗
                                    </button>
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
