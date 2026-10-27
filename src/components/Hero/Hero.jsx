import React, { useState, useEffect, useCallback } from 'react'
import bg3 from '../../assets/hero-bg-3.jpg'
import bg2 from '../../assets/hero-bg-2.jpg'
import bg1 from '../../assets/hero-bg-1.jpg'
import './Hero.css'

const slides = [
  { id: 1, image: bg3, alt: 'Bespoke Bar & Cocktail Lounge' },
  { id: 2, image: bg2, alt: 'Tropical Modernist Courtyard Pavilion' },
  { id: 3, image: bg1, alt: 'Skylight Atrium & Architectural Dining' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  // Auto-play timer every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="hero-banner-wrapper">
      <section className="hero-framed-carousel" aria-label="Hero Carousel Banner">
        {/* Carousel Image Track */}
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'is-active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        {/* Soft atmospheric gradient overlay for text legibility */}
        <div className="carousel-overlay" />

        {/* Left Bottom Text Content */}
        <div className="hero-bottom-content">
          <span className="hero-kicker">Leading Hospitality Consultants in India</span>
          <h1 className="hero-title" aria-label="We Curate and Optimise Hospitality Spaces">
            <span className="hero-word-mask"><span className="hero-word">We</span></span>{' '}
            <span className="hero-word-mask"><span className="hero-word">Curate</span></span>{' '}
            <span className="hero-word-mask"><span className="hero-word">and</span></span>{' '}
            <span className="hero-word-mask"><span className="hero-word">Optimise</span></span>
            <br />
            <span className="hero-word-mask"><span className="hero-word">Hospitality</span></span>{' '}
            <span className="hero-word-mask"><span className="hero-word">Spaces</span></span>
          </h1>
        </div>

        {/* Minimal Dots Indicator */}
        <div className="carousel-dots-indicator">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`carousel-dot-pill ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
