"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import Image from "next/image";
import icon from "@/public/images/icon.svg";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="h-auto w-full bg-[#331707]">
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative px-4 bg-[#331707]">
  <div className="absolute top-42 md:top-36  flex justify-center w-full">
    <Image 
      src={icon} 
      alt="the website icon" 
      className="w-80 h-80 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-contain"
    />
  </div>
  <div className="text-center mt-32 sm:mt-36 md:mt-44 lg:mt-48">
    <h1 className="font-times text-2xl sm:text-3xl md:text-5xl  text-[#FFE9D9] leading-tight">
      The first media company crafted <br />
      for the digital first generation.
    </h1>
  </div>
</div>

      <div className="flex items-center justify-center w-full min-h-screen text-center px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[90vw] xs:max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
          <h2 className="text-[#FFE9D9] text-lg sm:text-xl md:text-2xl lg:text-3xl font-times mb-4">
            Where innovation meets precision.
          </h2>
          <p className="text-[#FFE9D9] text-sm xs:text-base sm:text-lg md:text-xl lg:text-[20px] font-times leading-relaxed">
            <span className="inline md:hidden">
              Symphonia unites visionary thinkers, creative architects and analytical experts, collaborating seamlessly
              to transform challenges into opportunities. Together, we deliver tailored solutions that drive impact and
              inspire growth.
            </span>
            <span className="hidden md:inline">
              Symphonia unites visionary thinkers, creative architects
              <br />
              and analytical experts, collaborating seamlessly to
              <br />
              transform challenges into opportunities. Together, we
              <br />
              deliver tailored solutions that drive impact and inspire
              <br />
              growth.
            </span>
          </p>
        </div>
      </div>
      <div className="w-full h-screen bg-amber-100 flex  justify-center items-center">
<h1 className="text-shadow-amber-950 font-times text-2xl">NEXT SECTION</h1>
      </div>
    </div>
  );
}