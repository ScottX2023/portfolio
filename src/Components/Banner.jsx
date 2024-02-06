import React from 'react';
import "../Sass/banner.scss";

function Banner({ imageUrl, title }) {
  return (
    <div className="banner">
      <img className='banner-img' src={imageUrl} alt={title} />
    </div>
  );
}

export default Banner;
