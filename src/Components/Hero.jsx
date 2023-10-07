import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import "../released.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-p4sz.onrender.com/Video"
      );
      const data = await response.json();
      setArray(data);
    };
    fetchProducts();
  },[]);
  return (
    <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 45000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
      array.map((item, index)=>{
        return(
      <SwiperSlide>
        <div className="flex justify-center w-full">
          <video
            className="w-screen -mt-16 md:mt-8  h-[300px] lg:h-[800px] lg:-mt-40"
            src={item?.link}
            alt={index.toString()}
            autoPlay
            loop
            muted
          />
        </div>
      </SwiperSlide>
        )
      })}
     
    </Swiper>
    </>
  );
};

export default Hero;
