import React from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { BsPersonLinesFill } from "react-icons/bs";
import { SiLibreofficewriter } from "react-icons/si";
import { SiOnlyoffice } from "react-icons/si";
const Services = () => {
  return (
    <div className="mt-[20px] p-[10px]">
      <p className="lg:text-3xl xs:text-xl poppins-semibold text-center">
        We built our business on customer service
      </p>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 xs:grid-cols-1 xs:grid-rows-1 gap-[20px] mt-[40px]">
        <div className="flex justify-center items-center">
          <div className="bg-slate-50 h-[40vh] xs:w-[100vw] gap-[10px] lg:w-[30vw] rounded shadow-sm flex justify-center items-center flex-col">
           <GoProjectRoadmap className="text-4xl text-blue-950" />
            <p className="poppins-regular text-blue-950">Get Career roadmap</p>
            <p className="w-[80%] text-center mt-[5px] poppins-extralight text-slate-400">
              Upload your CV for review analysis and initial feedback on key
              skills and experience.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-slate-50 h-[40vh] xs:w-[100vw] gap-[10px] lg:w-[30vw] rounded shadow-sm flex justify-center items-center flex-col">
          <BsPersonLinesFill className="text-4xl text-blue-950" />
            <p className="poppins-regular text-center text-blue-950">
              Get real experience with expert guidance
            </p>
            <p className="w-[80%] text-center mt-[5px] poppins-extralight text-slate-400">
              We take you into the real world of how to do in your chosen career
              beyond the theory knowledge.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-slate-50 h-[40vh] xs:w-[100vw] gap-[10px] lg:w-[30vw] rounded shadow-sm flex justify-center items-center flex-col">
          < SiLibreofficewriter className="text-4xl text-blue-950" />
            <p className="poppins-regular text-blue-950">
              Simulated Interview Session
            </p>
            <p className="w-[80%] text-center mt-[5px] poppins-extralight text-slate-400">
              Practice answering both behavioral and technical interview
              questions in a safe and supportive environment.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-slate-50 h-[40vh] gap-[10px] xs:w-[100vw] lg:w-[30vw] rounded shadow-sm flex justify-center items-center flex-col">
          <SiOnlyoffice className="text-4xl text-blue-950" />
            <p className="poppins-regular text-blue-950">Land the Job</p>
            <p className="w-[80%] text-center mt-[5px] poppins-extralight text-slate-400">
              Track your job applications and schedule interviews with ease
              using our automated and streamlined platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
