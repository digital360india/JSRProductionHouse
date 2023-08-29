import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
// import Service from "../Components/Service";
import FooterNav from "../Components/FooterNav";
import Team from "../Components/Team";

const Member = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="">
        <div className="bg-transparent absolute z-50 inset-1  ">
          <Navbar
            navBgColor={"bg-white"}
            absolute={" absolute "}
            bar={"text-white"}
          />
          <div className="flex justify-center items-center">
            <h1 className="text-7xl text-white tracking-wider absolute top-44 lg:top-52">
              TEAM
            </h1>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691130582/TEAM_l5vyw0.png"
          // src="https://pelicula.qodeinteractive.com/wp-content/uploads/2020/03/h4-title-image.jpg"
          alt=""
          className="h-[400px] lg:h-[500px] w-full object-cover"
        />
      </div>
      {/* <div className="text-2xl lg:text-6xl text-center bg-black text-white pt-10">
        BOARD OF DIRECTORS
      </div> */}
      <div className="bg-black">
        <ul className="flex flex-col  items-center w-full  px-4 lg:px-12 py-0 lg:py-20">
          <li className=" lg:border-l-[2px] border-gray-100 opacity-10 h-[350%] absolute z-1  left-4 lg:left-20"></li>
          <li className="lg:border-l-[2px] border-gray-100 opacity-10 left-[50%] h-[350%] absolute z-1"></li>
          <li className="lg:border-l-[2px] border-gray-100 opacity-10 h-[350%] absolute z-1 right-4 lg:right-20"></li>
          <Team />
        </ul>
      </div>
      <FooterNav />
    </>
  );
};

export default Member;
