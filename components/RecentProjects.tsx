/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div
        className="w-full flex space-x-5  
        snap-x snap-mandatory overflow-x-scroll p-10
        scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-[#8b56a6]"
      >
        {projects.map((item) => (
          <div
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[350px] md:w-[500px] xl:w-[500px] snap-center bg-[#0f0e0e] p-10 hover:opacity-100
                        opacity-40 transition-opacity duration-200 overflow-hidden"
            key={item.id}
          >
            <div className="">
              <a href={item.link} target="_blank">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 transform transition duration-300 hover:scale-105"
                  />
                </div>
              </a>
              <a href={item.link} target="_blank">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 hover:text-blue-400">
                  {item.title}
                </h1>
              </a>
              <p
                className="font-light text-sm line-clamp-2 text-slate-400"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                  
                <a href={item.link} target="_blank" className="group">
                  <div className="flex justify-center items-center group-hover:scale-105 group-hover:border group-hover:border-white/[.2] rounded-lg bg-black p-3">
                
                    <p className="flex text-xs group-hover:text-[#f2f2f2] text-blue-400 group-hover:font-semibold">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3 group-hover:text-[#f2f2f2] text-blue-400" />
                  </div>
                </a>
                    
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
