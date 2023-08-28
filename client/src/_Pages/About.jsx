import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-[50vh]">
      <h1 className="text-[1.3rem] truncate lg:text-[2rem] font-semibold my-10">
        Connect With Me
      </h1>

      <div className="flex justify-around items-center w-[80%] lg:w-[20%] text-[1.2rem] lg:text-[2rem] mb-8">
        <a href="mailto:gauravgupta742002@gmail.com">
          <AiOutlineMail className="text-red-500" />
        </a>

        <a
          href="https://www.linkedin.com/in/gaurav-gupta-b14482231/"
          className="text-sky-600"
        >
          <BsLinkedin />
        </a>

        <a href="https://github.com/Gaurav200247">
          <BsGithub />
        </a>
      </div>

      <h1 className="font-medium text-[1rem] truncate lg:text-[2rem] duration-300">
        Check Out My{" "}
        <a
          href="https://drive.google.com/file/d/1N71GH8Nr8UWdo7CpAEt5t4kK0qBs2nB5/view"
          className="font-semibold underline hover:text-purple-600 text-blue-600"
        >
          Resume
        </a>
      </h1>
    </div>
  );
};

export default About;
