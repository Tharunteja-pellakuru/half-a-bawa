import React, { useRef, useState, useEffect, useCallback } from 'react'
import img1 from './assets/project-image-1.jpg'
import img7 from './assets/project-image-7.jpg'
import img3 from './assets/project-image-3.jpg'
import img2 from './assets/project-image-2.jpg'
import img5 from './assets/project-image-5.jpg'
import img6 from './assets/project-image-6.jpg'
import img4 from './assets/project-image-4.jpg'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Restaurants & Fine Dines',
    image: img1,
    tags: ['Indoor Dining', 'Outdoor Seating', 'Ambient Lighting'],
  },
  {
    id: 2,
    title: 'Cafes & Specialty Spaces',
    image: img7,
    tags: ['Concept Design', 'Space Planning', 'Execution'],
  },
  {
    id: 3,
    title: 'Night Clubs & Lounges',
    image: img3,
    tags: ['Night Clubs', 'Bar Design', 'Lighting & Ambience'],
  },
  {
    id: 4,
    title: 'Courtyard & Pavilion Dining',
    image: img2,
    tags: ['Courtyard Dining', 'Tropical Architecture', 'Alfresco'],
  },
  {
    id: 5,
    title: 'Tapas Rooms & Cocktail Bars',
    image: img5,
    tags: ['Tapas Bar', 'Kinetic Lighting', 'Mixology'],
  },
  {
    id: 6,
    title: 'Breweries & High-Energy Spaces',
    image: img6,
    tags: ['Microbrewery', 'Industrial Design', 'Acoustics'],
  },
  {
    id: 7,
    title: 'Garden Venues & Alfresco',
    image: img4,
    tags: ['Garden Dining', 'Bespoke Furnishing', 'Landscape'],
  },
]

// Duplicate the projects array for seamless infinite looping
const infiniteProjects = [...projects, ...projects]

export default function Projects() {
  const sliderRef = useRef(null)
  const isHoveredRef = useRef(false)
  const [isPaused, setIsPaused] = useState(false)

  // Smooth continuous auto-scroll using requestAnimationFrame
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animId
    const section = slider.closest('.projects-section')
    const revealObserver = section && 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return
        section.classList.add('is-visible')
        revealObserver.disconnect()
      }, { threshold: 0.1 })
      : null
    if (revealObserver && section) revealObserver.observe(section)
    if (!revealObserver && section) section.classList.add('is-visible')

    const speed = 0.85 // Smooth luxury scrolling speed in px/frame

    function step() {
      if (!isHoveredRef.current && slider) {
        slider.scrollLeft += speed
        const halfWidth = slider.scrollWidth / 2
        // Seamless loop without visual jump
        if (slider.scrollLeft >= halfWidth) {
          slider.scrollLeft -= halfWidth
        }
      }
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animId)
      revealObserver?.disconnect()
    }
  }, [])

  const scrollNext = () => {
    const slider = sliderRef.current
    if (!slider) return
    const card = slider.querySelector('.project-card')
    const cardWidth = card ? card.offsetWidth + 26 : 466
    const halfWidth = slider.scrollWidth / 2

    if (slider.scrollLeft >= halfWidth - 10) {
      slider.scrollLeft -= halfWidth
    }
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' })
  }

  const scrollPrev = () => {
    const slider = sliderRef.current
    if (!slider) return
    const card = slider.querySelector('.project-card')
    const cardWidth = card ? card.offsetWidth + 26 : 466

    if (slider.scrollLeft <= 15) {
      slider.scrollLeft += slider.scrollWidth / 2
    }
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  }

  const handleMouseEnter = () => {
    isHoveredRef.current = true
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    isHoveredRef.current = false
    setIsPaused(false)
  }

  return (
    <section className="projects-section" id="work" aria-label="Projects Launched">
      <div className="projects-container">
        {/* Left Side: Title, Description, and Navigation Arrows */}
        <div className="projects-intro">
          <div className="projects-intro-header">
            <h2 className="projects-title">Projects Launched</h2>
            <p className="projects-description">
              From high end fine dines, to stunning night clubs, specialty cafes to a tapas room, we have curated it all!
            </p>
          </div>

          {/* <div className="projects-nav-arrows">
            <button
              type="button"
              className="projects-arrow-btn prev-arrow"
              onClick={scrollPrev}
              aria-label="Previous projects"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button
              type="button"
              className="projects-arrow-btn next-arrow"
              onClick={scrollNext}
              aria-label="Next projects"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Right Side: Horizontal Projects Carousel */}
        <div
          className="projects-slider-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
        >
          <div className="projects-slider" ref={sliderRef}>
            {infiniteProjects.map((project, index) => (
              <article
                key={`${project.id}-${index}`}
                className="project-card"
                style={{ '--reveal-delay': `${Math.min(index, 7) * 90}ms` }}
              >
                <div className="project-card-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                    loading="lazy"
                  />
                </div>

                {/* Card Bottom Meta Bar */}
                <div className="project-card-footer">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-action" aria-hidden="true">
                    <span className="project-diagonal-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
