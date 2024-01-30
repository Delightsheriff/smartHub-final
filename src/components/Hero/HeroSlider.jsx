import './HeroSlider.css';

export const HeroSlider = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="inner-hero">
            <p>A New Approach to</p>
            <h1>Kids Education</h1>
            <p className="last-child">
              The Universe is one great kindergarten for man. Everything that
              exists has brought with it its own peculiar lesson.
            </p>
            <div className="hero-btn">
              <button className="thm-btn thm-btn-2">Admission Now</button>
              <button className="thm-btn">Our Classes</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
