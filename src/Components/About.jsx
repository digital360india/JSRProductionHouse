import React from "react";

const About = () => {
  return (
    <div className="flex flex-col  justify-center pt-10   ">
      <div className="text-center flex flex-col items-center text-gray-600 leading-7">
        <h1 className="text-4xl tracking-wide lg:tracking-widest lg:text-7xl pb-4 pt-5 lg:pt-16 text-black">
          ABOUT US
        </h1>

        {/* for large */}
        <div className="hidden lg:flex flex-col items-center ">
          <p className=" font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[1100px] lg:text-[14px] tracking-wide    ">
            We are a well-established production house located amidst the
            magnificent hills of Uttarakhand. With a vision to create an
            everlasting impact through our{" "}
          </p>
          <p className="lg:w-[1000px] xl:w-[1100px] font2">
            full-service production house. Under the able guidance of Mr Jaswant
            Rawat, Chairman- JSR Group, we have thrived in a short period and
            have
          </p>
          <p className="lg:w-[900px] xl:w-[1000px] font2">
            successfully emerged as one of the best production houses in India.
            JSR Production House is a revered and award-winning organization
          </p>
          <p className="lg:w-[800px] xl:w-[900px]  font2">
            that provides a platform to showcase your potential and business. We
            understand the importance of quality in our work,
          </p>
          <p className="lg:w-[700px] xl:w-[800px]  font2">
            so we ensure that all our projects are completed with perfection. We
            know the value of time and hence
          </p>
          <p className="lg:w-[600px]  xl:w-[700px] font2">
            ensure that we complete the project within the given time frame. We
            believe in delivering
          </p>
          <p className="lg:w-[500px]  xl:w-[600px] font2">
            top-notch services at an affordable price.
          </p>
        </div>

        {/* for mobile */}
        <div className="lg:hidden font2 text-center px-5 pb-5">
          We are a well-established production house located amidst the
          magnificent hills of Uttarakhand. With a vision to create an
          everlasting impact through our full-service production house. Under
          the able guidance of Mr Jaswant Rawat, Chairman- JSR Group, we have
          thrived in a short period and have successfully emerged as one of the
          best production houses in India. JSR Production House is a revered and
          award-winning organization that provides a platform to showcase your
          potential and business. We understand the importance of quality in our
          work,so we ensure that all our projects are completed with perfection.
          We know the value of time and hence ensure that we complete the
          project within the given time frame. We believe in delivering
          top-notch services at an affordable price.
        </div>
      </div>

      {/* <ul className="pt-2 font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[800px] lg:text-[14px] flex flex-col justify-start tracking-wide leading-7 text-gray-600 ">
        <li className="pb-3">
          JSR Production House is a revered and award-winning organization that
          provides a platform to showcase your potential and business.
        </li>
        <li>
          We understand the importance of quality in our work, so we ensure that
          all our projects are completed with perfection.
        </li>
        <li>
          We know the value of time and hence ensure that we complete the
          project within the given time frame.
        </li>
        <li>
          We believe in delivering top-notch services at an affordable price
        </li>
      </ul> */}
    </div>
  );
};

export default About;
