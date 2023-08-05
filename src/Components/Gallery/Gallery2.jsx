import React, { useEffect, useState } from "react";
import "../Gallery/Gallery.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery2 = (props) => {
  const [gallery, setGallery] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          "https://jsr-backend-x7rr.onrender.com/Gallery"
        );
        const data = await response.json();
        console.log(data, " gallery =>>>");
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, []);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const galleryImages = [
    gallery?.img1,
    gallery?.img2,
    gallery?.img3,
    gallery?.img4,
    gallery?.img5,
    gallery?.img6,
    gallery?.img7,
    gallery?.img8,
    gallery?.img9,
    gallery?.img10,
    gallery?.img11,
    gallery?.img12,
    gallery?.img13,
    gallery?.img14,
  ];

  return (
    <>
      <h1 className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px] lg:tracking-[6px] pb-10 lg:pb-20">
        GALLERY
      </h1>
      <div className="bg-black">
        <div className="gallery__div_container">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery__col">
              <div
                className="gallery__row1"
                onClick={() => openLightbox(index)}
              >
                <img src={image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
          prevSrc={
            galleryImages[
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            ]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
        />
      )}
    </>
  );
};

export default Gallery2;
