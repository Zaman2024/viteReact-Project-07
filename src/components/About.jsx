import React from 'react'
import Typed from 'typed.js'
import { useRef, useEffect } from 'react'

function About() {
    const element = useRef(null)

    useEffect(()=>{
        const typed = new Typed(element.current , {
            strings:['To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellenttime management and problem-solving skills. Hardworking and passionate job seeker with strong organizationalskills eager to secure entry-level Managerial position. Ready to help team achieve company goals. Detail-orientedteam player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degreeof accuracy.'],
            typeSpeed: 20,
        });

        //-- Destroying
        return() =>{
            typed.destroy();
        };

    },[])
  return (
    <div className='flex flex-col justify-self-center w-1/1 mx-72 my-8 bg-white bg-opacity-10 rounded-lg'>
      <h1 className='bg-blue-500 bg-opacity-65 text-white text-center p-1 text-xl font-bold rounded-t-lg'>About</h1>
      <span className='px-5 py-1 text-lg text-white/75' ref={element}></span>
    </div>
  )
}

export default About
