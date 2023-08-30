import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import UpcomingProjects from "../Components/UpcomingProjects";
// import OurWork from "../Components/OurWork";
import ReleasedProjects from "../Components/ReleasedProjects";
// import FutureProjects from "../Components/FutureProjects";
import OurChannel from "../Components/OurChannel";
import WorkWithUs from "../Components/WorkWithUs";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Gallery from "../Components/Gallery/Gallery";
import Ventures from "../Components/Ventures";
import { BsTwitter } from "react-icons/bs";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* <div className="absolute h-52 w-32 flex-col"> */}
      <div className="fixed top-[320px] lg:top-[260px] left-0 h-72 w-12 items-center flex flex-col gap-10 justify-center bg-gray-500 bg-blend-darken z-50 rounded-tr-md rounded-br-md    ">
        <a href="https://www.facebook.com/JSRProductionhouse" target="_blank">
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
      {/* </div> */}
      <div className="inset-1">
        <Navbar navColor={"text-black"} />
      </div>
      <Hero />
      <div>
        <ul className="flex flex-col items-center w-full  px-4 lg:px-20 py-0 lg:py-3">
          {/* <li className=" lg:border-l-[2px] border-slate-100 h-[650%]  absolute z-[-1]  left-4 lg:left-20"></li>
          <li className="lg:border-l-[2px] border-slate-100  left-[50%] h-[650%]  absolute z-[-1]"></li>
          <li className="lg:border-l-[2px] border-slate-100 h-[650%] absolute z-[-1] right-4 lg:right-20"></li> */}
          <About />
          <UpcomingProjects />
          <ReleasedProjects />
          {/* <FutureProjects /> */}
          <Gallery />
          <Ventures />
          <OurChannel />
          <WorkWithUs />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
