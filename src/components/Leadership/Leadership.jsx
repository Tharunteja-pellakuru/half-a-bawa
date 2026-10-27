import teamPhoto from './assets/HaB-Team-Picture2-1024x684.png'
import './Leadership.css'

export default function Leadership() {
  return (
    <section className="leadership-section" id="leadership" aria-labelledby="leadership-title">
      <div className="leadership-container">
        <div className="leadership-heading">
          <div className="leadership-kicker">
            <span className="leadership-kicker-dot" />
            <span>Meet the team</span>
          </div>
          <div className="leadership-heading-content">
            <h2 className="leadership-title" id="leadership-title">Our Leadership Team</h2>
            <p className="leadership-intro">
              Meet the experts behind Half a Bawa, dedicated to curating
              exceptional hospitality experiences from concept to completion.
            </p>
          </div>
        </div>

        <div className="leadership-photo">
          <img
            src={teamPhoto}
            alt="The Half a Bawa leadership team"
            className="leadership-photo-image"
          />
          <div className="leadership-photo-shade" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
