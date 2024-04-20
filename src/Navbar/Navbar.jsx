import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-indigo-950 text-center">
      <div className=" flex justify-between mx-8 ">
        <div className="float-left m-2">
          <img src="./Logo2.png" alt="Image" width={70} />
        </div>
        <div className="flex gap-32 float-right my-7">
          <div className="flex gap-3 text-xl">
            <NavLink to="Home" className='py-1 px-4 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'> Home
            </NavLink>
            <NavLink to="About" className='py-1 px-4 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>About
            </NavLink>
            <NavLink to="Github" className='py-1 px-4 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Github
            </NavLink>
            <NavLink to="Contact" className='py-1 px-4 rounded-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Contact
            </NavLink>
          </div>
          <div className="flex float-right gap-5 text-xl text-">
            <NavLink>Login</NavLink>
            <NavLink>Subscribe</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
