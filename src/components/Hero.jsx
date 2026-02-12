import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-grid animate-fade-in">
                <div className="hero-left">
                    <h1 className="hero-mega-title">
                        <span className="text-white">Build</span>
                        <span className="outlined-emerald">Digital</span>
                        <span className="text-white">Futures</span>
                    </h1>
                </div>

                <div className="hero-right">
                    <div className="hero-sub-block">
                        <h2 className="sub-title">Hey I'm ,<br />Muhammed Dishan V</h2>
                        <p className="description">
                            Transform your ideas into cutting-edge web solutions.<br /> I'm a Software Engineer & MERN Specialist craft high performance websites and applications tailored to your business.
                        </p>
                        <div className="hero-btns">
                            <a href="#projects" className="btn-filled">See my works</a>
                            <a href="#contact" className="btn-outline">Contact me</a>
                        </div>

                        {/* Social Connect Bar */}
                        <div style={{
                            marginTop: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        }} className="hero-connect-bar">
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: '800',
                                color: 'var(--text-dim)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em'
                            }}>Connect</span>
                            <div style={{ width: '40px', height: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                {[
                                    { name: 'Github', link: 'https://github.com', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                                    { name: 'Linkedin', link: 'https://linkedin.com', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
                                    { name: 'Whatsapp', link: 'https://wa.me/919497839594', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .006 5.408 0 12.049c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.938 1.607h.005c6.632 0 12.04-5.408 12.045-12.048a11.82 11.82 0 00-3.526-8.512z' },
                                    { name: 'Email', link: 'mailto:muhammeddishanv@gmail.com', path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22,6l-10,7L2,6' }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--text-dim)',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d={social.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-footer-status">
                <span className="dot-green"></span>
                <p className="status-text">Muhammed Dishan V — Software Engineer & MERN Specialist</p>
            </div>

            <div className="hero-image-overlay"></div>
        </section>
    );
};

export default Hero;
