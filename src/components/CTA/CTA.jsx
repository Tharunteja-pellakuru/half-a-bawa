import React, { useEffect, useRef, useState } from 'react'
import ctaBg from '../Projects/assets/project-image-4.jpg'
import './CTA.css'

export default function CTA() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (!('IntersectionObserver' in window)) {
      requestAnimationFrame(() => setIsVisible(true))
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.disconnect()
    }, { threshold: 0.2 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`cta-section${isVisible ? ' is-visible' : ''}`}
      aria-label="Call to Action"
      ref={sectionRef}
    >
      <div className="cta-container">
        <div className="cta-card">
          {/* Blurred Background with Dark Overlay */}
          <div
            className="cta-card-bg"
            style={{ backgroundImage: `url(${ctaBg})` }}
            aria-hidden="true"
          />
          <div className="cta-card-overlay" aria-hidden="true" />

          {/* Central Content */}
          <div className="cta-content">
            {/* Tag */}
            <div className="cta-kicker">
              <span className="cta-kicker-dot" />
              <span>India’s Leading Food and Beverage Consultant</span>
            </div>

            {/* Heading */}
            <h2 className="cta-heading">
              We create exceptional F&B spaces with passion and precision.
            </h2>

            {/* Description */}
            <p className="cta-description">
              End-to-end execution of F&B projects
            </p>

            {/* Button */}
            <a href="#contact" className="cta-btn">
              <span className="cta-btn-label">
                <span className="hab-mask-wrap">
                  <span className="hab-mask-inner" data-text="Contact Us">
                    Contact Us
                  </span>
                </span>
              </span>
              <span className="cta-btn-arrow-box" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cta-btn-arrow"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
