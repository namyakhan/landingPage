import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-4">
      <img
        src="/desktop/image-gallery-milkbottles.jpg"
        alt="milkbottles-image"
      />
      <img src="/desktop/image-gallery-orange.jpg" alt="orange-image" />
      <img src="/desktop/image-gallery-cone.jpg" alt="cone-image" />
      <img src="/desktop/image-gallery-sugarcubes.jpg" alt="sugarcubes-image" />
    </div>
  );
};

export default Gallery;
