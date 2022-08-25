import React, { useState } from "react";
import logo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  let mobileMenu;
  let menuMask;
  if (menuBtn) {
    mobileMenu = (
      <div className="w-full mb-4 -mt-12">
        <div className="navLink">
          <div className="block">
            <ul className=" border border-[#00a9de] ">
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border-b border-[#00a9de] ">
                <Link className="text-[#00a9de] block" to="/">home</Link>
              </li>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border-b border-[#00a9de]">
                <Link className="text-[#00a9de] block" to="/services">services</Link>
              </li>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize ">
                <Link className="text-[#00a9de] block" to="/login">login</Link>
              </li>
            </ul>
          </div>
        </div>
        {menuMask}
      </div>
    );

    menuMask = <div onClick={() => setMenuBtn(false)}></div>;
  }
  return (
    <>
      <div className="container flex items-center justify-between py-20 mx-auto">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="link">
          <ul className="hidden lg:flex">
            <li>
              <Link
                className="mx-6 text-xl font-bold text-[#00a9de] capitalize hover:text-[#cff872]"
                to="/"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                className="mx-6 text-xl font-bold text-[#00a9de] capitalize hover:text-[#cff872]"
                to="/services"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                className="mx-6 text-xl font-bold text-[#00a9de] capitalize hover:text-[#cff872]"
                to="/login"
              >
                login
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-3 inline-block mr-8 cursor-pointer lg:hidden">
          <button
            onClick={() => setMenuBtn(!menuBtn)}
            className="flex flex-col items-center justify-center p-1 border border-[#00a9de]"
          >
            <span className="line h-0.5 w-5 my-0.5 bg-[#00a9de] "></span>
            <span className="line h-0.5 w-5 my-0.5 bg-[#00a9de] "></span>
            <span className="line h-0.5 w-5 my-0.5 bg-[#00a9de] "></span>
          </button>
        </div>
      </div>
      <div className="w-full">{mobileMenu}</div>
    </>
  );
};

export default Header;
