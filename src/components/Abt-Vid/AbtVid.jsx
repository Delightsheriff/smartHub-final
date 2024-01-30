import React from 'react';
import vidImg from '../../assets/img/video/img-01.jpg';

const AbtVid = () => {
  return (
    <section className="video-area pt-120">
      <div className="container">
        <div className="video-image pos-rel">
          <img src={vidImg} alt="" />
          <a
            className="popup-video video-icon"
            href="https://www.youtube.com/watch?v=RHgbJr4pf1A"
          >
            <i className="far fa-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AbtVid;
