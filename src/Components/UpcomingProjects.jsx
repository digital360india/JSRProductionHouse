import Card from "./Card";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper";

const UpcomingProjects = () => {
  const array = [
    {
      title: "AGENT ONE",
      img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688559142/AGENT-1_h2ftpb.jpg",

      producer: "Tarun Singh Rawat",
      director: "Tarun Singh Rawat",

      link: "https://youtu.be/w-GxPBP4piA",
    },
    {
      title: "CHHAL",
      img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688559334/CHHAL_jadugq.jpg",

      producer: "Tarun Singh Rawat",
      director: "Yogesh Vats",

      link: "https://youtu.be/gXz1Kuu9hq4",
    },
    {
      title: "MUSSORIIE BOYZ",
      img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688559458/MB_q5sspe.jpg ",

      producer: "Tarun Singh Rawat",
      director: "Hriday V Shetty",

      link: "https://youtu.be/XbeCM5eQmzM",
    },
    // {
    //   title: "72 HOURS : MARTYR WHO NEVER DIED",
    //   img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688557574/72-hours_iy58yh.jpg",

    //   producer: "Tarun Singh Rawat",
    //   director: "Harsh Kumar",

    //   link: "https://youtu.be/b9b8nulTBeM",
    // },
  ];

  return (
    <>
      <div className="">
        <div className="text-center pt-10 lg:pt-28 z-30 tracking-[2px]  lg:tracking-[6px]  ">
          <div className=" text-2xl md:text-lg lg:text-xl pb-2 lg:pb-5">
            JSR PRODUCTION HOUSE
          </div>
          <div className="text-4xl md:text-4xl lg:text-7xl ">
            UPCOMING PROJECTS
          </div>
        </div>
        <div className="md:flex hidden  justify-center gap-5 pt-20 flex-wrap">
          {array.map((item, index) => {
            // console.log(item);
            return <Card key={index} data={item} />;
          })}

          {/* <Card />
          <Card />
          <Card /> */}
        </div>
        <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
};

export default UpcomingProjects;
