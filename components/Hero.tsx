import React, { useState, useCallback } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Lottie from "react-lottie";
import animationData from "@/data/codespace.json";
import animationDataCon from "@/data/confetti.json";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [playConfetti, setPlayConfetti] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const confettiOptions = {
    loop: false,
    autoplay: false,
    animationData: animationDataCon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [text] = useTypewriter({
    words: [
      `🏆 I am Ali Mora, welcome 🏆`,
      "Consult_Design+Code.tsx",
      "<And-Loves-Traveling />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const handleCodespaceClick = useCallback(() => {
    setPlayConfetti(true);
    setTimeout(() => setPlayConfetti(false), 2500); // Reset after animation ends
  }, []);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10 -mt-10">
        <div className="md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="relative">
            {playConfetti && (
              <div className="absolute inset-0 z-0">
                <Lottie options={confettiOptions} height={600} width={600} />
              </div>
            )}
            <div
              className="relative z-10 cursor-pointer"
              onClick={handleCodespaceClick}
            >
              <Lottie options={defaultOptions} height={280} width={280} />
            </div>
          </div>
          <div className="md:my-12 my-6">
            <h1 className="text-xl lg:text-6xl font-semibold md:px-10">
              <span className="mr-3 text-white">{text}</span>
              <Cursor cursorColor="#5E2BB4" />
            </h1>
          </div>

          <p className="text-center md:tracking-wider mb-4 text-xs md:text-lg text-slate-400">
            Software Developer from South Africa
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
