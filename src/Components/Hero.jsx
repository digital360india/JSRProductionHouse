import { Swiper, SwiperSlide } from "swiper/react";
import { Cloudinary } from '@cloudinary/base';
import { AdvancedVideo } from '@cloudinary/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import "../released.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dsea9eyps' } });
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-p4sz.onrender.com/Video"
      );
      const data = await response.json();
      console.log(data);
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
        <AdvancedVideo
  controls={false}
  className="object-cover w-screen h-[70vh]"
  autoPlay
  muted
  cldVid={cld.video('ji6qdcwev4ptfvxdzhkl')}
/>
      </SwiperSlide>
        )
      }
      )}
     
    </Swiper>
    </>
  );
};

export default Hero;
