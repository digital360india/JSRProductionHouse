import React, { useEffect, useState } from "react";
import "../Gallery/Gallery.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = (props) => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/Gallery"
      );
      const data = await response.json();
      console.log(data, " gallery =>>>");
      setGallery(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-10 lg:pb-20">
        GALLERY
      </h1>
      <div className="bg-black">
        <PhotoProvider>
          <div className="gallery__div_container">
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={1} src={gallery?.img1}>
                  <img src={gallery?.img1} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={2} src={gallery?.img2}>
                  <img className="" src={gallery?.img2} alt=""></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={3} src={gallery?.img3}>
                  <img src={gallery?.img3} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={4} src={gallery?.img4}>
                  <img className="" src={gallery?.img4} alt=""></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={5} src={gallery?.img5}>
                  <img src={gallery?.img5} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={6} src={gallery?.img6}>
                  <img className="" src={gallery?.img6} alt=""></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={7} src={gallery?.img7}>
                  <img src={gallery?.img7} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={8} src={gallery?.img8}>
                  <img className="" src={gallery?.img8} alt=""></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={9} src={gallery?.img9}>
                  <img src={gallery?.img9} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={10} src={gallery?.img10}>
                  <img className="" src={gallery?.img10} alt=""></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={11} src={gallery?.img11}>
                  <img src={gallery?.img11} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={12} src={gallery?.img12}>
                  <img className="" src={gallery?.img12} alt=""></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView key={13} src={gallery?.img13}>
                  <img src={gallery?.img13} alt=""></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView key={14} src={gallery?.img14}>
                  <img className="" src={gallery?.img14} alt=""></img>
                </PhotoView>
              </div>
            </div>
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
