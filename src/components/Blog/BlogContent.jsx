import React from 'react';
import blogImg1 from '../../assets/img/blog/blog01.jpg';
import blogImg2 from '../../assets/img/blog/blog02.jpg';
import blogImg3 from '../../assets/img/blog/blog03.jpg';
import blogWid1 from '../../assets/img/blog/blog-widget/widget-post01.jpg';

const BlogContent = () => {
  return (
    <>
      <section className="blog-content-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-wrapper mb-30">
                <article className="post-item format-standard mb-30">
                  <div className="post-thumb">
                    <a href="blog-details.html">
                      <img src={blogImg2} alt="blog" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-meta mb-20">
                      <span>
                        <a href="#!">
                          <i className="far fa-calendar-alt"></i> 27 December
                          2020
                        </a>
                      </span>
                      <span>
                        <a href="#!">
                          <i className="far fa-user"></i> Kinter
                        </a>
                      </span>
                      <span>
                        <a href="#!">
                          <i className="far fa-comments"></i> 24 Comments
                        </a>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <a href="blog-details.html">
                        Planting Seeds in the Hearts of Preschoolers
                      </a>
                    </h4>
                    <div className="post-text">
                      <p>
                        Completely deploy focused supply chains rather than
                        viraling an e-services productivate pandemc experiences
                        via interoperable niche markets. Dramatically
                        incentivize superior functionalities with Rapidiously
                        evolve impactful core competencies without web-enabled
                        vortals
                      </p>
                    </div>
                    <div className="read-more mt-20">
                      <a className="thm-btn" href="blog-details.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
                <article className="post-item format-gallery mb-30">
                  <div className="gallery-post-active owl-carousel">
                    <div className="post-thumb">
                      <img src={blogImg1} alt="" />
                    </div>
                    <div className="post-thumb">
                      <img src={blogImg1} alt="" />
                    </div>
                    <div className="post-thumb">
                      <img src={blogImg1} alt="" />
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta mb-20">
                      <span>
                        <a href="#!">
                          <i className="far fa-calendar-alt"></i> 27 December
                          2020
                        </a>
                      </span>
                      <span>
                        <a href="#!">
                          <i className="far fa-user"></i> Kinter
                        </a>
                      </span>
                      <span>
                        <a href="#!">
                          <i className="far fa-comments"></i> 24 Comments
                        </a>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <a href="blog-details.html">
                        Why children need a Healthy Environment
                      </a>
                    </h4>
                    <div className="post-text">
                      <p>
                        Completely deploy focused supply chains rather than
                        viraling an e-services productivate pandemc experiences
                        via interoperable niche markets. Dramatically
                        incentivize superior functionalities with Rapidiously
                        evolve impactful core competencies without web-enabled
                        vortals
                      </p>
                    </div>
                    <div className="read-more mt-20">
                      <a className="thm-btn" href="blog-details.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
                <article className="post-item format-video mb-30">
                  <div className="post-thumb post-video">
                    <img src={blogImg3} alt="blog" />
                    <a
                      className="popup-video video-icon"
                      href="https://www.youtube.com/watch?v=RHgbJr4pf1A"
                    >
                      <i className="far fa-play"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-meta mb-20">
                      <span>
                        <a href="#!">
                          <i className="far fa-calendar-alt"></i> 27 December
                          2020
                        </a>
                      </span>
                      <span>
                        <a href="#!">
                          <i className="far fa-user"></i> Kinter
                        </a>
                      </span>
                      <span>
                        <a href="#!">
                          <i className="far fa-comments"></i> 24 Comments
                        </a>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <a href="blog-details.html">
                        Full-day kindergarten in Alberta another.
                      </a>
                    </h4>
                    <div className="post-text">
                      <p>
                        Completely deploy focused supply chains rather than
                        viraling an e-services productivate pandemc experiences
                        via interoperable niche markets. Dramatically
                        incentivize superior functionalities with Rapidiously
                        evolve impactful core competencies without web-enabled
                        vortals
                      </p>
                    </div>
                    <div className="read-more mt-20">
                      <a className="thm-btn" href="blog-details.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
                <div className="pagination pt-20 mb-30">
                  <ul>
                    <li>
                      <a href="#!">
                        <i className="far fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#!">1</a>
                    </li>
                    <li>
                      <a href="#!">2</a>
                    </li>
                    <li>
                      <a href="#!">3</a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="far fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget mb-30">
                  <div className="search-form">
                    <input type="text" placeholder="Search Here..." />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Post Category</h2>
                  <ul className="widget-wrapper">
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>
                          Themeforest
                        </span>
                        <span>05</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>
                          Codecanyon
                        </span>
                        <span>27</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>
                          Graphicriver
                        </span>
                        <span>07</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Photodune
                        </span>
                        <span>09</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Videohive
                        </span>
                        <span>08</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>3docean
                        </span>
                        <span>25</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>WordPress
                        </span>
                        <span>20</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Joomla
                        </span>
                        <span>30</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Most Popular Post</h2>
                  <ul className="widget-wrapper widget-post">
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <a href="blog-details.html">
                          <img src={blogWid1} alt="blog" />
                        </a>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <a href="blog-details.html">
                            Why children need a Healthy Environment
                          </a>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <a href="blog-details.html">
                          <img src={blogWid1} alt="blog" />
                        </a>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <a href="blog-details.html">
                            Why children need a Healthy Environment
                          </a>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <a href="blog-details.html">
                          <img src={blogWid1} alt="blog" />
                        </a>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <a href="blog-details.html">
                            Why children need a Healthy Environment
                          </a>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <a href="blog-details.html">
                          <img src={blogWid1} alt="blog" />
                        </a>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <a href="blog-details.html">
                            Why children need a Healthy Environment
                          </a>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Archives</h2>
                  <ul className="widget-wrapper">
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>January
                        </span>
                        <span>2020</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>February
                        </span>
                        <span>2019</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>March
                        </span>
                        <span>2018</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>August
                        </span>
                        <span>2017</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>September
                        </span>
                        <span>2016</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>October
                        </span>
                        <span>2015</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>November
                        </span>
                        <span>2014</span>
                      </a>
                    </li>
                    <li>
                      <a className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>December
                        </span>
                        <span>2013</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Popular Tags</h2>
                  <div className="tagcloud">
                    <a className="sidebar-tag" href="#!">
                      envato
                    </a>
                    <a className="sidebar-tag" href="#!">
                      themeforest
                    </a>
                    <a className="sidebar-tag" href="#!">
                      school
                    </a>
                    <a className="sidebar-tag" href="#!">
                      videohive
                    </a>
                    <a className="sidebar-tag" href="#!">
                      kids
                    </a>
                    <a className="sidebar-tag" href="#!">
                      3docean
                    </a>
                    <a className="sidebar-tag" href="#!">
                      envato
                    </a>
                    <a className="sidebar-tag" href="#!">
                      themeforest
                    </a>
                    <a className="sidebar-tag" href="#!">
                      kids
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;
