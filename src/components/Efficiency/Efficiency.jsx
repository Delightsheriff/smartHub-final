import React from 'react';
import effImg from '../../assets/img/about/about-02.jpg';

const Efficiency = () => {
  return (
    <>
      <section className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center mt-none-25">
            <div className="col-lg-6">
              <div className="about-image mt-25">
                <img src={effImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-two pl-50 mt-25">
                <div className="section-title mb-30">
                  <h2 className="title">
                    With Efficiency to More Opportunities
                  </h2>
                  <p>
                    Why I say old chap that is spiffing bodge, blag pardon me
                    mufty Oxford butty bubble and squeak wind up, brown bread
                    the full monty bloke ruddy cras tickety-boo squiffy, blag
                    pardon me mufty Oxford butty bubble and squeak wind up
                  </p>
                </div>
                <ul className="about-features">
                  <li>Best Learning School for Kids</li>
                  <li>Indoor/Outdoor Games for Little Kids</li>
                  <li>Professional & Qualified Teacher</li>
                  <li>Indoor/Outdoor Games for Little Kids</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Efficiency;
