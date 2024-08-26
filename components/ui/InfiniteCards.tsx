/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    source: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 60;
      case "normal":
        return 40;
      case "fast":
        return 20;
      default:
        return 60;
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      const totalWidth = scrollerContent.reduce(
        (acc, item) => acc + item.clientWidth,
        0
      );

      const animationDuration = totalWidth / getSpeed();
      const directionValue = direction === "left" ? "-" : "+";

      if (scrollerRef.current) {
        scrollerRef.current.setAttribute(
          "style",
          `--animation-duration: ${animationDuration}s; --animation-direction: ${directionValue}`
        );
      }

      setStart(true);
    }
  }, [direction, getSpeed]);

  useEffect(() => {
    addAnimation();
    window.addEventListener("resize", addAnimation);
    return () => {
      window.removeEventListener("resize", addAnimation);
    };
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-slide",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <Image src={item.source} alt="image" />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                  <span className="text-sm text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
