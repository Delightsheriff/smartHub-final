import brandImg1 from '../../assets/img/brand/brand-01.jpg';
import brandImg2 from '../../assets/img/brand/brand-02.jpg';
import brandImg3 from '../../assets/img/brand/brand-03.jpg';
import brandImg4 from '../../assets/img/brand/brand-04.jpg';
import brandImg5 from '../../assets/img/brand/brand-05.jpg';

const Brands = () => {
  return (
    <>
      <section className="brand-area pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="brand-active owl-carousel">
                <div className="single-brand">
                  <img src={brandImg1} alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src={brandImg2} alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src={brandImg3} alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src={brandImg4} alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src={brandImg5} alt="brand image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
