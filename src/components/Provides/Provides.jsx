import React from "react";
import { Link } from "react-router-dom";
import plane from "../../assets/img/banner/plane.png";
import { Card } from "./card";

const Service = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="mb-8">
          <div className="inline-block group">
            <div className="2xl:group-hover:ml-[1320px] mx-4 xl:group-hover:ml-[1000px] lg:group-hover:ml-[800px] md:group-hover:ml-[540px] group-hover:ml-[150px] transition-all duration-1000 ease-in-out">
              <img  src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-white">
        <h2 className="md:text-4xl text-3xl font-semibold uppercase mb-6 tracking-[.20em]">
          services
        </h2>
        <h2 className="xl:text-5xl md:text-3xl lg:text-4xl font-bold mb-24 tracking-[.15em]">
          We provides services to our clients
        </h2>
      </div>
      <div className="container grid grid-cols-1 gap-4 px-3 pb-8 mx-auto md:px-5 md:gap-5 xl:grid-cols-3 md:grid-cols-2 lg:gap-12 xl:gap-10 2xl:gap-20 2xl:px-0">
        {Card &&
          Card.map((index) => (
            <div
              key={index.id}
              className="bg-white 2xl:px-12 py-12 md:px-5 px-3 text-center rounded-3xl 2xl:h-[720px] xl:h-[680px] md:h-[700px]"
            >
              <div className="mb-4 ">
                <img
                  src={index.image}
                  className="lg:w-[80%] mx-auto"
                  alt={index.title}
                />
              </div>
              <div className="2xl:text-3xl text-2xl lg:text-3xl xl:text-2xl md:text-2xl mb-8 tracking-wider text-[#0094ca]">
                {index.title}
              </div>
              <div className="mb-8 tracking-widest text-justify md:text-lg">
                {index.desc}
              </div>
              <Link
                className="rounded-[30px] xl:text-3xl lg:text-2xl lg:px-24 text-lg font-semibold uppercase text-white bg-[#0094ca] py-3.5 px-32"
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
