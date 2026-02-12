import React from 'react';

const Summary = () => {
    const features = [
        {
            title: "Web Development Expert",
            desc: "Specialized in creating responsive, high-performance web applications using React, Node.js, and modern JavaScript frameworks."
        },
        {
            title: "Mobile App Developer",
            desc: "Building native-quality mobile experiences with Flutter and React Native, focusing on smooth UX and optimal performance."
        },
        {
            title: "Problem Solver",
            desc: "Passionate about tackling complex technical challenges with clean code, innovative solutions, and a user-first mindset."
        }
    ];

    return (
        <section id="summary" className="about-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="about-wrapper">
                <div className="section-intro animate-fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p className="subtitle">Discover My Journey</p>
                    <h2 className="title">
                        About <span className="accent-gradient">Me</span>
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-emerald))',
                        margin: '20px auto 0',
                        borderRadius: '2px'
                    }}></div>
                </div>

                <div className="about-split animate-fade-in">
                    <div className="about-left">
                        <span className="about-eyebrow">The Developer</span>
                        <h2 className="about-title-modern">
                            Crafting High-Performance <span className="accent-gradient">Digital Experiences</span>
                        </h2>
                        <div style={{ position: 'relative', marginTop: '40px' }}>
                            <p className="about-desc-modern">
                                I'm <strong style={{ color: '#fff' }}>Muhammed Dishan V</strong>, a <strong style={{ color: '#fff' }}>Software Engineer & MERN Specialist</strong> driven by the art of turning complex problems into elegant, human-centric solutions.
                            </p>
                            <p className="about-desc-modern" style={{ marginTop: '20px' }}>
                                Currently at Hirush Global LLP, I bridge the gap between creative design and technical excellence. My journey is fueled by a relentless pursuit of performance, scalability, and pixel-perfect precision.
                            </p>

                        </div>
                    </div>

                    <div className="about-right">
                        <div className="about-cards-stack">
                            {features.map((feature, idx) => (
                                <div key={idx} className="about-feature-card glass" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    alignItems: 'flex-start',
                                    paddingLeft: '35px',
                                    position: 'relative'
                                }}>
                                    {/* Accent line for UI/UX touch */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '15px',
                                        top: '30px',
                                        bottom: '30px',
                                        width: '2px',
                                        background: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                                        opacity: 0.6,
                                        borderRadius: '2px'
                                    }}></div>

                                    <div>
                                        <h3 className="feature-title" style={{
                                            margin: 0,
                                            marginBottom: '10px',
                                            fontSize: '1.2rem',
                                            fontWeight: '800',
                                            letterSpacing: '0.01em'
                                        }}>{feature.title}</h3>
                                        <p className="feature-desc" style={{
                                            margin: 0,
                                            fontSize: '0.9rem',
                                            lineHeight: '1.6',
                                            color: 'var(--text-dim)'
                                        }}>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
