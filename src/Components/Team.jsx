import React, { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const [bods, setBods] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get("https://jsr-backend-p4sz.onrender.com/Bod");
      setBods(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <>
        <div className="bg-black p-5 md:p-12 px-6 h-full w-screen text-white ">
          <div className="flex flex-col-reverse items-center  lg:mx-auto lg:w-[84vw] lg:justify-center lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[0]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2 text-grey-900 ">
                <li>{bods[0]?.desig}</li>
                <li className="opacity-40 text-justify ">
                  {bods[0]?.content}
                </li>
              </ul>
            </div>
            <img
              src={bods[0]?.img}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>
          <div className="text-2xl lg:text-6xl text-center bg-black relative z-50 text-white pb-12 mt-2 pt-16 -mb-4  ">
            BOARD OF DIRECTORS
          </div>

          <div className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40 ">
            <img src={bods[1]?.img} className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"></img>
            <div className="md:mr-16 lg:ms-8 px-0 lg:pl-16 lg:leading-7 sm:ps-8 float-right justify-start pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[1]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2">
                <li className="opacity-40  text-justify text-grey-900">
                {bods[1]?.content}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center lg:mx-auto lg:w-[84vw] lg:justify-center lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[2]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2">
                <li className="opacity-40  text-justify text-grey-900">
                {bods[2]?.content}
                </li>
              </ul>
            </div>
            <img
              src={bods[2]?.img}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:ps-14 lg:flex-row pt-5 lg:pb-40 md:mr-16">
            <img
              src={'/Public/Images/prashil.jpg'}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"
              data-aos="fade-up"
            />
            <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-10 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[3]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2">
                <li className="opacity-40 text-grey-900 text-justify">
                {bods[3]?.content}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Team;
