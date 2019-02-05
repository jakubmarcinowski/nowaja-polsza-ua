import React from 'react';
import Img from 'gatsby-image';

const ImgValidator = ({ img }) => {
  if (img === undefined || img === null) {
    return <div>No image</div>;
  }
  return <Img alt={img.title} fluid={img.fluid} />;
};

export default ImgValidator;
