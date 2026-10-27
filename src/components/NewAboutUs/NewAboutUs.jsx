import React, { useEffect, useMemo, useRef } from 'react'
import './NewAbout.css'

/* ==========================================================================
   Configurable Settings & Constants (Easily Tweakable)
   ========================================================================== */
export const TRACK_HEIGHT = '300vh' // Tall scroll track height
export const COLOR_UNREAD = [242, 177, 150] // #f2b196 - pale peach (not reached yet)
export const COLOR_MID = [238, 97, 40] // #ee6128 - bright orange (just passed front)
export const COLOR_READ = [61, 26, 6] // #3d1a06 - deep dark brown (passed long ago)
export const FRONT_SPAN = 12 // first ~12 letters behind front: fades pale peach -> bright orange
export const TAIL_SPAN = 35 // next ~35 letters: fades bright orange -> deep dark brown

const TEXT =
  'We believe creative work needs focus. That’s why we keep our team tight and our involvement high, so every project gets our full attention. We build brands from scratch or make them better.'

// Smooth RGB linear interpolation (lerp)
const lerp = (a, b, t) =>
  `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)}, ${Math.round(
    a[1] + (b[1] - a[1]) * t
  )}, ${Math.round(a[2] + (b[2] - a[2]) * t)})`

/* Splits text into words (inline-block, nowrap) and letter spans */
function SplitText({ text }) {
  const words = text.split(' ')
  return words.map((word, wi) => (
    <React.Fragment key={wi}>
      <span className="reading-word" aria-hidden="true">
        {word.split('').map((char, ci) => (
          <span key={ci} className="reading-char">
            {char}
          </span>
        ))}
      </span>
      {wi < words.length - 1 ? ' ' : null}
    </React.Fragment>
  ))
}

export default function NewAboutUs() {
  const trackRef = useRef(null)
  const paragraphRef = useRef(null)

  const textMarkup = useMemo(() => <SplitText text={TEXT} />, [])

  useEffect(() => {
    if (!paragraphRef.current || !trackRef.current) return

    const chars = Array.from(paragraphRef.current.querySelectorAll('.reading-char'))
    const n = chars.length
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let rafId = 0
    let lastFront = -1

    // If user prefers reduced motion, render final dark color immediately
    if (reduceMotion) {
      const finalColor = `rgb(${COLOR_READ.join(',')})`
      chars.forEach((char) => {
        char.style.color = finalColor
      })
      return
    }

    const unreadColor = `rgb(${COLOR_UNREAD.join(',')})`

    const paint = (progress) => {
      // The front travels past the last letter by (FRONT_SPAN + TAIL_SPAN)
      const front = progress * (n + FRONT_SPAN + TAIL_SPAN)

      // Avoid redundant DOM writes if front hasn't changed meaningfully
      if (Math.abs(front - lastFront) < 0.05) return
      lastFront = front

      for (let i = 0; i < n; i++) {
        const age = front - i // Distance behind reading front
        let color = unreadColor

        if (age > 0) {
          if (age <= FRONT_SPAN) {
            // Stage 1: Fade from pale peach to bright orange
            color = lerp(COLOR_UNREAD, COLOR_MID, age / FRONT_SPAN)
          } else if (age <= FRONT_SPAN + TAIL_SPAN) {
            // Stage 2: Fade from bright orange to deep dark brown
            color = lerp(COLOR_MID, COLOR_READ, (age - FRONT_SPAN) / TAIL_SPAN)
          } else {
            // Stage 3: Passed long ago, deep dark brown
            color = `rgb(${COLOR_READ.join(',')})`
          }
        }

        chars[i].style.color = color
      }
    }

    const update = () => {
      const track = trackRef.current
      if (!track) return

      const rect = track.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalDistance = rect.height - windowHeight

      if (totalDistance <= 0) {
        paint(1)
        return
      }

      // Progress 0 when track top is at top of viewport; 1 when track bottom reaches bottom of viewport
      const rawProgress = -rect.top / totalDistance
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))

      paint(clampedProgress)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="scroll-reading-wrapper" id="about" aria-label="About Half a Bawa">
      {/* Spacer before track */}
      <div className="scroll-spacer top-spacer">
        <div className="spacer-content">
          <span className="spacer-badge">Scroll-Driven Reading Experience</span>
          <p className="spacer-text">↓ Scroll down to start reading</p>
        </div>
      </div>

      {/* Tall Scroll Track (300vh) */}
      <div
        className="reading-scroll-track"
        ref={trackRef}
        style={{ height: TRACK_HEIGHT }}
      >
        {/* Sticky Full-Viewport Stage */}
        <div className="reading-sticky-stage">
          <div className="reading-stage-container">
            <p
              ref={paragraphRef}
              className="reading-paragraph-target"
              aria-label={TEXT}
            >
              {textMarkup}
            </p>
          </div>
        </div>
      </div>

      {/* Spacer after track */}
      <div className="scroll-spacer bottom-spacer">
        <div className="spacer-content">
          <span className="spacer-badge">Reading Complete</span>
          <p className="spacer-text">Keep scrolling to explore more ↓</p>
        </div>
      </div>
    </section>
  )
}