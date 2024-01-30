import ftIcon1 from '../../assets/img/icon/ft01.png';
import ftIcon2 from '../../assets/img/icon/ft02.png';
import ftIcon3 from '../../assets/img/icon/ft03.png';
import ftBlog1 from '../../assets/img/blog/footer-post/footer-post01.jpg';
import ftBlog2 from '../../assets/img/blog/footer-post/footer-post02.jpg';

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-area"
        data-background="assets/img/bg/footer-bg.jpg"
      >
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-wrapper">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-top-single">
                    <div className="footer-top-icon">
                      <img src={ftIcon1} alt="" />
                    </div>
                    <div className="footer-top-content">
                      <h5>Give us a Call</h5>
                      <span>+962-478-123-4567</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-top-single">
                    <div className="footer-top-icon">
                      <img src={ftIcon2} alt="" />
                    </div>
                    <div className="footer-top-content">
                      <h5>Send us a Message</h5>
                      <span>kinterschoo07@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-top-single footer-top-single-2">
                    <div className="footer-top-icon">
                      <img src={ftIcon3} alt="" />
                    </div>
                    <div className="footer-top-content">
                      <h5>Visit our Location</h5>
                      <span>07 Suitland Street 120 USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-100 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>About Kinter</h3>
                  <p>
                    Monotne deplos copertve chanva andng crorate Qhanin Unique
                    Qnderwhe Premum Convere With Uheng Mutmed Nquel Undehee
                    Mandnge theme Qhann Unqu Qndewhe Premum Converenc With
                    Aheing Mutmeda Nquel Undehele
                  </p>
                  <div className="footer-social">
                    <h4>Follow us :</h4>
                    <a href="#!">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!">
                      <i className="fas fa-rss"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-dribbble"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>Recent Blog Posts</h3>
                  <div className="footer-post">
                    <div className="fp-single">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src={ftBlog1} alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <span>
                          <i className="far fa-calendar-alt"></i> 24th March
                          2021
                        </span>
                        <h5>
                          <a href="blog-details.html">
                            Why children need a Healthy Environment
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="fp-single">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src={ftBlog2} alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <span>
                          <i className="far fa-calendar-alt"></i> 24th March
                          2022
                        </span>
                        <h5>
                          <a href="blog-details.html">
                            Planting Seeds in the Hearts of Preschoolers
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>Newsletter Subscription</h3>
                  <p>
                    Enter your email and get latest updates and offers subscribe
                    us
                  </p>
                  <form action="#!">
                    <input type="text" placeholder="Enter your email" />
                    <button className="thm-btn">Subscribe Now!</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-30 pb-30">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-4">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#!">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <span>Facebook</span>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <span>Google Plus</span>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <span>Twitter</span>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <span>Pinterest</span>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <span>Linkedin</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-8">
              <div className="copyright-text">
                <p>
                  {' '}
                  &copy; 2022 kinter Designed by{' '}
                  <a href="https://github.com/Delightsheriff" target="_blank">
                    AMADI-SHERIFF DELIGHT
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
