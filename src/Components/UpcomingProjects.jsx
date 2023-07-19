import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../future.css";

// import required modules
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

const UpcomingProjects = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/Upcoming"
      );
      const data = await response.json();
      console.log(data, "=>>>");
      setLoading(false);
      setArray(data);
    };

    const timeOutId = setTimeout(async () => {
      fetchProducts();
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, []);
  // const array = [
  //   {
  //     title: "AGENT ONE",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688559142/AGENT-1_h2ftpb.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Tarun Singh Rawat",

  //     link: "https://youtu.be/w-GxPBP4piA",
  //   },
  //   {
  //     title: "CHHAL",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688559334/CHHAL_jadugq.jpg",

  //     producer: "Tarun Singh Rawat",
  //     director: "Yogesh Vats",

  //     link: "https://youtu.be/gXz1Kuu9hq4",
  //   },
  //   {
  //     title: "MUSSORIIE BOYZ",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688559458/MB_q5sspe.jpg ",

  //     producer: "Tarun Singh Rawat",
  //     director: "Hriday V Shetty",

  //     link: "https://youtu.be/XbeCM5eQmzM",
  //   },
  //   // {
  //   //   title: "72 HOURS : MARTYR WHO NEVER DIED",
  //   //   img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1688557574/72-hours_iy58yh.jpg",

  //   //   producer: "Tarun Singh Rawat",
  //   //   director: "Harsh Kumar",

  //   //   link: "https://youtu.be/b9b8nulTBeM",
  //   // },
  // ];

  return (
    <>
      <div className="">
        <div className="text-center pt-10 lg:pt-28 z-30 tracking-[2px]  lg:tracking-[6px]  ">
          <div className=" text-2xl md:text-lg lg:text-xl pb-2 lg:pb-5">
            JSR PRODUCTION HOUSE
          </div>
          <div className="text-4xl md:text-4xl lg:text-7xl pb-10 lg:pb-20">
            UPCOMING PROJECTS
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper p-2"
      >
        {loading
          ? [1, 2, 3, 4].map((index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))
          : array.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card data={item} />
                </SwiperSlide>
              );
            })}
      </Swiper>
      {/* <>
        {array.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </> */}
    </>
  );
};

export default UpcomingProjects;
