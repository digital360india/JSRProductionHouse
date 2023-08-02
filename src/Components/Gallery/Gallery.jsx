import React, { useEffect } from "react";
import "../Gallery/Gallery.css";

const Gallery = (props) => {
  return (
    <>
      <h1 className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-10 lg:pb-20">
        GALLERY
      </h1>
      <div className="bg-black">
        {/* <h1 className=" text-[#D5699A] text-center text-[22px] lg:text-[30px] pt-4">
        Join The
      </h1>
      <h1 className="text-white text-center text-[28px] lg:text-[40px] serifDisplay">
        NONABERRRY SQUAD!
      </h1> */}
        <div className="gallery__div_container">
          <div className="gallery__col">
            <div className="gallery__row1">
              <img src="/Images/jsr1.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img className="" src="/Images/jsr2.png" alt=""></img>
            </div>
          </div>

          <div className="gallery__col">
            <div className="gallery__row1 ">
              <img src="/Images/jsr3.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img src="/Images/jsr4.png" alt=""></img>
            </div>
          </div>
          <div className="gallery__col">
            <div className="gallery__row1">
              <img src="/Images/jsr5.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img src="/Images/jsr6.png" alt=""></img>
            </div>
          </div>

          <div className="gallery__col">
            <div className="gallery__row1">
              <img src="/Images/jsr7.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img src="/Images/jsr12.png" alt=""></img>
            </div>
          </div>

          <div className="gallery__col">
            <div className="gallery__row1">
              <img src="/Images/jsr8.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img src="/Images/jsr10.png" alt=""></img>
            </div>
          </div>

          <div className="gallery__col">
            <div className="gallery__row1">
              <img src="/Images/jsr11.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img src="/Images/jsr9.png" alt=""></img>
            </div>
          </div>
          <div className="gallery__col">
            <div className="gallery__row1">
              <img src="/Images/jsr11.png" alt=""></img>
            </div>
            <div className="gallery__row2">
              <img src="/Images/jsr9.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
