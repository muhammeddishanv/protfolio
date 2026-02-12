import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Junior Software Developer (MERN Stack)",
            company: "Hirush Global",
            type: "Full-time",
            location: "Perinthalmanna",
            period: "Dec 2025 - Present",
            description: "Built and shipped production features using React, Node.js, Express, and MongoDB with a focus on reliability and maintainability. Designed and optimized REST APIs, improving response times and reducing redundant data fetching. Collaborated with designers and product stakeholders to translate requirements into shipped functionality. Reviewed pull requests, incorporated feedback, and iterated on code quality and edge cases. Worked across unfamiliar parts of the codebase, quickly understanding existing patterns and constraints.",
            skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Code Review", "Full Stack"]
        },
        {
            role: "Software Developer Intern (Full Stack Developer)",
            company: "Pro26",
            type: "Full-time",
            location: "Manjeri",
            period: "July 2025 - Dec 2025",
            description: "Contributed to multiple customer-facing applications using React, Flutter, Node.js, and Firebase. Improved system stability and performance through architectural refactoring and better state handling. Implemented CI/CD workflows using cloud services and automated deployments. Participated in technical discussions, balancing speed with long-term code quality. Communicated progress and trade-offs clearly with teammates and leads.",
            skills: ["React", "Flutter", "Node.js", "Firebase", "CI/CD", "System Architecture", "Team Collaboration"]
        }
    ];

    return (
        <section id="experience" style={{ padding: '120px 20px', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-fade-in">
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '900',
                    color: '#00ffcc',
                    marginBottom: '20px'
                }}>
                    Professional Experience
                </h2>
                <div style={{
                    width: '100px',
                    height: '4px',
                    background: 'var(--accent-cyan)',
                    margin: '0 auto',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px var(--accent-cyan-glow)'
                }}></div>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Timeline line */}
                <div style={{
                    position: 'absolute',
                    left: '15px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-emerald) 100%)',
                    opacity: '0.3'
                }}></div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="animate-fade-in" style={{ position: 'relative', paddingLeft: '50px' }}>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                left: '6px',
                                top: '30px',
                                width: '20px',
                                height: '20px',
                                background: 'var(--accent-cyan)',
                                borderRadius: '50%',
                                border: '4px solid var(--bg-dark)',
                                boxShadow: '0 0 20px var(--accent-cyan)',
                                zIndex: 2
                            }}></div>

                            <div style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '30px',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(0, 255, 204, 0.3)';
                                    e.currentTarget.style.transform = 'translateX(10px)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 255, 204, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)';
                                }}>

                                <div style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                                        {exp.role}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '10px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                                                {exp.company}
                                            </span>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                padding: '4px 12px',
                                                background: 'rgba(0, 255, 204, 0.15)',
                                                border: '1px solid var(--accent-cyan)',
                                                borderRadius: '20px',
                                                color: 'var(--accent-cyan)',
                                                fontWeight: '600'
                                            }}>
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                                        <span>{exp.location}</span>
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.7',
                                    color: 'var(--text-dim)',
                                    marginBottom: '20px'
                                }}>
                                    {exp.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {exp.skills.map((skill, idx) => (
                                        <span key={idx} style={{
                                            padding: '6px 16px',
                                            background: 'rgba(0, 255, 204, 0.1)',
                                            border: '1px solid rgba(0, 255, 204, 0.3)',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            color: 'var(--accent-cyan)',
                                            fontWeight: '600'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
