import React, { useState, useEffect } from 'react'
import logoImg from '../../assets/logo-tight.png'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`hab-header ${isScrolled ? 'hab-header-scrolled' : ''}`}>
      <div className="hab-header-container">
        {/* Logo */}
        <a href="/" className="hab-logo-link" aria-label="Half a Bawa">
          <img src={logoImg} alt="Half a Bawa" className="hab-logo" />
        </a>

        {/* Desktop Navigation Links — Masked Line Reveal */}
        <nav className="hab-nav" aria-label="Primary Navigation">
          <a href="#about" className="hab-nav-link">
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="About Us">About Us</span>
            </span>
          </a>
          <a href="#services" className="hab-nav-link">
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Our Services">Our Services</span>
            </span>
          </a>
          <a href="#work" className="hab-nav-link">
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Our Work">Our Work</span>
            </span>
          </a>
          <a href="#gallery" className="hab-nav-link">
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Gallery">Gallery</span>
            </span>
          </a>
          <a href="#insights" className="hab-nav-link">
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Insights">Insights</span>
            </span>
          </a>
        </nav>

        {/* Action Buttons & Navigation Controls */}
        <div className="hab-header-actions">
          {/* Action Button: Let's Talk. — Complete Button with Right-to-Left Fill */}
          <a href="#contact" className="hab-talk-btn-group" aria-label="Let's Talk">
            <span className="hab-talk-pill">
              <span className="hab-mask-wrap">
                <span className="hab-mask-inner" data-text="Let's Talk.">Let's Talk.</span>
              </span>
            </span>
            <span className="hab-talk-circle">
              <svg className="hab-talk-arrow" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`hab-mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hab-toggle-bar" />
            <span className="hab-toggle-bar" />
            <span className="hab-toggle-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`hab-mobile-drawer ${mobileMenuOpen ? 'drawer-active' : ''}`}>
        <nav className="hab-mobile-nav">
          <a
            href="#about"
            className="hab-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="About Us">About Us</span>
            </span>
          </a>
          <a
            href="#services"
            className="hab-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Our Services">Our Services</span>
            </span>
          </a>
          <a
            href="#work"
            className="hab-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Our Work">Our Work</span>
            </span>
          </a>
          <a
            href="#gallery"
            className="hab-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Gallery">Gallery</span>
            </span>
          </a>
          <a
            href="#insights"
            className="hab-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text="Insights">Insights</span>
            </span>
          </a>
          <a
            href="#contact"
            className="hab-mobile-talk-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk.
          </a>
        </nav>
      </div>
    </header>
  )
}
