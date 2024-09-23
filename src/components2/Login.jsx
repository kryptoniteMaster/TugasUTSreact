import React from "react";  
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container mx-auto bg-slate-800 w-full h-[40px] flex justify-center ">
        <div className="flex text-xs text-white font-semibold w-[76%] items-center text-center h-full justify-between">
        <ul>
            <li className="flex gap-8">
              <Link to="/" className="hover:text-yellow-700">
                BACK
              </Link>
              <a href="" className="hover:text-yellow-700">
                HELP
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Login