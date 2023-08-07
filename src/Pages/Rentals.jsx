import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import FooterNav from "../Components/FooterNav";
import Rental from "../Components/Rental";
import { BsTwitter } from "react-icons/bs";
import axios from "axios";

const Rentals = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);

  const postMessage = async () => {
    try {
      const apiURL = "https://jsr-backend-x7rr.onrender.com/Query/";

      const postData = {
        message,
        name,
        whatsapp,
        email,
      };

      axios
        .post(apiURL, postData)
        .then((response) => {
          // console.log(response);
          if (response.status == 200){
            setSuccess(true);
            setTimeout(()=> {
              setSuccess(false);
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle any network or other errors that might occur during the POST request.
    }
  };

  const handleSubmit = () => {
    if (message == "" || name == "" || whatsapp == "" || email == "") {
      setWarning(true);
    } else {
      postMessage();
      setWarning(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setSuccess(false);
    setWarning(false);
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
              RENTALS
            </h1>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691130844/RENTALS_lnemlc.png"
          alt=""
          className="h-[400px] lg:h-[500px] w-full object-cover"
        />
      </div>
      <div className="bg-black  ">
        <ul className="flex flex-col  items-center w-full  px-4 lg:px-12 py-0 lg:py-20">
          <li className=" lg:border-l-[2px] border-gray-100 opacity-10 h-[450%] absolute z-1  left-4 lg:left-20"></li>
          <li className="lg:border-l-[2px] border-gray-100 opacity-10 left-[50%] h-[450%] absolute z-1"></li>
          <li className="lg:border-l-[2px] border-gray-100 opacity-10 h-[450%] absolute z-1 right-4 lg:right-20"></li>
          <Rental />
        </ul>
      </div>

      {/* form */}

      <div className=" justify-center p-10 pb-10 lg:pb-20 lg:pt-20 flex gap-32 lg:flex-row  flex-wrap text-5xl lg:text-6xl pt-8 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
        <>
          <div className="flex flex-col  items-center lg:items-end ">
            <div className="w-[300px] lg:w-[450px] p-5 lg:pl-10 lg:p-2 text-center">
              FOR PRICE RELATED QUERIES LEAVE US A MESSAGE!
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
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Type your message"
              className=" font2 border-2 p-4  text-sm h-32 lg:h-64 lg:w-[560px] md:[450px] w-[300px]"
            />
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 ">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                className="font2 border-2 p-4 text-sm h-16 w-[300px] lg:w-[260px]"
              />
              <input
                onChange={(e) => setWhatsapp(e.target.value)}
                type="text"
                placeholder="Whatsapp No."
                className="font2 border-2 h-16 p-4 text-sm  w-[300px] lg:w-[260px]"
              />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email"
              className=" font2 border-2 p-4  text-sm h-16 lg:h-16 lg:w-[560px] md:w-[450px] w-[300px]"
            />
            {/* <button className="bg-black w-[300px] md:w-[300px] lg:w-[560px] h-16 tracking-[6px] text-white text-xl hover:opacity-75 duration-200">
            Send
          </button> */}
            <a
              onClick={handleSubmit}
              href="#_"
              class="relative inline-block text-lg group"
            >
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium w-[300px] lg:w-[560px] leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900  group-hover:text-white">
                <span class="absolute inset-0  w-full h-full px-5 py-3  bg-gray-50"></span>
                <span class="absolute left-0 w-[600px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                <span class="relative flex justify-center">Send</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
            {warning && (
              <div className="text-red-700 text-sm font2 tracking-normal ">
                *All Fields Are Mandatory
              </div>
            )}
            {success && (
              <div className="text-green-700 text-sm font2 tracking-normal">
                *Form Submitted Successfully
              </div>
            )}
          </div>
        </>
      </div>
      <FooterNav />
    </>
  );
};

export default Rentals;
