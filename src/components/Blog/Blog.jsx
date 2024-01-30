import blogImg1 from '../../assets/img/blog/blog-01.jpg';
import blogImg2 from '../../assets/img/blog/blog-02.jpg';
import blogImg3 from '../../assets/img/blog/blog-03.jpg';

const Blog = () => {
  return (
    <>
      <section className="blog-area section-bg-three section-notch pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title section-title-white text-center mb-55">
                <h2 className="title">Our Latest News</h2>
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
              <div className="blog-item mb-30">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img src={blogImg1} alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta ul_li">
                    <span>
                      <i className="far fa-user"></i>by <a href="#!">Wasim</a>
                    </span>
                    <span>
                      <i className="far fa-calendar-alt"></i>12th March 2021
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Why children need a Healthy Environment
                    </a>
                  </h4>
                  <a className="blog-btn" href="blog-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="blog-item mb-30">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img src={blogImg2} alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="far fa-user"></i>by <a href="#!">Wasim</a>
                    </span>
                    <span>
                      <i className="far fa-calendar-alt"></i>18th March 2021
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Planting Seeds in the Hearts of Preschoolers
                    </a>
                  </h4>
                  <a className="blog-btn" href="blog-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="blog-item mb-30">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img src={blogImg3} alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="far fa-user"></i>by <a href="#!">Wasim</a>
                    </span>
                    <span>
                      <i className="far fa-calendar-alt"></i>16th March 2021
                    </span>
                  </div>
                  <h4 className="blog-title">
                    <a href="blog-details.html">
                      Full-day kindergarten in Alberta another.
                    </a>
                  </h4>
                  <a className="blog-btn" href="blog-details.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
