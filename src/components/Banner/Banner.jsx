import React from "react";
import plane from "../../assets/img/banner/plane.png";
import planet1 from "../../assets/img/banner/planet-1.jpg";
import planet2 from "../../assets/img/banner/planet-2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="container justify-between mx-auto lg:flex">
        <div className="w-full px-4 lg:w-1/2 xl:px-0">
          <div className="inline-block mb-8 transition-all duration-1000 ease-in-out 2xl:hover:ml-96 xl:hover:ml-80 lg:hover:ml-60 md:hover:ml-[520px] hover:ml-32">
            <img src={plane} alt="" />
          </div>
          <h1 className="2xl:text-[112px] lg:text-start text-center lg:text-[80px] md:text-8xl text-6xl mb-5 font-bold 2xl:leading-[150px] md:leading-[100px] text-[#00a9de]">
            Welcome to <br />{" "}
            <span className="bg-clip-text bg-gradient-to-r text-transparent from-[#c1f551] to-[#d8f98c]">
              Globetech
            </span>
          </h1>
          <p className="md:text-[28px] text-xl xl:pr-36 text-justify text-[#00b8e2]">
            We are committed to deliver
            <Link className="text-[#98b74e] ml-2 font-bold" to="/">
              best IT services
            </Link>
            . Our consultants have experience in working with clients. We have
            extensive experience in the software application space and also
            offer a broad range and depth of technology.
          </p>
          <div className="my-8 md:justify-between lg:justify-start md:flex">
            <Link
              to="/"
              className="bg-gradient-to-r mb-5 w-full border-2 rounded-md md:mr-11 inline-block md:w-1/2 2xl:w-[248px] h-[68px] font-bold text-center leading-[60px] text-2xl from-[#daf890] to-[#bedd76]"
            >
              Support us
            </Link>
            <Link
              to="/"
              className="bg-gradient-to-r w-full inline-block 2xl:w-[248px] h-[68px] md:w-1/2 border-2 border-[#80e3fd] font-bold text-center rounded-md leading-[60px] text-2xl text-[#80e3fd]"
            >
              Our Mission
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-auto px-4 pb-16 2xl:pb-0 lg:w-1/2 xl:px-0">
          <div className="group">
            <img className="block group-hover:hidden" src={planet1} alt="" />
            <img className="hidden group-hover:block" src={planet2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
