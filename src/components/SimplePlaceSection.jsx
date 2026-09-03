import React from 'react';
import './SimplePlaceSection.css';

export default function SimplePlaceSection() {
  return (
    <section className="simple-place-section container">
      <div className="simple-place-card">
        <div className="simple-place-grid">
          {/* Left Side: Heading & Copy */}
          <div className="simple-place-left">
            <h2 className="simple-heading">
              <span>TEMPATNYA</span>
              <br />
              <span>SEDERHANA.</span>
            </h2>

            <p className="simple-copy">
              Buat ngobrol, nugas, nongkrong,<br />
              atau cuma duduk, ngopi sambil<br />
              ngelihatin orang ngebucin loh ya.
            </p>

            {/* Hand-drawn Arrow Doodle pointing to photo */}
            <div className="doodle doodle-arrow-down">
              <svg width="70" height="50" viewBox="0 0 70 50" fill="none" stroke="var(--blue)" strokeWidth="2.2" strokeLinecap="round">
                <path d="M10 10 Q35 5 50 30" />
                <path d="M40 28 L50 30 L48 20" />
              </svg>
            </div>
          </div>

          {/* Right Side: Gazebo Polaroid Photo */}
          <div className="simple-place-right">
            <div className="polaroid simple-polaroid">
              <div className="tape-strip tape-top-center"></div>
              <img 
                src="/images/kasiruang/kasiruang-gazebo.webp" 
                alt="Gazebo Kasiruang Sederhana" 
              />
            </div>

            {/* Star doodle top right */}
            <div className="doodle doodle-star-topright">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
