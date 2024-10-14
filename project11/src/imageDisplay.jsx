import React from 'react';

const ImageDisplay = ({ currentImage }) => {
  return (
    <img
      src={currentImage}
      alt="Scenery"
      className="image-viewer__image"
    />
  );
};

export default ImageDisplay;
