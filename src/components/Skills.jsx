import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const skillGroups = [
        {
            title: "Frontend Development",
            icon: "code",
            skills: [
                { name: "React & Next.js", level: 90 },
                { name: "TypeScript/JavaScript", level: 88 },
                { name: "Flutter & Dart", level: 85 },
                { name: "Redux & State Management", level: 85 },
                { name: "Responsive Design", level: 92 }
            ]
        },
        {
            title: "Backend & Database",
            icon: "database",
            skills: [
                { name: "Node.js & Express", level: 85 },
                { name: "MongoDB", level: 88 },
                { name: "REST API Development", level: 87 },
                { name: "Database Design", level: 85 },
                { name: "Firebase & Cloud", level: 82 }
            ]
        },
        {
            title: "Tools & Management",
            icon: "settings",
            skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "Project Management", level: 85 },
                { name: "Team Coordination", level: 88 },
                { name: "Agile Methodology", level: 82 },
                { name: "Documentation", level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" ref={sectionRef} style={{ padding: '100px 20px', maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
            {/* Theme-consistent background glow */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 255, 204, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="section-intro animate-fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
                <p className="subtitle">Technical Proficiency</p>
                <h2 className="title">
                    Precision Built <span className="accent-gradient">Skill Matrix</span>
                </h2>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-emerald))',
                    margin: '20px auto 0',
                    borderRadius: '2px'
                }}></div>
            </div>

            <div className="bento-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                gap: '30px'
            }}>
                {skillGroups.map((group, index) => (
                    <div
                        key={index}
                        className="bento-item glass animate-fade-in"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            padding: '35px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Group Header matching theme */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                            <div style={{
                                width: '42px',
                                height: '42px',
                                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#000', // Darker icon on bright background
                                boxShadow: '0 8px 16px var(--accent-cyan-glow)',
                                flexShrink: 0
                            }}>
                                {group.icon === 'code' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                )}
                                {group.icon === 'database' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                )}
                                {group.icon === 'settings' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                )}
                            </div>
                            <h3 style={{
                                fontSize: '1.45rem',
                                fontWeight: '800',
                                color: '#fff',
                                margin: 0,
                                letterSpacing: '-0.02em'
                            }}>
                                {group.title}
                            </h3>
                        </div>

                        {/* Skills List with theme variables */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', flex: 1 }}>
                            {group.skills.map((skill, i) => (
                                <div key={i}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline',
                                        marginBottom: '10px'
                                    }}>
                                        <span style={{
                                            color: 'var(--text-dim)',
                                            fontSize: '0.95rem',
                                            fontWeight: '600'
                                        }}>
                                            {skill.name}
                                        </span>
                                        <span style={{
                                            color: 'var(--accent-cyan)',
                                            fontSize: '0.9rem',
                                            fontWeight: '800'
                                        }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div style={{
                                        height: '5px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '10px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                height: '100%',
                                                width: isVisible ? `${skill.level}%` : '0%',
                                                background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-emerald))',
                                                borderRadius: '10px',
                                                transition: 'width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                boxShadow: '0 0 15px var(--accent-cyan-glow)'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
