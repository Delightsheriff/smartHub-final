import countIcon1 from '../../assets/img/icon/c-icon1.png';
import countIcon2 from '../../assets/img/icon/c-icon2.png';
import countIcon3 from '../../assets/img/icon/c-icon3.png';
import countIcon4 from '../../assets/img/icon/c-icon4.png';

const Counter = () => {
  return (
    <>
      <section className="counter-area section-bg-two section-notch pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src={countIcon1} alt="" />
                <h3>
                  <span className="odometer" data-count="2500">
                    00
                  </span>
                  <span className="plus">+</span>
                </h3>
                <p>Students Enrolled</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src={countIcon2} alt="" />
                <h3>
                  <span className="odometer" data-count="912">
                    00
                  </span>
                  <span className="plus">+</span>
                </h3>
                <p>Best Awards Won</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src={countIcon3} alt="" />
                <h3>
                  <span className="odometer" data-count="370">
                    00
                  </span>
                  <span className="plus">+</span>
                </h3>
                <p>Classes Completed</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src={countIcon4} alt="" />
                <h3>
                  <span className="odometer" data-count="648">
                    00
                  </span>
                  <span className="plus">+</span>
                </h3>
                <p>Our Total Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
