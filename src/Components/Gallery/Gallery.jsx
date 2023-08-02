import React, { useEffect } from "react";
import "../Gallery/Gallery.css";

const Gallery = (props) => {
  return (
    <div className="bg-black">
      {/* <h1 className=" text-[#D5699A] text-center text-[22px] lg:text-[30px] pt-4">
        Join The
      </h1>
      <h1 className="text-white text-center text-[28px] lg:text-[40px] serifDisplay">
        NONABERRRY SQUAD!
      </h1> */}
      <div className="gallery__div_container">
        <div className="">
          {" "}
          <img
            className="w-80 h-72 m-2 object-cover "
            src="/Images/jsr1.png"
            alt=""
          ></img>
          <img
            className="w-80 h-52 object-cover"
            src="/Images/jsr2.png"
            alt=""
          ></img>
        </div>
        <div className="">
          {" "}
          <img
            className="w-96 h-52 mr-9 object-cover"
            src="/Images/jsr3.png"
            alt=""
          ></img>
          <img
            className="w-50 h-72 m-2 object-cover  "
            src="/Images/jsr4.png"
            alt=""
          ></img>
        </div>

        {/* <div className="gallery__col">
          <div className="gallery__row1">
            <img src="/Images/jsr1.png" alt=""></img>
          </div>
          <div className="gallery__row2">
            <img className="w-[300px] h-72" src="/Images/jsr2.png" alt=""></img>
          </div>
          <div className="gallery__row1">
            <img src="/Images/jsr3.png" alt=""></img>
          </div>
          <div className="gallery__row2">
            <img src="/Images/jsr4.png" alt=""></img>
          </div>
        </div>
        <div className="gallery__col">
          <div className="gallery__row1">
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
            <img src="/Images/jsr8.png" alt=""></img>
          </div>
        </div>

        <div className="gallery__col">
          <div className="gallery__row1">
            <img src="/Images/jsr9.png" alt=""></img>
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
            <img src="/Images/jsr12.png" alt=""></img>
          </div>
        </div>

        <div className="gallery__col">
          <div className="gallery__row1">
            <img src="/Images/nona-3.png" alt=""></img>
          </div>
          <div className="gallery__row2">
            <img src="/Images/nona-4.png" alt=""></img>
          </div>
        </div>

        <div className="gallery__col">
          <div className="gallery__row1">
            <img src="/Images/nona-5.png" alt=""></img>
          </div>
          <div className="gallery__row2">
            <img src="/Images/nona-6.png" alt=""></img>
          </div>
        </div>

        <div className="gallery__col">
          <div className="gallery__row1">
            <img src="/Images/nona-7.png" alt=""></img>
          </div>
          <div className="gallery__row2">
            <img src="/Images/nona-8.png" alt=""></img>
          </div>
        </div>

        <div className="gallery__col">
          <div className="gallery__row1">
            <img src="/Images/nona-9.png" alt=""></img>
          </div>
          <div className="gallery__row2">
            <img src="/Images/nona-10.png" alt=""></img>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
