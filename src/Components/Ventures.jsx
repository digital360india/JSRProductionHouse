import React from "react";

const Ventures = () => {
  return (
    <>
      <h1 className="text-5xl md:text-5xl lg:text-7xl  tracking-[2px]  lg:tracking-[6px] pt-5 lg:pt-10">
        Our Ventures
      </h1>
      {/* <p className="font2  py-2 lg:py-8 w-[320px] md:w-[550px] lg:w-[800px] lg:text-[14px] tracking-wide leading-7 text-gray-600 text-center ">
        VHS media llp, JSR Production house, JSR Record label
      </p> */}
      <div className=" pt-10  flex  justify-around">
        <div className="cursor-pointer flex gap-4 lg:gap-36 items-center ">
          <div className="hover:scale-125 duration-200">
            <a
              href="https://instagram.com/vhs_mediallp?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737496/samples/ixoleqe9lfa47ciek9kr.png"
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
       
          <div className="hover:scale-125 duration-200">
            <a href="https://instagram.com/jsrrecordlabel?igshid=MzRlODBiNWFlZA==" target="_blank">
              <img
                src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737408/samples/jydv1y0pssxb035vm8dt.png"
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ventures;
