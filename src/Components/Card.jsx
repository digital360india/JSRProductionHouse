import React from "react";

const Card = (data) => {
  // const { title, img, release_date, producer, director, DOP } = data;
  // console.log("dataaaa", data);
  return (
    <>
      <div className="flex flex-col bg-gray-50  ">
        <a href={data?.data?.link} target="_blank">
          <img
            className="w-60 h-64 md:w-60 md:h-72 xl:w-80 xl:h-[400px]"
            src={data?.data?.img}
            alt=""
          />
        </a>
        {/* <div></div> */}
        <p className="font2 pt-2 pb-4   lg:pt-2  self-center w-56 lg:w-60 xl:w-72 flex flex-col gap-2  ">
          <li className="font-bold text-lg  ">{data?.data?.title}</li>
          <div className="flex  flex-col pt-2 text-base  justify-start items-start  w-96 h-24 ">
            {data?.data?.producer && <li className=" text-center   ">
              <span className="font-semibold">Producer : </span>
              {data?.data?.producer}
            </li>}
            <li className=" ">
              {" "}
              <span className="font-semibold">Director : </span>
              {data?.data?.director}
            </li>
            {data?.data?.dop ? (
              <li className="  ">
                {" "}
                <span className="font-semibold ">DOP : </span>
                {data?.data?.dop}
              </li>
            ) : null}
          </div>
        </p>
      </div>
    </>
  );
};

export default Card;
