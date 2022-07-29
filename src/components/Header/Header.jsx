import React from "react";
import logo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container flex justify-between py-20 mx-auto">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>

        <div className="link">
          <ul className="flex">
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
      </div>
    </>
  );
};

export default Header;
