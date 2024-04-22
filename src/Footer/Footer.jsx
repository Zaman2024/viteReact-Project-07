import React, { useEffect, useState } from 'react'
import {NavLink } from 'react-router-dom'
import Contact from '../components/Contact'

export default function Footer() {

  return (
    <div className='fixed flex flex-wrap justify-between px-56 top-2/3 w-full max-h-48 border-t-2 border-slate-600 p-5'>
        <div>
            <img src="./Logo2.png" alt="Img" width={150} className="opacity-60" />
        </div>
        <div className='border-l-2 border-slate-700 pl-56'>
            <ul className='grid grid-cols-2 gap-x-40  gap-y-5 '>
                <li>
                    <NavLink to='Contact' className={({isActive})=>` ${isActive? 'text-orange-700':'text-white'}`}> Feedbacks </NavLink>
                </li>
                <li>
                    <NavLink to=' ' className={({isActive})=>` ${isActive? 'text-orange-700':'text-white'}`}> Services</NavLink>
                </li>
                <li>
                    <NavLink to=' ' className={({isActive})=>` ${isActive? 'text-orange-700':'text-white'}`}> Send Email</NavLink>
                </li>
                <li>
                    <NavLink to ='/' className={({isActive})=>` ${isActive? 'text-orange-700':'text-white'}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to ='About' className={({isActive})=>` ${isActive? 'text-orange-700':'text-white'}`}> About</NavLink>
                </li>
                <li>
                    <NavLink to='Github' className={({isActive})=>` ${isActive? 'text-orange-700':'text-white'}`}> Github</NavLink>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

