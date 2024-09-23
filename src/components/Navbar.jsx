import React from "react";  
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto bg-slate-800 w-full h-[40px] flex justify-center ">
        <div className="flex text-xs text-white font-semibold w-[76%] items-center text-center h-full justify-between">
          <ul>
            <li className="flex gap-8">
              <a href="" className="hover:text-yellow-700">
                NEWS
              </a>
              <a href="" className="hover:text-yellow-700">
                GUN REVIEWS
              </a>
              <a href="" className="hover:text-yellow-700">
                SELL YOUR GUN
              </a>
              <a href="" className="hover:text-yellow-700">
                GUN FINANCING
              </a>
            </li>
          </ul>
          <ul>
            <li className="flex gap-3">
              <a href="" className="hover:text-yellow-700">
                WHY JOIN AS A DEALER
              </a>
              <p>|</p>
              <a href="" className="hover:text-yellow-700">
                DEALER LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[url('https://images.guns.com/prod/53ea2QeynGvzTzLYCRWHMGesutPocEhgfM5Srw3c.jpeg')] w-full h-[120px] flex justify-center max-w-[1920px] ">
          <div className=" h-full w-[75%] flex items-center ">
            <img
              className="w-[270px] h-[70.43px]"
              src="https://images.guns.com/dev/2021/04/02/6066f53e87d5b822e9f0c866197731e2a32fcf38ba296.png"
              alt=""
            />
            <div className="h-full w-full ">
              <div className=" flex items-center w-full h-[50%] text-white">
                <div className="relative w-[80%] ml-5 mt-5 flex">
                  <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-70a0 font-bold text-xl text-yellow-700"></i>
                  <input
                    className="border-gray-500 border-2 w-full h-10 bg-transparent placeholder-white placeholder-opacity-100 pl-10"
                    type="text"
                    placeholder="Search by manufacturer, model, or SKU"
                  />
                </div>
                <Link to="/Login" className="mt-4 ml-6 text-xs font-bold">
                  SIGN IN
                </Link>
                <i className="bx bxs-cart-alt mt-4 ml-6 text-yellow-700 text-2xl"></i>
                <p className="mt-4 ml-2">0</p>
              </div>
              <div className="ml-6 mt-4 text-base    font-bold w-full h-[50%] flex gap-4 text-white">
                <a href="">GUNS</a>
                <p>|</p>
                <a href="">USED GUNS</a>
                <p>|</p>
                <a href="">AMMO</a>
                <p>|</p>
                <a href="">ACCESSORIES</a>
                <p>|</p>
                <a href="">SHOP LOCAL</a>
                <p>|</p>
                <a href="">MERCH</a>
                <p>|</p>
                <a href="">🚨 Deals 🚨</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://images.guns.com/prod/2024/09/17/66e9a8d20090003479dca63994d6c72ebe6515377f426.png')] bg-center w-full h-[50px]"></div>
    </nav>
  );
};

export default Navbar;
