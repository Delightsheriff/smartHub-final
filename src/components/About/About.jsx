import aboutImage from '../../assets/img/about/about.png';
import './About.css';
import './bootstrap.min.css';

export const About = () => {
  return (
    <>
      <section className="about-area section-bg-one section-notch">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 d-flex align-items-center">
              <div className="about-content pt-100 pb-100">
                <div className="section-title section-title-white mb-30">
                  <h2 className="title">About Kindergarten School</h2>
                  <p>
                    Enthusastcay deminate competitive oportunities through
                    transparent and action Compelngly seize andvirschemas
                    through intermandated creative adiea sources Enthusiasticay
                    plagiarize clientcentered and relationships foovalent
                    experiences Distinctively architect 24 naservice for wreless
                    andebusiness ahosfluorescently Efficiently comunicate
                    coperative andmethods empowerment awesome atrough
                    Monotonectaly myocardinate crioss and functional niche
                    markets and functional scenarios awesome nteractively
                    utilize viral.
                  </p>
                </div>
                <div className="about-btn">
                  <a className="thm-btn thm-btn-2" href="contact.html">
                    admission now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-img d-none d-lg-block f-right">
                <img src={aboutImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
