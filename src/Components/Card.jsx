import React from "react";

const Card = (data) => {
  // const { title, img, release_date, producer, director, DOP } = data;
  // console.log("dataaaa", data);
  return (
    <>
      <div className="flex flex-col bg-gray-50  ">
        <a href={data?.link} target="_blank">
          <img
            className="w-60 h-64 md:w-60 md:h-72 xl:w-80 xl:h-[400px]"
            src={data?.img}
            alt=""
          />
        </a>
        {/* <div></div> */}
        <p className="font2 pt-2 pb-4 md:ps-6  lg:pt-2  self-center flex flex-col gap-2  ">
          <li className="font-bold text-lg  ">{data?.title}</li>
          <div className="flex  flex-col pt-2 text-base  justify-start items-start text-left   h-24 ">
            {data?.producer !== "" && data?.producer !== " " && <li className="">
              <span className="font-semibold">Producer : </span>
              {data?.producer}
            </li>}
            <li className=" ">
              {" "}
              <span className="font-semibold">Director : </span>
              {data?.director}
            </li>
            {data?.dop ? (
              <li className="  ">
                {" "}
                <span className="font-semibold ">DOP : </span>
                {data?.dop}
              </li>
            ) : null}
          </div>
        </p>
      </div>
    </>
  );
};

export default Card;
