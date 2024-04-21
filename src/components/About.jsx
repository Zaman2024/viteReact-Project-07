import React from 'react'
import Typed from 'typed.js'
import { useRef, useEffect } from 'react'

function About() {
    const element = useRef(null)

    useEffect(()=>{
        const typed = new Typed(element.current , {
            strings:['Hi My name is Khan and i am not a terrorist'],
            typeSpeed: 60,
        });

        //-- Destroying
        return() =>{
            typed.destroy();
        };

    },[])
  return (
    <div className='flex flex-col justify-self-center w-1/2 mx-72 my-10 bg-white bg-opacity-10 rounded-lg'>
      <h1 className='bg-blue-500 bg-opacity-65 text-white text-center p-1 text-xl font-bold rounded-lg'>About</h1>
      <span ref={element}></span>
    </div>
  )
}

export default About
