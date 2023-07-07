// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../herostyles.css";

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
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex top-0 justify-center ">
            <video
              className="w-[350px] h-[200px]  lg:w-[1200px] lg:h-[600px] z-[-1] px-5"
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313672/tomp3.cc_-_JSR_PRODUCTION_HOUSE_Official_Trailer_SUBSCRIBE__480p_w4ocy0.mp4  "
              alt=""
              autoPlay
              loop
              muted
            />
            {/* <h1 className="absolute right-[45%]">JSR PRODUCTION HOUSE</h1> */}
            {/* </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex relative top-0 justify-center w-[100%]">
            <video
              className="w-[350px] h-[200px]  lg:w-[100%] lg:h-[600px] z-[-1] px-5"
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313592/JSR_Production_House_Title_Film_fm2mjr.mp4"
              alt=""
              autoPlay
              loop
              muted
            />
            {/* <h1 className="absolute right-[45%]">JSR PRODUCTION HOUSE</h1> */}
            {/* </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex relative top-0 justify-center w-[100%]">
            <video
              className="w-[350px] h-[200px]  lg:w-[100%] lg:h-[600px] z-[-1] px-5"
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1682313592/JSR_Production_House_Title_Film_fm2mjr.mp4"
              alt=""
              autoPlay
              loop
              muted
            />
            {/* <h1 className="absolute right-[45%]">JSR PRODUCTION HOUSE</h1> */}
            {/* </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
