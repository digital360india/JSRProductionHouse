import React from "react";

const Gallery = () => {
  return (
    <div className="w-full">
      <h1 className="text-6xl lg:text-7xl tracking-wide lg:tracking-widest text-black text-center py-20  ">
        GALLERY
      </h1>
      <img
        src="https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/p3-title-image-1.jpg "
        alt=""
        className="h-[500px] w-full object-cover"
      />
    </div>
  );
};

export default Gallery;
