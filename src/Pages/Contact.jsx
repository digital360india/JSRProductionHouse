import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import FooterNav from "../Components/FooterNav";
import Service from "../Components/Service";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar navColor={"text-black"} />
      <div>
        <div className="h-96 w-full bg-slate-200 overflow-hidden">
          <div className="hidden sm:flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3511855701477!2d78.03621587540034!3d30.28406247480366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092904359ef497%3A0xdbfac6e5851578c1!2sJSR%20Production%20House!5e0!3m2!1sen!2sin!4v1688709674744!5m2!1sen!2sin"
              width="1600"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="sm:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3511855701477!2d78.03621587540034!3d30.28406247480366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092904359ef497%3A0xdbfac6e5851578c1!2sJSR%20Production%20House!5e0!3m2!1sen!2sin!4v1688709674744!5m2!1sen!2sin"
              width="480"
              height="384"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col  items-center w-full  px-4 lg:px-12 py-0 lg:py-3">
            <li className=" lg:border-l-[2px] border-slate-100 h-[100%] absolute z-1  left-4 lg:left-20"></li>
            <li className="lg:border-l-[2px] border-slate-100  left-[50%] h-[100%] absolute z-1"></li>
            <li className="lg:border-l-[2px] border-slate-100 h-[100%] absolute z-1 right-4 lg:right-20"></li>
          </ul>

          <ul className="px-5 lg:px-28 pt-10  flex gap-6">
            <li className=" text-3xl md:text-4xl tracking-wide md:tracking-wider">
              ADDRESS:{" "}
            </li>
            <li className="text-lg font2 w-60 md:w-[700px] leading-9 opacity-50">
              Shaheed Gireesh Bhadri Chowk, Mothrowala, Banjarawala Rd, Ajabpur
              Khurd, Dehradun, Uttarakhand 248001
            </li>
          </ul>
          <ul className="px-5 lg:px-28 pt-10 flex gap-6">
            <li className="text-3xl md:text-4xl tracking-wide md:tracking-wider">
              PHONE NO:{" "}
            </li>
            <li className="text-lg font2 w-60 leading-9 opacity-50">
              078303 99111
            </li>
          </ul>

          <div className="p-10 pb-10 lg:pb-20 flex gap-32 lg:flex-row  flex-col items-center justify-center text-5xl lg:text-6xl pt-20 lg:pt-20 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
            <>
              <div className="flex flex-col lg:items-end">
                <div className="w-[300px] lg:w-[450px] p-5 lg:pl-10 lg:p-2 text-center">
                  FOR ANY QUERIES LEAVE US A MESSAGE!
                </div>
                <div className="flex gap-8 w-60   pt-2 lg:pt-8">
                  <a href="https://www.facebook.com/JSRProductionhouse">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                      className="w-8 h-8 hover:scale-125  duration-200"
                    />
                  </a>
                  <a href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                      alt=""
                      className="w-8 h-8 hover:scale-125  duration-200"
                    />
                  </a>
                  <a href="https://youtube.com/@JSRRECORDLABEL">
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
        </div>
      </div>
      <FooterNav />
    </>
  );
};

export default Contact;
