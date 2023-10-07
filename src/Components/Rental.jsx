import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
Aos.init({
  duration: 1200,
});

const Rental = () => {
  const [rentals, setRentals] = useState([]);

  async function get() {
    try {
      const { data } = await axios.get(
        "https://jsr-backend-p4sz.onrender.com/Rentals"
      );
      // console.log("data[0]",data[0]);
      setRentals(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      {/* <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-20">
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
            <h1>ARRI</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693310136/IMG20230601130923_hakz8v.jpg"
              alt=""
              className="w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
            <h1>SONY</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693310131/sony-venice2-kit_ffsb3h.jpg"
              alt=""
              className="w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
        </div>
        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white pt-5 pb- lg:pt-14 lg:pb-16">
          Lighting System
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
          <div className="text-xl lg:text-3xl text-center  bg-black text-white pt-5 ">
            <h1>APURTURE NOVA</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693374607/aputure-india-tiyana-nova-p300c-003-1000x667-1_vkw37k.webp"
              alt=""
              className="w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 ">
            <h1>ARRI SKYPANEL</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693374062/Screenshot-2023-05-09-at-1.17.04-PM_syjghk.jpg"
              alt=""
              className="object-cover w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>GODOX LED</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693374236/P600Bi-lifestyle-image-13-1280x720_ed3zdp.webp"
              alt=""
              className="w-[320px] h-[300px]object-cover md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
        </div>

        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white  pt-10 pb-5 lg:pt-24 lg:pb-10 ">
          Accomodations
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-20">
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 ">
            <h1>JSR CONTINENTAL</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693375377/hotel-jsr-continental_nk20b9.jpg"
              alt=""
              className="object-cover w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>JSR INN</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693375380/Entrance_zjsfv0.jpg"
              alt=""
              className="w-[320px] h-[300px] object-fill md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
        </div>

        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white  pt-10 pb-5 lg:pt-24 lg:pb-10 ">
          MISCELLANEOUS{" "}
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 ">
        
        <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>STUDIOS</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693376484/WhatsApp_Image_2023-08-01_at_16.25.29_ffcdes.jpg"
              alt=""
              className="w-[320px] h-[300px] object-fill md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>LUXURY CARS</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693658575/f_ppskq9.png"
              alt=""
              className="w-[320px] object-fill h-[300px]  md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white space-y-5 pt-5 ">
            <h1>VANITY VANS{" "}</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693376238/kerala_caravan_tourism_a3tucu.jpg"
              alt=""
              className="object-cover w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
         
         
        </div>
      </div> */}

      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        {/* <h1 className="text-2xl lg:text-6xl text-start bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1> */}
        {rentals.map((item, index) => {
          return (
            <>
              <h3
                key={index}
                className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6"
              >
                {item?.heading}
              </h3>
              <p className="font2 opacity-40 pb-10">{item?.content}</p>
            </>
          );
        })}
        {/* <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
          Professional cinema cameras, equipments and lenses
        </h3>
        <p className="font2 opacity-60 pb-10">
          At JSR, we take immense pride in providing top-tier equipment to fuel
          your creative journey. Unleash your creativity with cutting-edge
          technology. Our lineup boasts the latest in camera technology,
          ensuring that you have the tools you need to capture exactly what you
          desire. At JSR, we offer professional cameras from renowned brands
          like Arri, Red, Sony FX and Venice series, Canon, and Lumix. These
          cameras are tailored to meet your demands for excellence. In addition
          to cameras, we provide a variety of high-quality lenses, including
          Ultra Prime, Master Prime, Supreme Prime, Signature Prime, Cooke S4i
          and S7i, Pancro Classic, Xeen Prime, CP2, CP3 high-speed lenses, Sigma
          lenses, and many others.
        </p>
        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
          Professional lighting system and gears
        </h3>
        <p className="font2 opacity-60 pb-10">
          We understand that lighting is a fundamental element in the art of
          filmmaking and can make or break the visual quality of a film. That's
          why we offer a comprehensive range of lighting equipment, along with a
          team of experienced lighting technicians who are dedicated to crafting
          the perfect ambiance for your project. Our production house provides
          filmmakers with top-notch professional lighting solutions, including
          systems from Arri, Film Gear, Godox, and Aputure. Our offerings range
          from PAR lighting and SkyPanels to small RGB kits and much more.
        </p>

        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
          Renting The Studio
        </h3>
        <p className="font2 opacity-60 pb-10">
          Are you in search of the perfect studio space for your creative
          endeavors? Look no further! JSR Production House is your one-stop
          solution. We offer professional color grading setups, VFX, Unreal
          Engine-based virtual production setups with anti-latency sensors and
          virtual walls, as well as music production setups. Our equipment range
          includes Pro Tools, Universal Audio, DaVinci Resolve, BaseLight, and
          other professional software and equipment.
        </p>
        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
          Transport & logistics
        </h3>
        <p className="font2 opacity-60 pb-10">
          At JSR Production House, we understand that seamless logistics are
          vital for successful production. That's why we specialize in providing
          transportation solutions for every aspect of your creative project.
          Whether you need to move equipment or your team, we've got you
          covered. Our fleet includes a range of vehicles, from luxury options
          like sports cars and limousines to commercial choices such as SUVs,
          MUVs, vanity vans, production pickup trucks, buses, taxis, and
          generators.
        </p>

        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
          Location & Accomodation
        </h3>
        <p className="font2 opacity-60 pb-10">
          At JSR Production House, we understand that comfortable and convenient
          accommodations are essential for the success of any production. That's
          why we specialize in providing top-notch lodging options for you. From
          prime locations to hotels, resorts, clubs, pubs, and cafes, we offer a
          comprehensive range of options, all available under one roof.
        </p> */}
      </div>
    </>
  );
};

export default Rental;
