import React, { useEffect, useRef, useState } from 'react'
import './Footer.css'

export default function Footer() {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return
    if (!('IntersectionObserver' in window)) {
      requestAnimationFrame(() => setIsVisible(true))
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.05 })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      className={`footer-section${isVisible ? ' is-visible' : ''}`}
      id="contact"
      aria-label="Site Footer"
      ref={footerRef}
    >
      <div className="footer-container">
        {/* Horizontal Divider Line */}
        <div className="footer-divider" />

        {/* Top Meta Row: Copyright on Left, Social Icons on Right */}
        <div className="footer-meta-row">
          <p className="footer-copyright">
            Copyright © 2026 Half a Bawa Hospitality.
          </p>

          <div className="footer-social-links" aria-label="Social media channels">
            <a
              href="https://www.facebook.com/Halfabawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/half-a-bawa-consulting/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@HalfaBawaHospitality"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="4" />
                <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/halfabawa_hospitality/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Full Width Watermark Brand Heading — Zero Padding & Margin */}
      <div className="footer-brand-watermark" aria-hidden="true">
        <svg
          viewBox="0 0 1020 175"
          className="footer-brand-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="footer-brand-text"
          >
            half a bawa
          </text>
        </svg>
      </div>
    </footer>
  )
}
