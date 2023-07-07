import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../ratio.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Autoplay } from "swiper";
import Card from "./Card";
import { useAccordion } from "@material-tailwind/react";

const ReleasedProjects = () => {
  const [array, setArray] = useState([]);

  // const array = [

  //   {
  //     title: "KHAYALUN MA",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688557757/khayalun-ma_fjchpy.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Tarun Singh Rawat",
  //     DOP: "Prashant Kamboj",
  //     link: "https://youtu.be/w-GxPBP4piA",
  //   },
  //   {
  //     title: "SCENE GALAT",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688552377/SECNE-GALAT_vaugh1.jpg ",

  //     producer: "Tarun Singh Rawat",
  //     director: "Prashant Kamboj",
  //     DOP: "Suniel Kumar",
  //     link: "https://youtu.be/gXz1Kuu9hq4",
  //   },
  //   {
  //     title: "MERO DIL AAYGYI",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688558017/mero-dil-aaygyi_ybktn6.jpg ",

  //     producer: "Tarun Singh Rawat",
  //     director: "Tarun Singh Rawat",
  //     DOP: "Prashant Kamboj ",
  //     link: "https://youtu.be/XbeCM5eQmzM",
  //   },
  //   {
  //     title: "RUKHSAT",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688558262/rukhsat_jbs9e4.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Harsh Kumar",
  //     DOP: "Harish Negi",
  //     link: "https://youtu.be/b9b8nulTBeM",
  //   },
  //   {
  //     title: "72 HOURS",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688557574/72-hours_iy58yh.jpg",

  //     producer: "JS Rawat",
  //     director: "Avinash Dhyani",
  //     DOP: "Harish Negi",
  //     link: "https://youtu.be/ZmX47n8GuuM",
  //   },
  //   {
  //     title: "TU NAH SAHI",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688631526/tu-na-sahi_h5lofh.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Mayank Kalra",
  //     DOP: "Harish Negi",
  //     link: "https://youtu.be/HTxoxOWRhRo",
  //   },

  //   {
  //     title: "SPEED",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688631345/speed_tbbmfe.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Tarun Singh Rawat",
  //     DOP: "Harish Negi",
  //     link: "https://youtu.be/HtTxJN4-G3M",
  //   },
  //   {
  //     title: "BARIRI PIYA",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688631013/bairi-piya_c0brqe.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Karan Arora",
  //     DOP: "Harish Negi",
  //     link: "https://youtu.be/VdtLg-a8iyg",
  //   },
  //   {
  //     title: "KUYEDI",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688631151/kuyedi_e5wvkq.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Tarun Singh Rawat",
  //     DOP: "Deepankar Ghildiyal ",
  //     link: "https://youtu.be/EC1bYmTSkvk",
  //   },

  //   {
  //     title: "BABY BAS KAR",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688630810/baby-bas-kar_rutogy.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Karan Arora",
  //     DOP: "Harish Negi",
  //     link: "https://youtu.be/SN1KfPk4-yQ",
  //   },
  // ];
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://jsr-backend.onrender.com/RProject");
      const data = await response.json();
      console.log(data, "=>>>");
      setArray(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <div className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] ">
          RELEASED PROJECTS
        </div>
        <div className="md:flex hidden justify-center gap-5 pt-20 flex-wrap"></div>
      </div>

      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            enabled: true,
            delay: 4500,
          }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <div class="swiper-button-prev"></div>
          {array.map((item, index) => {
            return (
              <SwiperSlide className="pt-10 lg:pt-20 px-7 lg:px-0">
                <Card key={index} data={item} />
              </SwiperSlide>
            );
          })}
          <div class="swiper-button-next"></div>
        </Swiper>
      </>

      {/* <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#A0A0A0",
            "--swiper-pagination-color": "#A0A0A0",
          }}
          zoom={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper md:hidden pt-10"
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Card />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Card />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Card />
            </div>
          </SwiperSlide>
        </Swiper>
      </> */}
    </>
  );
};

export default ReleasedProjects;
