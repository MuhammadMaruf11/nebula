import React from "react";
import plane from "../../assets/img/banner/plane.png";
import planet1 from "../../assets/img/banner/planet-1.jpg";
import planet2 from "../../assets/img/banner/planet-2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="container flex justify-between mx-auto">
        <div className="w-1/2">
          <div className="inline-block mb-8 transition duration-300 hover:ml-96">
            <img src={plane} alt="" />
          </div>
          <h1 className="text-[112px] font-bold leading-[150px] text-[#00a9de]">
            Welcome to <br />{" "}
            <span className="bg-clip-text bg-gradient-to-r text-transparent from-[#c1f551] to-[#d8f98c]">
              Globetech
            </span>
          </h1>
          <p className="text-[28px] pr-36 text-justify text-[#00b8e2]">
            We are committed to deliver
            <Link className="text-[#98b74e] ml-2 font-bold" to="/">
              best IT services
            </Link>
            . Our consultants have experience in working with clients. We have
            extensive experience in the software application space and also
            offer a broad range and depth of technology.
          </p>
          <div className="my-8">
            <Link
              to="/"
              className="bg-gradient-to-r border-2 rounded-md mr-11 inline-block w-[248px] h-[68px] font-bold text-center leading-[60px] text-2xl from-[#daf890] to-[#bedd76]"
            >
              Support us
            </Link>
            <Link
              to="/"
              className="bg-gradient-to-r inline-block w-[248px] h-[68px] border-2 border-[#80e3fd] font-bold text-center rounded-md leading-[60px] text-2xl text-[#80e3fd]"
            >
              Our Mission
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2 h-auto">
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
