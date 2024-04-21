import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Web Developer ",
        "Graphic Desiner ",
        "Video Editor ",
        "Coder ",
      ],
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    //- destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-between mx-80 my-8">
      <div className="text-4xl">
        <h1 className="text-center">
          My name is Sadikud Zaman <br />
          and
        </h1>
        <h1>I am a Pasonate</h1>
        <span className='text-yellow-500' ref={element}></span>
      </div>
      <div>
        <img src="./image.jpg" alt="Image" width={150}  />
      </div>
    </div>
  );
}
