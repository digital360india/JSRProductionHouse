import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Xyz = () => {
  const images = [
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  ];

  return (
    <>
      <PhotoProvider>
        <div className="foo">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img className="w-32" src={item} alt="" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
};

export default Xyz;
