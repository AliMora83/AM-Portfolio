"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    source: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = useCallback(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);
  }, [items.length]);

  const pauseSlider = useCallback(() => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    startSlider();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", pauseSlider);
      container.addEventListener("mouseleave", startSlider);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", pauseSlider);
        container.removeEventListener("mouseleave", startSlider);
      }
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [startSlider, pauseSlider]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out cursor-pointer"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          width: `${items.length * (100 / 3)}%`,
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="w-[30%] px-4 flex-shrink-0">
            <div
              className="rounded-2xl border border-b-0 border-slate-800 p-5 md:p-16 h-full"
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3">
                    <Image
                      src={item.source}
                      alt="image"
                      width={50}
                      height={50}
                    />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
