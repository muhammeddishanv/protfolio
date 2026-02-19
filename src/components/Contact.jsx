import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '80px 20px 0', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '0',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 255, 204, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="section-intro animate-fade-in" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 className="title" style={{ marginBottom: '15px' }}>
                    Get In <span className="accent-gradient">Touch</span>
                </h2>
                <div style={{
                    width: '50px',
                    height: '4px',
                    background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-emerald))',
                    margin: '0 auto',
                    borderRadius: '2px'
                }}></div>
                <p style={{
                    color: 'var(--text-dim)',
                    maxWidth: '550px',
                    margin: '25px auto 0',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                }}>
                    I'm currently available for exciting opportunities. Let's discuss how we can work together!
                </p>
            </div>

            <div className="contact-grid-headers" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '40px',
                marginBottom: '20px',
                paddingLeft: '10px'
            }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                    Contact Information
                </h3>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                    Send Message
                </h3>
            </div>

            <div className="contact-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.25fr',
                gap: '40px',
                alignItems: 'start'
            }}>
                {/* Left Column: Contact Info */}
                <div className="contact-info animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                        {
                            label: 'Email',
                            value: 'muhammeddishanv@gmail.com',
                            link: 'mailto:muhammeddishanv@gmail.com',
                            icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>
                        },
                        {
                            label: 'Phone',
                            value: '+91 9497 8395 94',
                            link: 'tel:+919497839594',
                            icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        },
                        {
                            label: 'Location',
                            value: 'Nilambur, Kerala, India',
                            link: 'https://maps.google.com/?q=Nilambur,Kerala,India',
                            icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>
                        }
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass bento-item contact-card"
                            style={{
                                padding: '24px',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '24px',
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(12px)',
                                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                textDecoration: 'none',
                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                            }}
                        >
                            <div className="icon-container" style={{
                                width: '60px',
                                height: '60px',
                                background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.1), rgba(16, 185, 129, 0.1))',
                                border: '1px solid rgba(0, 255, 204, 0.2)',
                                borderRadius: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                position: 'relative',
                                transition: 'all 0.4s ease'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: '-5px',
                                    background: 'var(--accent-cyan)',
                                    opacity: '0.15',
                                    filter: 'blur(12px)',
                                    borderRadius: 'inherit',
                                    zIndex: -1
                                }}></div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {item.icon}
                                </svg>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '800', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</p>
                                <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.02em' }}>{item.value}</p>
                            </div>
                        </a>
                    ))}

                    {/* Connect Bar */}
                    <div style={{
                        marginTop: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        padding: '0 10px'
                    }} className="animate-fade-in">
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            color: 'var(--text-dim)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em'
                        }}>Connect</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {[
                                { name: 'Github', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                                { name: 'Linkedin', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
                                { name: 'Whatsapp', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .006 5.408 0 12.049c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.938 1.607h.005c6.632 0 12.04-5.408 12.045-12.048a11.82 11.82 0 00-3.526-8.512z' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="social-minimal-icon"
                                    style={{
                                        color: 'var(--text-dim)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>


                </div>

                {/* Right Column: Message Form */}
                <div className="glass animate-fade-in message-form-container" style={{
                    padding: '40px',
                    borderRadius: '32px',
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 20px 50px -15px rgba(0,0,0,0.4)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Interior Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(0, 255, 204, 0.03) 0%, transparent 70%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}></div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
                        <div className="input-field-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', paddingLeft: '4px' }}>Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="form-input"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '16px',
                                    padding: '16px 20px',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                }}
                            />
                        </div>

                        <div className="input-field-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', paddingLeft: '4px' }}>Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="form-input"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '16px',
                                    padding: '16px 20px',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                }}
                            />
                        </div>

                        <div className="input-field-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', paddingLeft: '4px' }}>Subject</label>
                            <div style={{ position: 'relative' }}>
                                <select
                                    className="form-input"
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '16px',
                                        padding: '16px 20px',
                                        color: '#fff',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                        appearance: 'none',
                                    }}
                                >
                                    <option value="" style={{ background: '#0c0c0c' }}>Select a subject</option>
                                    <option value="collaboration" style={{ background: '#0c0c0c' }}>Collaboration</option>
                                    <option value="hire" style={{ background: '#0c0c0c' }}>Hiring</option>
                                    <option value="other" style={{ background: '#0c0c0c' }}>Other</option>
                                </select>
                                <svg
                                    style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.5 }}
                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>

                        <div className="input-field-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', paddingLeft: '4px' }}>Message</label>
                            <textarea
                                placeholder="How can I help you?"
                                rows="5"
                                className="form-input"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '16px',
                                    padding: '16px 20px',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                    resize: 'none'
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="premium-submit-btn"
                            style={{
                                width: '100%',
                                marginTop: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                padding: '18px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))',
                                border: 'none',
                                color: '#000',
                                fontSize: '1.05rem',
                                fontWeight: '800',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                boxShadow: '0 10px 25px -5px rgba(0, 255, 204, 0.3)'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <style>
                {`
                    @media (max-width: 1024px) {
                        .contact-grid, .contact-grid-headers {
                            grid-template-columns: 1fr !important;
                            gap: 30px !important;
                        }
                        .contact-grid-headers h3:nth-child(2) {
                            display: none;
                        }
                    }
                    
                    .contact-card:hover {
                        transform: translateY(-8px);
                        border-color: var(--accent-cyan) !important;
                        box-shadow: 0 20px 40px -15px rgba(0, 255, 204, 0.15) !important;
                        background: rgba(255, 255, 255, 0.05) !important;
                    }

                    .contact-card:hover .icon-container {
                        transform: scale(1.1) rotate(5deg);
                        background: linear-gradient(135deg, rgba(0, 255, 204, 0.2), rgba(16, 185, 129, 0.2)) !important;
                    }

                    .social-icon-btn:hover {
                        transform: translateY(-5px);
                        background: rgba(0, 255, 204, 0.1) !important;
                        border-color: var(--accent-cyan) !important;
                        color: var(--accent-cyan) !important;
                    }

                    .form-input:focus {
                        border-color: var(--accent-cyan) !important;
                        background: rgba(255, 255, 255, 0.06) !important;
                        transform: translateY(-2px);
                        box-shadow: 0 10px 20px -10px rgba(0, 255, 204, 0.2);
                    }

                    .premium-submit-btn:hover {
                        transform: scale(1.02);
                        box-shadow: 0 15px 35px -5px rgba(0, 255, 204, 0.4);
                        filter: brightness(1.1);
                    }

                    .premium-submit-btn:active {
                        transform: scale(0.98);
                    }
                    
                    input::placeholder, textarea::placeholder {
                        color: rgba(255, 255, 255, 0.15);
                    }
                    
                    option {
                        color: #fff;
                    }
                `}
            </style>
        </section>
    );
};

export default Contact;
