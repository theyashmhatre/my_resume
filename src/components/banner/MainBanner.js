import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const MainBanner = () => {
  const [text] = useTypewriter({
    words: ["a Programmer.", "a Java Developer.", "a Full Stack Developer.", "a Blockchain Developer.", "Always looking for an adventure!"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white ">
          Hi, I'm <span className="text-designColor capitalize">Yash Mhatre</span>
        </h1>
        <h2 className="text-4xl font-bold text-white pb-10">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A Full Stack developer with a passion for web and app development. I'm your go-to for crafting seamless APIs and user-friendly interfaces. Java, SpringBoot, React.js powers my web expertise, while my exploration into blockchain and AWS adds depth to my toolkit. 💻✨
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default MainBanner