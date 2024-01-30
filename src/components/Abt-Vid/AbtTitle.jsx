import React from 'react';
import './AbtTitle.css';

const AbtTitle = ({ title, liContent }) => {
  return (
    <>
      <div
        className="page-title-area section-notch pt-170 pb-170"
        data-background="assets/img/bg/page-title-bg.jpg"
      >
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title">
                <h2>{title}</h2>
                <div className="breadcrumb-list text-left">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>{liContent}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbtTitle;
