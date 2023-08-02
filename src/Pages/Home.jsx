import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import UpcomingProjects from "../Components/UpcomingProjects";
// import OurWork from "../Components/OurWork";
import ReleasedProjects from "../Components/ReleasedProjects";
import FutureProjects from "../Components/FutureProjects";
import OurChannel from "../Components/OurChannel";
import WorkWithUs from "../Components/WorkWithUs";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Gallery from "../Components/Gallery/Gallery";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="inset-1">
        <Navbar navColor={"text-black"} />
      </div>
      <Hero />
      <div>
        <ul className="flex flex-col items-center w-full  px-4 lg:px-20 py-0 lg:py-3">
          <li className=" lg:border-l-[2px] border-slate-100 h-[650%]  absolute z-[-1]  left-4 lg:left-20"></li>
          <li className="lg:border-l-[2px] border-slate-100  left-[50%] h-[650%]  absolute z-[-1]"></li>
          <li className="lg:border-l-[2px] border-slate-100 h-[650%] absolute z-[-1] right-4 lg:right-20"></li>
          <About aa />
          <UpcomingProjects />
          <ReleasedProjects />
          <FutureProjects />
          <Gallery />
          <OurChannel />
          <WorkWithUs />
        </ul>
        {/* <OurWork /> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
