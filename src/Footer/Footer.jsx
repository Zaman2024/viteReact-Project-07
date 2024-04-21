import React from 'react'
import {NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='fixed top-2/3 w-full max-h-48 flex  gap-6 border-t-2 border-slate-600 p-5'>
        <div>
            <img src="./Logo2.png" alt="Img" width={150} className="opacity-60" />
        </div>
        <div>
            <ul>
                <li>
                    <NavLink> Feedbacks</NavLink>
                </li>
                <li>
                    <NavLink> Services</NavLink>
                </li>
                <li>
                    <NavLink> Send Email</NavLink>
                </li>
            </ul>
        </div>
      
    </div>
  )
}
