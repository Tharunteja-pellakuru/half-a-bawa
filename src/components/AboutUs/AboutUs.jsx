import React, { useEffect, useRef, useState } from 'react'
import './AboutUs.css'

const servicePillars = [
  {
    id: 'conceptualisation',
    theme: 'dark',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
      </svg>
    ),
    title: 'Conceptualisation',
    subtitle: 'We offer well-conceived & tailor-made solutions in',
    items: [
      { num: '01', label: 'Concept Development' },
      { num: '02', label: 'Brand Positioning' },
      { num: '03', label: 'Space Planning & Design' },
      { num: '04', label: 'Menu Curation' },
      { num: '05', label: 'Budget Forecast' },
    ],
    buttonText: 'Explore Services',
    buttonHref: '#services',
  },
  {
    id: 'execution',
    theme: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'End to End Execution',
    subtitle: "We leverage our team's expertise to assist you with",
    items: [
      { num: '01', label: 'Project Execution' },
      { num: '02', label: 'Stakeholder / Vendor Management' },
      { num: '03', label: 'Human Capital Solutions' },
      { num: '04', label: 'Timeline Management' },
    ],
    buttonText: 'Explore Services',
    buttonHref: '#services',
  },
  {
    id: 'operations',
    theme: 'light',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Strategic Operations',
    subtitle: 'We offer a complete package on array of services to support you in',
    items: [
      { num: '01', label: 'Brand Development' },
      { num: '02', label: 'Standardization of Operations' },
      { num: '03', label: 'Human Resources Management' },
      { num: '04', label: 'Financial Resources Management' },
      { num: '05', label: 'Customer Relations' },
      { num: '06', label: 'Artist Management' },
      { num: '07', label: 'Social Media Marketing' },
    ],
    buttonText: 'Explore Services',
    buttonHref: '#services',
  },
]

export default function AboutUs() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({ years: 0, venues: 0 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      requestAnimationFrame(() => {
        setIsVisible(true)
        setStats({ years: 15, venues: 50 })
        section.querySelector('.about-cards-container')?.classList.add('is-visible')
      })
      return
    }

    let animationFrame = 0
    let hasStarted = false
    const cardsContainer = section.querySelector('.about-cards-container')
    const cardsObserver = cardsContainer
      ? new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return
        cardsContainer.classList.add('is-visible')
        cardsObserver.disconnect()
      }, { threshold: 0.1 })
      : null
    if (cardsContainer && cardsObserver) cardsObserver.observe(cardsContainer)

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      if (hasStarted) return
      hasStarted = true
      observer.disconnect()

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setStats({ years: 15, venues: 50 })
        return
      }

      const startTime = performance.now()
      const duration = 1200
      const count = (now) => {
        const progress = Math.min(1, (now - startTime) / duration)
        const easedProgress = 1 - (1 - progress) ** 3
        setStats({
          years: Math.floor(easedProgress * 15),
          venues: Math.floor(easedProgress * 50),
        })
        if (progress < 1) animationFrame = requestAnimationFrame(count)
      }
      animationFrame = requestAnimationFrame(count)
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      cardsObserver?.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section
      className={`about-section${isVisible ? ' is-visible' : ''}`}
      id="about"
      aria-label="About Half a Bawa"
      ref={sectionRef}
    >
      {/* Top Part: Video and metrics on the left, editorial content on the right */}
      <div className="about-container">
        {/* Left Side: YouTube Video Embed and Metrics */}
        <div className="about-video-column">
          <div className="about-video-card">
            <div className="about-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/IVQ_SEgalTA?si=5qvGgM_VtZi-OdGd"
                title="Half a Bawa — Hospitality Consultancy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="about-iframe"
              />
            </div>
          </div>
          <div className="about-highlights">
            <div className="about-highlight-item">
              <span className="highlight-number">{stats.years}+</span>
              <span className="highlight-label">Years of F&B Expertise</span>
            </div>
            <div className="about-highlight-item">
              <span className="highlight-number">{stats.venues}+</span>
              <span className="highlight-label">Venues Launched</span>
            </div>
            <div className="about-highlight-item">
              <span className="highlight-number">Pan-India</span>
              <span className="highlight-label">Consulting Footprint</span>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="about-content-column">
          <div className="about-header-group">
            <div className="about-kicker">
              <span className="about-kicker-dot" />
              <span>Hospitality & Concept Consultancy</span>
            </div>

            <h2 className="about-title">Welcome to Half a Bawa</h2>
          </div>

          <div className="about-text-body">
            <p className="about-lead">
              At Half a Bawa, we specialize in providing expert hospitality consulting
              services in India. Whether you're running or setting up a restaurant, hotel,
              or any other food and beverage business, we deliver tailored solutions to
              streamline your operations, improve customer experiences, and boost profitability.
            </p>

            <p className="about-paragraph">
              Our team of restaurant consultants in India brings a wealth of experience in
              setting up new food businesses, food and beverage development, staff training,
              and marketing. We understand the unique challenges the hospitality industry
              faces, and our solutions are designed to help businesses thrive in a competitive
              environment.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Part: 3 Service Pillar Cards */}
      <div className="about-cards-container">
        <div className="about-cards-grid">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`pillar-card pillar-card-${pillar.theme}`}
            >
              {/* Card Header with Floating Badge */}
              <div className="pillar-card-header">
                <div className="pillar-card-headings">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-subtitle">{pillar.subtitle}</p>
                </div>
                <div className="pillar-icon-badge" aria-hidden="true">
                  {pillar.icon}
                </div>
              </div>

              {/* Divider Line */}
              <div className="pillar-divider" />

              {/* Numbered Items List */}
              <ul className="pillar-items-list">
                {pillar.items.map((item) => (
                  <li key={item.num} className="pillar-item">
                    <span className="pillar-item-num">{item.num}</span>
                    <span className="pillar-item-label">{item.label}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Action Pill Button */}
              <div className="pillar-action-wrapper">
                <a href={pillar.buttonHref} className="pillar-btn">
                  <span className="pillar-btn-label">
                    <span className="hab-mask-wrap">
                      <span className="hab-mask-inner" data-text={pillar.buttonText}>
                        {pillar.buttonText}
                      </span>
                    </span>
                  </span>
                  <span className="pillar-btn-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
