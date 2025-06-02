import React from 'react'
import { FaLinkedinIn, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub, SiGmail, SiSpringboot, SiMysql } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/theyashmhatre" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:yashmhatre62@gmail.com">
              <SiGmail /></a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/yash-mhatre-7a7bb31a0" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          MY WEB STACK
        </h2>
        <div className="flex gap-4">
          <a href="javascript:void(0);" title='Java' className="bannerIcon">
            <FaJava />
          </a>
          <a href="javascript:void(0);" title='SpringBoot' className="bannerIcon">
            <SiSpringboot />
          </a>
          <a href="javascript:void(0);" title='React.js' className="bannerIcon">
            <FaReact />
          </a>
          <a href="javascript:void(0);" title='MySQL' className="bannerIcon">
            <SiMysql />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Media