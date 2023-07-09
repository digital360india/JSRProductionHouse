import React from "react";
import { BsTwitter } from "react-icons/bs";

const WorkWithUs = () => {
  return (
    <div className="p-10 pb-10 lg:pb-20 flex gap-32 lg:flex-row  flex-wrap text-5xl lg:text-6xl pt-8 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
      <>
        <div className="flex flex-col  items-center lg:items-end">
          <div className="w-[300px] lg:w-[450px] p-5 lg:pl-10 lg:p-2 text-center">
            FOR ANY QUERIES LEAVE US A MESSAGE!
          </div>
          <div className="flex gap-8 w-60  pt-2 lg:pt-8">
            <a
              href="https://www.facebook.com/JSRProductionhouse"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt=""
                className="w-8 h-8 hover:scale-125 duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt=""
                className="w-8 h-8 hover:scale-125  duration-200"
              />
            </a>
            <a href="https://youtube.com/@JSRRECORDLABEL" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt=""
                className="w-8 h-8 hover:scale-125  duration-200"
              />
            </a>
            <a href="">
              <BsTwitter className="w-8 h-8 text-blue-500 hover:scale-125  duration-200" />
            </a>
          </div>
        </div>
      </>
      <>
        <div className=" flex flex-col gap-4 items-center lg:pl-16 justify-center ">
          <textarea
            type="text"
            placeholder="Type your message"
            className=" font2 border-2 p-4  text-sm h-32 lg:h-64 lg:w-[560px] md:[450px] w-[300px]"
          />
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 ">
            <input
              type="text"
              placeholder="Your name"
              className="font2 border-2 p-4 text-sm h-16 w-[300px] lg:w-[260px]"
            />
            <input
              type="text"
              placeholder="Whatsapp No."
              className="font2 border-2 h-16 p-4 text-sm  w-[300px] lg:w-[260px]"
            />
          </div>
          <input
            type="text"
            placeholder="Your Email"
            className=" font2 border-2 p-4  text-sm h-16 lg:h-16 lg:w-[560px] md:w-[450px] w-[300px]"
          />
          <button className="bg-black w-[300px] md:w-[300px] lg:w-[560px] h-16 tracking-[6px] text-white text-xl hover:opacity-75 duration-200">
            Send
          </button>
        </div>
      </>
    </div>
  );
};

export default WorkWithUs;
