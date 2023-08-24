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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 25000,
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
              className="w-[500px] h-[300px] md:w-full  lg:w-full lg:h-[900px] "
              src="https://res.cloudinary.com/djb3n17c0/video/upload/v1691128321/JSR_MOUNTAIN_INTRO_RE-EDITED_2k_ajttgj.mp4 "
              alt=""
              autoPlay
              loop
              muted
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
