import './Classes.css';
import './bootstrap.min.css';
import Image1 from '../../assets/img/class/class-1.jpg';
import Image2 from '../../assets/img/class/class-2.jpg';
import Image3 from '../../assets/img/class/class-3.jpg';

export const Classes = () => {
  return (
    <>
      <section className="class-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-60">
                <h2 className="title">Our Popular Classes</h2>
                <p>
                  Here is what you can expect from a house cleaning from a Handy
                  professional. Download the app to share further cleaning
                  details and instructions!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mb-30">
                <div className="class-img">
                  <img src={Image1} alt="class image" />
                </div>
                <div className="class-content">
                  <h4 className="title">
                    <a href="class-single.html">Imagination Classes</a>
                  </h4>
                  <p>Class Time : 08:00 am - 10:00 am</p>
                  <p>
                    Draticaly novate fuly rarched an plications awesome theme
                    education
                  </p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">30 - 40</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size class-size-2">06 - 09</span>
                  </li>
                  <li>
                    <span>Tution Fee</span>
                    <span className="class-size">$320.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mb-30">
                <div className="class-img">
                  <img src={Image2} alt="class image" />
                </div>
                <div className="class-content">
                  <h4 className="title">
                    <a href="class-single.html">Talented Explorers</a>
                  </h4>
                  <p>Class Time : 08:00 am - 10:00 am</p>
                  <p>
                    Draticaly novate fuly rarched an plications awesome theme
                    education
                  </p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">30 - 40</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size class-size-2">06 - 09</span>
                  </li>
                  <li>
                    <span>Tution Fee</span>
                    <span className="class-size">$320.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mb-30">
                <div className="class-img">
                  <img src={Image3} alt="class image" />
                </div>
                <div className="class-content">
                  <h4 className="title">
                    <a href="class-single.html">Super Color Kid</a>
                  </h4>
                  <p>Class Time : 08:00 am - 10:00 am</p>
                  <p>
                    Draticaly novate fuly rarched an plications awesome theme
                    education
                  </p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">30 - 40</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size class-size-2">06 - 09</span>
                  </li>
                  <li>
                    <span>Tution Fee</span>
                    <span className="class-size">$320.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="view-class text-center mt-30">
                <a className="thm-btn" href="classes.html">
                  See More Classes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
