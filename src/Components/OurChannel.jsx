import React from "react";
const OurChannel = () => {
  return (
    <div className="py-20 flex flex-col text-center">
      <h1 className="text-5xl md:text-5xl lg:text-7xl  tracking-[2px]  lg:tracking-[6px]  py-10">
        OUR CHANNEL
      </h1>
      <p className="font2 mt-0 py-2 lg:py-6 lg:mt-4 w-[320px] md:w-[550px] lg:w-[800px] lg:text-[14px] tracking-wide leading-7 text-gray-600 ">
        We offer a variety of production services through our two YouTube
        channels, JSR Production House and JSR Record Label. Our channel is
        packed with diverse recreational content that highlights local and
        national talent in movies, music videos, and TV shows.
      </p>
      <div className=" pt-10  flex  justify-around">
        <div className="cursor-pointer flex gap-16 lg:gap-36 items-center ">
          <div className="hover:scale-125 duration-200">
            <a
              href="https://www.youtube.com/@jsrproductionhouse9127"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/djb3n17c0/image/upload/v1688627048/JSR_PRODUCTION_HOUSE_LOGO_PNG_FINAL_kkanqx.png"
                alt="JSR Production House"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
          <div className="hover:scale-125 duration-200">
            <a href="https://www.youtube.com/@JSRRECORDLABEL" target="_blank">
              <img
                src="https://res.cloudinary.com/djb3n17c0/image/upload/v1688627102/jsr_record_label_low_res_predlq.png"
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-44 lg:h-40 text-red-700"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChannel;
