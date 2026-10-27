import React, { useEffect, useRef, useState } from 'react'
import imgRestaurantDev from './assets/WhatsApp-Image-2024-12-05-at-12.12.16.jpeg'
import imgFnB from './assets/WhatsApp-Image-2024-12-05-at-12.12.19.jpeg'
import imgBeverage from './assets/WhatsApp-Image-2024-12-05-at-12.12.17-1.jpeg'
import imgKitchen from './assets/WhatsApp-Image-2024-12-05-at-13.40.08.jpeg'
import imgStaffing from './assets/Staffing/Hiring-staffing-scaled.jpg'
import imgTraining from './assets/WhatsApp-Image-2024-12-05-at-12.12.17-2.jpeg'
import imgMarketing from './assets/WhatsApp-Image-2024-12-05-at-12.12.18-1.jpeg'
import imgAudits from './assets/WhatsApp-Image-2024-12-05-at-12.12.19-2-1.jpeg'
import './WhatWeDo.css'

const createTriptychSlides = (image) => [0, 1, 2].map((index) => ({
  image,
  position: `${index * 50}% center`,
  isTriptych: true,
}))

function ServiceCardCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (
      images.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [images.length])

  return (
    <div
      className="service-card-media"
      role="group"
      aria-label={`${title} image carousel`}
      aria-roledescription="carousel"
    >
      <div
        className="service-card-image-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((slide, index) => (
          <div
            key={`${slide.image}-${index}`}
            className="service-card-image"
            role="img"
            aria-hidden={index !== activeIndex}
            aria-label={`${title} image ${index + 1} of ${images.length}`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundPosition: slide.position,
              backgroundSize: slide.isTriptych ? '300% 100%' : 'cover',
            }}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="service-card-carousel-dots" aria-label="Choose an image">
          {images.map((slide, index) => (
            <button
              key={`${slide.image}-dot-${index}`}
              className={`service-card-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
              type="button"
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const servicesData = [
  {
    id: 'restaurant-dev',
    title: 'End to End Restaurant Development',
    subtitle: 'Overseeing every stage of restaurant creation, from concept to launch.',
    images: createTriptychSlides(imgRestaurantDev),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        label: 'Concept Design',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        ),
        label: 'Space Planning',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        label: 'Turnkey Launch',
      },
    ],
  },
  {
    id: 'fnb-consulting',
    title: 'Food and Beverage Consulting in India',
    subtitle: 'Creating Menus That Balance Taste and Profitability',
    images: createTriptychSlides(imgFnB),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
        label: 'Menu Curation',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        label: 'Cost Engineering',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
        label: 'Taste Profiling',
      },
    ],
  },
  {
    id: 'beverage-programming',
    title: 'Beverage Programming',
    subtitle: 'Innovative and Tailored Breverage Experiences',
    images: createTriptychSlides(imgBeverage),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 22h8" />
            <path d="M12 15v7" />
            <path d="M5 3h14l-4 9H9L5 3z" />
          </svg>
        ),
        label: 'Craft Mixology',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ),
        label: 'Bar Ergonomics',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ),
        label: 'Vendor Sourcing',
      },
    ],
  },
  {
    id: 'kitchen-planning',
    title: 'Kitchen Planning and Design',
    subtitle: 'Efficient and Ergonomic Kitchen Layouts',
    images: createTriptychSlides(imgKitchen),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        ),
        label: 'Space Optimization',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        ),
        label: 'Equipment Selection',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        label: 'Workflow Safety',
      },
    ],
  },
  {
    id: 'hiring-staffing',
    title: 'Hiring and Staffing Solutions',
    subtitle: 'Building a Skilled and Cohesive Team',
    images: [
      { image: imgStaffing, position: 'center', isTriptych: false },
      ...createTriptychSlides(imgTraining),
    ],
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        label: 'Team Development',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
            <line x1="6" y1="17" x2="18" y2="17" />
          </svg>
        ),
        label: 'Industry Expertise',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
        label: 'Tailored Solutions',
      },
    ],
  },
  {
    id: 'staff-training',
    title: 'Staff Training and Development',
    subtitle: 'Equipping Your Team to Deliver Excellence',
    images: createTriptychSlides(imgTraining),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        ),
        label: 'SOP Training',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        ),
        label: 'Service Mastery',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        label: 'Performance Culture',
      },
    ],
  },
  {
    id: 'marketing-consultation',
    title: 'Marketing Consultation',
    subtitle: 'Revenue-Booking Strategies',
    images: createTriptychSlides(imgMarketing),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
          </svg>
        ),
        label: 'Brand Positioning',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        ),
        label: 'Social & PR',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
        label: 'Footfall Growth',
      },
    ],
  },
  {
    id: 'operational-audits',
    title: 'Operational Audits',
    subtitle: 'Enhancing Efficiency and Maintaining Standards',
    images: createTriptychSlides(imgAudits),
    features: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
        label: 'P&L Analysis',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        label: 'Quality Audits',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <line x1="12" y1="6" x2="12" y2="8" />
            <line x1="12" y1="16" x2="12" y2="18" />
          </svg>
        ),
        label: 'Cost Control',
      },
    ],
  },
]

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false)
  const wrapRef = useRef(null)
  const stickyRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    if (!('IntersectionObserver' in window)) {
      requestAnimationFrame(() => setIsVisible(true))
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.disconnect()
    }, { threshold: 0.1 })
    observer.observe(wrap)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const wrap = wrapRef.current
    const sticky = stickyRef.current
    const track = trackRef.current
    if (!wrap || !sticky || !track) return

    let maxX = 0
    let start = 0
    let range = 1

    function update() {
      if (!wrap || window.innerWidth <= 768) return
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / range))
      track.style.transform = `translate3d(${-progress * maxX}px, 0, 0)`
    }

    function measure() {
      if (!wrap || !track || !sticky) return

      // On mobile / tablet screens, allow standard horizontal swipe without pinning
      if (window.innerWidth <= 768) {
        wrap.style.height = 'auto'
        sticky.style.position = 'relative'
        sticky.style.top = '0px'
        track.style.transform = 'none'
        return
      }

      maxX = Math.max(0, track.scrollWidth - sticky.clientWidth)
      if (maxX === 0) {
        wrap.style.height = 'auto'
        sticky.style.position = 'relative'
        sticky.style.top = '0px'
        track.style.transform = 'none'
        return
      }

      sticky.style.position = 'sticky'

      // Start horizontal movement when the section is vertically centered.
      const stickyH = sticky.offsetHeight
      const vh = window.innerHeight
      const topOffset = Math.max(0, Math.round((vh - stickyH) / 2))
      sticky.style.top = `${topOffset}px`

      range = Math.max(1, maxX)
      // End the pin as soon as the last card reaches the viewport edge.
      wrap.style.height = `${stickyH + range}px`

      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY
      start = wrapTop - topOffset

      update()
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('load', measure)

    measure()
    const t1 = setTimeout(measure, 150)
    const t2 = setTimeout(measure, 400)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <section
      className={`services-hscroll-wrap${isVisible ? ' is-visible' : ''}`}
      id="services"
      ref={wrapRef}
      aria-label="Our Expertise"
    >
      <div className="services-sticky" ref={stickyRef}>
        {/* Pinned Section Header */}
        <div className="services-header-pinned">
          <div className="services-kicker">
            <span className="services-kicker-dot" />
            <span>Our Expertise</span>
          </div>

          <div className="services-heading-row">
            <h2 className="services-heading">
              <span className="services-heading-mask"><span>Our</span></span>{' '}
              <span className="services-heading-mask"><span>Expertise</span></span>
            </h2>
            <p className="services-lead">
              We specialize in bespoke, end-to-end solutions from concept development
              to strategic operations, ensuring your hospitality project excels at every stage.
            </p>
          </div>
        </div>

        {/* Horizontal Track of Cards */}
        <div className="services-track-container" tabIndex={0} aria-label="Our services">
          <div className="services-track" id="track" ref={trackRef}>
            {servicesData.map((service, index) => (
                <article
                  key={service.id}
                  className="service-card"
                  style={{ animationDelay: `${Math.min(index, 7) * 90}ms` }}
                >
                  {/* Service image */}
                  <div className="service-card-media-wrapper">
                    <ServiceCardCarousel images={service.images} title={service.title} />
                  </div>

                  {/* Card Content Body */}
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>

                    <p className="service-card-subtitle">{service.subtitle}</p>

                  </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
