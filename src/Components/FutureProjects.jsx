// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../future.css";

// import required modules
import { Pagination } from "swiper";
import SkeletonCard from "./SkeletonCard";

const FutureProjects = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <>
      <div>
        <div className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px] lg:tracking-[6px] pb-10 lg:pb-20">
          FUTURE PROJECTS
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
        {[1, 2, 3, 4].map((index) => (
          <SwiperSlide key={index}>
            <SkeletonCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FutureProjects;
