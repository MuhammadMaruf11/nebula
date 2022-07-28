import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 relative h-screen bg-[#030231]">
          <h1 className="text-4xl pt-28 mb-20 text-[#0093c4] font-semibold tracking-[.2em] uppercase text-center leading-[60px]">
            <span className="inline-block first-letter:text-5xl">
              globetech
            </span>
            <br />
            <span className="inline-block mr-4 text-4xl first-letter:text-5xl">
              company
            </span>
            <span className="inline-block first-letter:text-5xl">limited</span>
          </h1>
          <p className="text-lg font-medium tracking-wider text-center text-white">
            Make yourself digitalized & more effecient
          </p>
          <div className="absolute -translate-x-1/2 bottom-8 left-1/2">
            <Link to="/">
              <i class="fa-solid fa-caret-left text-white text-5xl"></i>
            </Link>
          </div>
        </div>
        <div className="w-3/4 relative bg-[#bfcdd2]">
          <div className="flex items-center justify-center h-screen">
            <div className="w-[480px] text-center h-[400px] bg-white shadow-2xl">
              <h2 className="pt-12 mb-8 text-4xl font-light">Welcome</h2>
              <p className="mb-4 text-sm text-gray-400">
                Sign in to your account
              </p>
              <form>
                <input
                  className="w-[420px] outline-none border border-black rounded-lg px-6 h-14"
                  type="text"
                  placeholder="Email"
                />
                <div className="relative">
                  <input
                    className=" w-[420px] mx-auto my-4 outline-none border border-black rounded-lg px-6 h-14"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i class="fa-solid fa-eye absolute right-12 -translate-y-1/2 text-gray-600 top-1/2"></i>
                </div>
                <input
                  className="w-[420px] cursor-pointer outline-none border text-lg text-white bg-[#0093c4] rounded-lg px-6 h-14"
                  type="submit"
                  value="Login"
                />
              </form>
            </div>
          </div>
          <div className="absolute -translate-x-1/2 bottom-6 left-1/2">
            <p className="text-[#9f9ea0] font-semibold">Globetech Company Limited</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
