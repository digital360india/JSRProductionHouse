import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../released.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    // <div className="w-[100%]">
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex  justify-center w-full">
            <video
              className="w-[500px] h-[300px]  lg:w-full lg:h-[850px] "
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313672/tomp3.cc_-_JSR_PRODUCTION_HOUSE_Official_Trailer_SUBSCRIBE__480p_w4ocy0.mp4  "
              alt=""
              autoPlay
              loop
              muted
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex top-0 justify-center">
            <video
              className="w-[500px] h-[300px] lg:w-full lg:h-[850px]  "
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313592/JSR_Production_House_Title_Film_fm2mjr.mp4 "
              alt=""
              autoPlay
              loop
              muted
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex top-0 justify-center">
            <video
              className="w-[500px] h-[300px]  lg:w-full lg:h-[850px]"
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313436/WhatsApp_Video_2023-04-22_at_11.52.33_PM_um9zyh.mp4"
              alt=""
              autoPlay
              loop
              muted
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="flex relative top-0 justify-center w-[100%]">
        <video
          className="w-[350px] h-[200px]  lg:w-[1200px] lg:h-[600px] z-[-1] px-5"
          src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313592/JSR_Production_House_Title_Film_fm2mjr.mp4"
          alt=""
          autoPlay
          loop
          muted
        />
        
      </div>

      <div className="flex relative top-0 justify-center w-[100%]">
        <video
          className="w-[350px] h-[200px]  lg:w-[1200px] lg:h-[600px] z-[-1] px-5"
          src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313592/JSR_Production_House_Title_Film_fm2mjr.mp4"
          alt=""
          autoPlay
          loop
          muted
        />
        
      </div> */}
    </>
  );
};

export default Hero;
