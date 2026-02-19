import React, { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Mobile Apps',
    'AI & Research'
  ];

  const projects = [
    {
      title: "Restaurant Management System",
      category: "Web Development",
      description: "Modern web-based application designed to streamline restaurant operations. Built using React, TypeScript, and Firebase for order processing, menu updates, and table management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?q=80&w=800&auto=format&fit=crop",
      status: "Completed",
      tags: ["React.js", "Node.js", "PostgreSQL"],
      extraTags: "+1",
      featured: true
    },
    {
      title: "Blockchain E-Voting Platform",
      category: "AI & Research",
      description: "A decentralized voting system leveraging Ethereum blockchain. Ensures immutability and transparency using Solidity smart contracts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
      status: "Completed",
      tags: ["Solidity", "React", "MetaMask"],
      extraTags: "+2"
    },
    {
      title: "Learning Management System",
      category: "Mobile Apps",
      description: "Feature-rich educational platform with course tracking and assessment tools built for high-performance mobile devices.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      status: "Completed",
      tags: ["Flutter", "Appwrite", "Dart"],
      extraTags: "+1"
    },
    {
      title: "Tournament Management App",
      category: "Mobile Apps",
      description: "Sports event organization app with real-time scoring and automated scheduling. Built with Flutter and Firebase.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop",
      status: "Completed",
      tags: ["Flutter", "Firebase", "Cloud"],
      extraTags: "+1"
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '100px 20px', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
      {/* Background Glows matching theme */}
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
        <p className="subtitle">Featured Work</p>
        <h2 className="title" style={{ marginBottom: '20px' }}>
          Digital <span className="accent-gradient">Creations</span>
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-emerald))',
          margin: '0 auto',
          borderRadius: '2px'
        }}></div>
        <p style={{
          color: 'var(--text-dim)',
          maxWidth: '800px',
          margin: '30px auto 0',
          fontSize: '1.1rem',
          lineHeight: '1.6'
        }}>
          A curated collection of innovative solutions ranging from enterprise systems to blockchain research.
        </p>
      </div>

      {/* Filter Buttons matching theme */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginBottom: '60px'
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? '' : 'glass'}
            style={{
              padding: '10px 24px',
              borderRadius: '50px',
              border: activeCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
              background: activeCategory === cat
                ? 'rgba(0, 255, 204, 0.1)'
                : 'transparent',
              color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-dim)',
              fontSize: '0.85rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.05em'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid with Theme Design */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '30px'
      }}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="glass bento-item animate-fade-in"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              padding: '0', // Reset for image-top design
              animationDelay: `${index * 0.1}s`,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Image Container */}
            <div className="project-img-box">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' }}
                />

                {/* View Project Button on Hover */}
                <div className="project-view-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(5, 5, 5, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  backdropFilter: 'blur(5px)'
                }}>
                  <button className="btn-nav-outline" style={{ background: '#fff', color: '#000', border: 'none' }}>
                    View Project <span style={{ marginLeft: '8px' }}>→</span>
                  </button>
                </div>
              </AspectRatio>
            </div>

            {/* Content Container */}
            <div style={{ padding: '30px' }}>
              <h3 style={{
                color: '#fff',
                fontSize: '1.4rem',
                fontWeight: '800',
                marginBottom: '15px',
                letterSpacing: '-0.02em'
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'var(--text-dim)',
                fontSize: '0.95rem',
                lineHeight: '1.7',
                marginBottom: '30px',
                height: '75px', // Uniform height
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical'
              }}>
                {project.description}
              </p>

              {/* Tech Tags matching theme */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    border: '1px solid rgba(0, 255, 204, 0.2)',
                    background: 'rgba(0, 255, 204, 0.05)',
                    color: 'var(--accent-cyan)',
                    padding: '7px 15px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}>
                    {tag}
                  </span>
                ))}
                {project.extraTags && (
                  <span style={{
                    color: 'var(--text-dim)',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {project.extraTags}
                  </span>
                )}
              </div>
            </div>

            <style>
              {`
                                .project-img-box:hover img {
                                    transform: scale(1.08);
                                }
                                .project-img-box:hover .project-view-overlay {
                                    opacity: 1;
                                }
                                .bento-item:hover {
                                    border-color: var(--accent-cyan);
                                    box-shadow: 0 0 30px var(--accent-cyan-glow);
                                }
                            `}
            </style>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
