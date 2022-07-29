import React from "react";
import { Link } from "react-router-dom";
import plane from "../../assets/img/banner/plane.png";
import {Card} from "./card";

const Service = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="mb-8">
          <div className="inline-block group">
            <img
              className="group-hover:ml-[1320px] transition-all duration-1000 ease-in-out"
              src={plane}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold uppercase mb-6 tracking-[.20em]">
          services
        </h2>
        <h2 className="text-5xl font-bold mb-24 tracking-[.15em]">
          We provides services to our clients
        </h2>
      </div>
      <div className="container grid grid-cols-3 gap-20 pb-8 mx-auto">
        {Card &&
          Card.map((index) => (
            <div
              key={index.id}
              className="bg-white p-12 text-center rounded-3xl h-[770px]"
            >
              <div className="mb-4 w-[470px] h-[280px]">
                <img src={index.image} className='w-[80%]' alt={index.title} />
              </div>
              <div className="text-3xl mb-8 tracking-wider text-[#0094ca]">
                {index.title}
              </div>
              <div className="mb-8 text-lg tracking-widest text-justify">
                {index.desc}
              </div>
              <Link
                className="rounded-[30px] text-3xl font-semibold uppercase text-white bg-[#0094ca] py-2 px-16"
                to="/services"
              >
                More
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Service;
