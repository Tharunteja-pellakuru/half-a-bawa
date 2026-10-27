import React, { useEffect, useRef, useState } from 'react'
import insightImage1 from '../Projects/assets/project-image-1.jpg'
import insightImage2 from '../Projects/assets/project-image-3.jpg'
import insightImage3 from '../Projects/assets/project-image-5.jpg'
import './Insights.css'

const insights = [
  {
    category: 'Concept & Strategy',
    title: 'A great hospitality concept starts with a clear point of view',
    description:
      'Build a distinctive guest experience by aligning your idea, audience, and business goals from the start.',
    image: insightImage1,
    imageAlt: 'Warm, thoughtfully designed restaurant interior',
  },
  {
    category: 'Space & Design',
    title: 'Designing spaces that make guests want to stay',
    description:
      'Thoughtful layouts, lighting, and atmosphere can turn a meal into a memorable experience.',
    image: insightImage2,
    imageAlt: 'Atmospheric dining space with considered lighting',
  },
  {
    category: 'Operations',
    title: 'Set your opening team up for a stronger start',
    description:
      'Clear processes and well-prepared teams help bring the promise of a new venue to life.',
    image: insightImage3,
    imageAlt: 'Inviting bar and dining area ready to welcome guests',
  }
]

export default function Insights() {
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const visibleInsights = showAll ? insights : insights.slice(0, 3)

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
    }, { threshold: 0.1 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`insights-section${isVisible ? ' is-visible' : ''}`}
      id="insights"
      aria-labelledby="insights-title"
      ref={sectionRef}
    >
      <div className="insights-container">
        <div className="insights-heading">
          <div className="insights-kicker">
            <span className="insights-kicker-dot" aria-hidden="true" />
            <span>Ideas & Perspectives</span>
          </div>
          <div className="insights-heading-content">
            <h2 className="insights-title" id="insights-title">Insights</h2>
            <p className="insights-intro">
              Practical perspectives for creating thoughtful hospitality experiences
              and stronger F&amp;B businesses.
            </p>
          </div>
        </div>

        <div className="insights-grid">
          {visibleInsights.map((insight, index) => (
            <article
              className="insight-card"
              key={insight.title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div
                className="insight-image-wrap"
                style={{ '--reveal-delay': `${index * 120}ms` }}
              >
                <img
                  className="insight-image"
                  src={insight.image}
                  alt={insight.imageAlt}
                  loading="lazy"
                />
              </div>
              <div className="insight-card-content">
                <span className="insight-category">{insight.category}</span>
                <h3 className="insight-card-title">{insight.title}</h3>
                <p className="insight-card-description">{insight.description}</p>
              </div>
            </article>
          ))}
        </div>
        <button
          className="insights-view-all"
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((isShowingAll) => !isShowingAll)}
        >
          <span className="insights-view-all-label">
            <span className="hab-mask-wrap">
              <span className="hab-mask-inner" data-text={showAll ? 'Show Less' : 'View All'}>
                {showAll ? 'Show Less' : 'View All'}
              </span>
            </span>
          </span>
          <span className="insights-view-all-arrow" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  )
}
