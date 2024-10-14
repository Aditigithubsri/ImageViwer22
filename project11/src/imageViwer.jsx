import React, { useState } from 'react';
import ImageDisplay from './imageDisplay';
import ImageThumbnails from './imageThumbnails';
import './App.css';

const ImageViewer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-viewer">
      <ImageDisplay currentImage={images[currentIndex]} />
      <ImageThumbnails images={images} selectImage={selectImage} currentIndex={currentIndex} />
    </div>
  );
};

export default ImageViewer;
