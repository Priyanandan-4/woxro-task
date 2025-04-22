"use client"

import Lenis from "lenis"
import { useEffect, useRef } from "react"
import Image from "next/image"
import icon from "@/public/images/icon.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Cube from "@/components/cube"

export default function Home() {
  const containerRef = useRef(null)
  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const iconRef = useRef(null)
  const headingRef = useRef(null)
  const headingTextRef = useRef(null)
  const contentRef = useRef(null)
  const secondHeadingRef = useRef(null)
  const secondParagraphRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      autoRaf: true,
    })

    const ctx = gsap.context(() => {
      gsap.to(firstSectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "25% top",
          scrub: 1,
        },
      })

      gsap.to(iconRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "15% top",
          scrub: 1,
        },
      })

      gsap.to(headingTextRef.current, {
        opacity: 0,
        filter: "blur(8px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "15% top",
          scrub: 1,
        },
      })

      gsap.to(headingRef.current, {
        scale: 1.1,
        filter: "blur(8px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "15% top",
          scrub: 1,
        },
      })

      gsap.fromTo(
        [secondHeadingRef.current, secondParagraphRef.current],
        {
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "15% top",
            end: "35% top",
            scrub: 1,
          },
        },
      )

      gsap.to(secondSectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "175% top",
          end: "195% top",
          scrub: 1,
        },
      })
    })

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      ctx.revert()
      lenis.destroy()
    }
  }, [])

  const photos = [
    '/images/image-one.jpeg',
    '/images/image-two.jpeg',
    '/images/image-three.jpeg',
    '/images/image-four.jpeg',
    '/images/image-five.jpeg',
    '/images/image-six.jpeg',
  ]

  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 w-[150px] h-[150px]">
        <Cube
          size={150}
          rotationSpeed={0.02}
          photos={photos}
          className="z-50"
        />
      </div>
      <div ref={containerRef} className="h-auto w-full bg-[#331707] relative">
        <div
          ref={firstSectionRef}
          className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-[#331707] fixed top-0 left-0 z-10"
        >
          <div ref={iconRef} className="absolute top-42 sm:top-1.5 md:top-36 flex justify-center w-full">
            <Image
              src={icon || "/placeholder.svg"}
              alt="the website icon"
              className="w-80 h-80 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-contain"
              priority
            />
          </div>
          <div ref={headingRef} className="text-center mt-32 sm:mt-36 md:mt-44 lg:mt-48">
            <h1
              ref={headingTextRef}
              className="font-times text-[22px] sm:text-3xl md:text-5xl text-[#FFE9D9] leading-tight"
            >
              The first media company crafted <br />
              for the digital first generation.
            </h1>
          </div>
        </div>
        <div
          ref={secondSectionRef}
          className="w-full min-h-screen flex items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#331707] fixed top-0 left-0 z-5"
        >
          <div ref={contentRef} className="max-w-[90vw] xs:max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
            <h2
              ref={secondHeadingRef}
              className="text-[#FFE9D9] text-lg sm:text-xl md:text-2xl lg:text-3xl font-times mb-4"
            >
              Where innovation meets precision.
            </h2>
            <p
              ref={secondParagraphRef}
              className="text-[#FFE9D9] text-sm xs:text-base sm:text-lg md:text-xl lg:text-[20px] font-times leading-relaxed"
            >
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
        <div className="w-full h-[300vh]"></div>
        <div
          ref={thirdSectionRef}
          className="w-full h-screen bg-amber-100 flex justify-center items-center relative z-20"
        >
          <h1 className="text-amber-950 font-times text-2xl">next section</h1>
        </div>
      </div>
    </div>
  )
}