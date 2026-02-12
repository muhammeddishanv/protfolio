import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            organization: "IEEE MEA Student Branch",
            roles: [
                "Chairperson of IAS at IEEE MEASB",
                "Link Representative",
                "Graphic Designer"
            ]
        },
        {
            organization: "TACS MEA",
            roles: [
                "Design Lead",
                "Program Manager",
                "Graphic Designer"
            ]
        },
        {
            organization: "National Service Scheme (Unit 110)",
            roles: [
                "Social Media Manager"
            ]
        }
    ];

    return (
        <section id="achievements" style={{ padding: '80px 20px', maxWidth: '1400px', margin: '0 auto' }}>
            <div className="section-intro animate-fade-in" style={{ textAlign: 'center' }}>
                <p className="subtitle">Extra-Curricular</p>
                <h2 className="title" style={{ marginBottom: '60px' }}>
                    Leadership & <span className="accent-gradient">Roles</span>
                </h2>
            </div>

            <div className="bento-grid">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="bento-item col-4 glass animate-fade-in"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            padding: '30px',
                            minHeight: '220px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '800',
                            color: '#fff',
                            marginBottom: '20px',
                            borderBottom: '2px solid var(--accent-cyan-glow)',
                            paddingBottom: '10px',
                            display: 'inline-block'
                        }}>
                            {item.organization}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {item.roles.map((role, i) => (
                                <li key={i} style={{
                                    color: 'var(--text-dim)',
                                    fontSize: '0.95rem',
                                    marginBottom: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        background: 'var(--accent-cyan)',
                                        borderRadius: '50%',
                                        flexShrink: 0
                                    }}></span>
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
