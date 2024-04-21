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
            <NavLink to="/" className={({isActive})=>
            `${isActive? 'text-orange-700':'text-white'} py-1 px-4 rounded-lg ${isActive?'hover:none':'hover:bg-blue-700'} ease-in duration-300 active:bg-transparent border-none focus:outline-none focus:ring focus:ring-violet-300 `
            }
            > Home
            </NavLink>

            <NavLink to="About" className={({isActive})=>
            `py-1 px-4 rounded-lg border-none ${isActive?'hover:none':'hover:bg-blue-700'} ease-in duration-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ${isActive? 'text-orange-700':'text-white'}`
            }
            >About
            </NavLink>

            <NavLink to="Github" className={({isActive})=>
            `py-1 px-4 rounded-lg border-none ${isActive?'hover:none':'hover:bg-blue-700'} ease-in duration-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ${isActive? 'text-orange-700':'text-white'}`
            }
            >Github
            </NavLink>

            <NavLink to="Contact" className={({isActive})=>
            `py-1 px-4 rounded-lg border-none ${isActive?'hover:none':'hover:bg-blue-700'} ease-in duration-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ${isActive? 'text-orange-700':'text-white'}`
            }
            >Contact
            </NavLink>

          </div>
          <div className="flex float-right gap-5 text-xl text-">
            <NavLink className='py-1 px-4'>Login</NavLink>
            <NavLink className='py-1 px-4'>Subscribe</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
