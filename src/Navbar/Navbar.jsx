import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-indigo-950 text-center">
      <div className=" flex justify-between mx-8 ">
        <div className="float-left m-2">
          <img
            src="./Logo2.png"
            alt="Image"
            width={70}
            className="opacity-55"
          />
        </div>
        <div className="flex gap-32 float-right my-7">
          <div className="flex gap-3 text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-1 px-4 rounded-lg border-none ${
                  isActive ? "hover:none" : "hover:bg-blue-700"
                } ease-in duration-300  focus:outline-none ${
                  isActive ? "bg-indigo-800" : ""
                }  ${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              {" "}
              Home
            </NavLink>

            <NavLink
              to="About"
              className={({ isActive }) =>
                `py-1 px-4 rounded-lg border-none ${
                  isActive ? "hover:none" : "hover:bg-blue-700"
                } ease-in duration-300  focus:outline-none ${
                  isActive ? "bg-indigo-800" : ""
                }  ${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="Github"
              className={({ isActive }) =>
                `py-1 px-4 rounded-lg border-none ${
                  isActive ? "hover:none" : "hover:bg-blue-700"
                } ease-in duration-300  focus:outline-none ${
                  isActive ? "bg-indigo-800" : ""
                }  ${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              Github
            </NavLink>

            <NavLink
              to="Contact"
              className={({ isActive }) =>
                `py-1 px-4 rounded-lg border-none ${
                  isActive ? "hover:none" : "hover:bg-blue-700"
                } ease-in duration-300  focus:outline-none ${
                  isActive ? "bg-indigo-800" : ""
                }  ${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex float-right gap-5 text-xl text-">
            <NavLink className="py-1 px-4">Login</NavLink>
            <NavLink className="py-1 px-4">Subscribe</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
