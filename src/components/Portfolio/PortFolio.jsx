import Port1 from '../../assets/img/portfolio/port01.jpg';
import Port2 from '../../assets/img/portfolio/port02.jpg';
import Port3 from '../../assets/img/portfolio/port03.jpg';
import Port4 from '../../assets/img/portfolio/port04.jpg';
import Port5 from '../../assets/img/portfolio/port05.jpg';
import Port6 from '../../assets/img/portfolio/port06.jpg';

const PortFolio = () => {
  return (
    <>
      <div className="portfolio-area pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-50">
                <h2 className="title">Our School Gallery</h2>
                <p>
                  Here is what you can expect from a house cleaning from a Handy
                  professional. Download the app to share further cleaning
                  details and instructions!
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <ul className="portfolio-menu">
                <li className="active" data-filter="*">
                  see all
                </li>
                <li data-filter=".cat1">Branding</li>
                <li data-filter=".cat2">Creative</li>
                <li data-filter=".cat3">Illustration</li>
                <li data-filter=".cat4">Photoshgop</li>
              </ul>
            </div>
          </div>
          <div className="row grid text-center">
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat3 cat4 cat2">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src={Port1} alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href={Port1}>
                      <i className="icon fal fa-plus"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>Product Name Here</h3>
                  </a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat1 cat2 cat4">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src={Port2} alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href={Port2}>
                      <i className="icon fal fa-plus"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>Product Name Here</h3>
                  </a>
                  <span>By:Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat2 cat3 cat1">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src={Port3} alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href={Port3}>
                      <i className="icon fal fa-plus"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>Product Name Here</h3>
                  </a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat1 cat2 cat4">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src={Port4} alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href={Port4}>
                      <i className="icon fal fa-plus"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>Product Name Here</h3>
                  </a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat3 cat1 cat4">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src={Port5} alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href={Port5}>
                      <i className="icon fal fa-plus"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>Product Name Here</h3>
                  </a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat3 cat4 cat2">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src={Port6} alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href={Port6}>
                      <i className="icon fal fa-plus"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>Product Name Here</h3>
                  </a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolio;
