import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      ref={footerRef}
      style={{
        padding: '80px 40px 40px',
        background: 'var(--bg-dark)',
        borderTop: '1px solid var(--glass-border)',
        position: 'relative'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '80px',
        marginBottom: '80px'
      }} className="footer-grid-main">

        {/* Brand Column */}
        <div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '900',
            marginBottom: '20px',
            marginTop: 0,
            textTransform: 'uppercase',
            letterSpacing: '-1px'
          }}>
            MUHAMMED <span className="accent-gradient">DISHAN V</span><span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </h2>
          <p style={{
            color: 'var(--text-dim)',
            fontSize: '1rem',
            lineHeight: '1.7',
            maxWidth: '400px',
            marginBottom: '24px'
          }}>
            Full Stack Developer, Software Engineer, and MERN Specialist with expertise in React, Node.js, and modern web technologies. Passionate about creating innovative solutions that drive real-world impact.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            {[
              { name: 'Github', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
              { name: 'Linkedin', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
              { name: 'Twitter', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' }
            ].map((social, i) => (
              <a key={i} href="#" style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.3s ease'
              }}
                className="footer-social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.path}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '30px',
            marginTop: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>Get In Touch</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a href="mailto:muhammeddishanv@gmail.com" style={{
              color: 'var(--text-dim)',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-dim)'}>
              muhammeddishanv@gmail.com
            </a>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem', margin: 0 }}>+91 9497 8395 94</p>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem', margin: 0 }}>Nilambur, Kerala, India</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        paddingTop: '40px',
        borderTop: '1px solid var(--glass-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', width: '100%', textAlign: 'center' }}>
          &copy; {currentYear} Muhammed Dishan V. All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            right: '40px',
            bottom: '40px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            boxShadow: '0 10px 20px rgba(0, 255, 204, 0.3)',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          className="scroll-to-top"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}

      <style>
        {`
                    @media (max-width: 1024px) {
                        .footer-grid-main {
                            grid-template-columns: 1fr 1fr !important;
                            gap: 40px !important;
                        }
                    }
                    @media (max-width: 768px) {
                        .footer-grid-main {
                            grid-template-columns: 1fr !important;
                        }
                        .scroll-to-top {
                            position: fixed !important;
                            bottom: 100px !important;
                            right: 20px !important;
                        }
                        footer {
                            padding: 60px 20px 40px !important;
                        }
                    }
                `}
      </style>
    </footer>
  );
};

export default Footer;
