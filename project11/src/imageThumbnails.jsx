import React from 'react';
import './ImageThumbnails.css';

const ImageThumbnails = ({ images, selectImage, currentIndex }) => {
  return (
    <div className="image-thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
          onClick={() => selectImage(index)}
        />
      ))}
    </div>
  );
};

export default ImageThumbnails;
