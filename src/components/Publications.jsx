import React from 'react';

const Publications = () => {
    return (
        <section id="publications" style={{ padding: '80px 20px', maxWidth: '1400px', margin: '0 auto' }}>
            <div className="section-intro animate-fade-in" style={{ textAlign: 'center' }}>
                <p className="subtitle">Research & Writing</p>
                <h2 className="title" style={{ marginBottom: '60px' }}>
                    Scholarly <span className="accent-gradient">Publications</span>
                </h2>
            </div>

            <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    className="glass bento-item"
                    style={{
                        padding: '40px',
                        maxWidth: '900px',
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '150px',
                        height: '150px',
                        background: 'radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)',
                        zIndex: 0,
                        opacity: 0.5
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{
                            fontSize: '1.4rem',
                            fontWeight: '800',
                            color: '#fff',
                            marginBottom: '15px',
                            lineHeight: '1.3'
                        }}>
                            DIGIPOLL: BLOCKCHAIN-POWERED E-VOTING WITH ADVANCED AUTHENTICATION
                        </h3>

                        <p style={{
                            color: 'var(--accent-cyan)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Volume 14, Issue 7 — July 2025
                        </p>

                        <div style={{
                            height: '1px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            margin: '25px 0'
                        }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>DOI:</span>
                                <code style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    color: '#fff'
                                }}>
                                    10.15680/IJIRSET.2025.1407119
                                </code>
                            </div>

                            <a
                                href="https://tinyurl.com/3cctkxkd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-nav-outline"
                                style={{
                                    alignSelf: 'flex-start',
                                    marginTop: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                Read Full Paper <span style={{ fontSize: '1.2rem' }}>↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
