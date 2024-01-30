import iconImage from '../../assets/img/icon/f-icon-1.png';
import iconImage2 from '../../assets/img/icon/f-icon-2.png';
import iconImage3 from '../../assets/img/icon/f-icon-3.png';
import iconImage4 from '../../assets/img/icon/f-icon-4.png';
import './Feature.css';

export const Feature = () => {
  return (
    <>
      <section className="feature-area pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-60">
                <h2 className="title">Welcome to Our Kinter</h2>
                <p>
                  Here is what you can expect from a house cleaning from a Handy
                  professional. Download the app to share further cleaning
                  details and instructions!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape">
                  <img src={iconImage} alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title">
                    <h3>Active Learning</h3>
                  </div>
                  <p>
                    Since have been visonary relable sofware engnern partne have
                    been and visionary
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape feature-shape-2">
                  <img src={iconImage2} alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title feature-title-2">
                    <h3>Expert Teachers</h3>
                  </div>
                  <p>
                    Since have been visonary relable sofware engnern partne have
                    been and visionary
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape feature-shape-3">
                  <img src={iconImage3} alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title feature-title-3">
                    <h3>Parents Day</h3>
                  </div>
                  <p>
                    Since have been visonary relable sofware engnern partne have
                    been and visionary
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape feature-shape-4">
                  <img src={iconImage4} alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title feature-title-4">
                    <h3>Music Lessons</h3>
                  </div>
                  <p>
                    Since have been visonary relable sofware engnern partne have
                    been and visionary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
