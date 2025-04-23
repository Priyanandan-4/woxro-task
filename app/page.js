"use client"

import Lenis from "lenis"
import { useEffect, useRef, forwardRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Cube component with forwardRef
const Cube = forwardRef(({ id, images }, ref) => {
  return (
    <div ref={ref} className={`cube ${id} absolute w-[150px] h-[150px]`} style={{ transformStyle: "preserve-3d" }}>
      <div
        className="front absolute w-[150px] h-[150px]"
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
      >
        <img src={images[0] || "/placeholder.svg"} alt="Cube Face" className="w-full h-full object-cover" />
      </div>
      <div
        className="back absolute w-[150px] h-[150px]"
        style={{ transform: "translateZ(-75px) rotateY(180deg)", transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
      >
        <img src={images[1] || "/placeholder.svg"} alt="Cube Face" className="w-full h-full object-cover" />
      </div>
      <div
        className="right absolute w-[150px] h-[150px]"
        style={{ transform: "translateX(75px) rotateY(90deg)", transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
      >
        <img src={images[2] || "/placeholder.svg"} alt="Cube Face" className="w-full h-full object-cover" />
      </div>
      <div
        className="left absolute w-[150px] h-[150px]"
        style={{ transform: "translateX(-75px) rotateY(-90deg)", transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
      >
        <img src={images[3] || "/placeholder.svg"} alt="Cube Face" className="w-full h-full object-cover" />
      </div>
      <div
        className="top absolute w-[150px] h-[150px]"
        style={{ transform: "translateY(-75px) rotateX(90deg)", transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
      >
        <img src={images[4] || "/placeholder.svg"} alt="Cube Face" className="w-full h-full object-cover" />
      </div>
      <div
        className="bottom absolute w-[150px] h-[150px]"
        style={{ transform: "translateY(75px) rotateX(-90deg)", transformStyle: "preserve-3d", backfaceVisibility: "visible" }}
      >
        <img src={images[5] || "/placeholder.svg"} alt="Cube Face" className="w-full h-full object-cover" />
      </div>
    </div>
  )
})
Cube.displayName = "Cube"

// Cubes data with adjusted final positions
const cubesData = {
  "cube-1": {
    initial: { top: -55, left: 37.5, rotateX: 360, rotateY: -360, rotateZ: -48, z: -30000 },
    final: { top: 18, left: 15, rotateX: 0, rotateY: 3, rotateZ: 0, z: 0 },
  },
  "cube-2": {
    initial: { top: -35, left: 32.5, rotateX: -360, rotateY: 360, rotateZ: 90, z: -30000 },
    final: { top: 42, left: 25, rotateX: 1, rotateY: 2, rotateZ: 0, z: 0 },
  },
  "cube-3": {
    initial: { top: -65, left: 50, rotateX: -360, rotateY: -360, rotateZ: -180, z: -30000 },
    final: { top: -8, left: 25, rotateX: -1, rotateY: 2, rotateZ: 0, z: 0 },
  },
  "cube-4": {
    initial: { top: -35, left: 50, rotateX: -360, rotateY: -360, rotateZ: -180, z: -30000 },
    final: { top: 42, left: 75, rotateX: 1, rotateY: -2, rotateZ: 0, z: 0 },
  },
  "cube-5": {
    initial: { top: -55, left: 62.5, rotateX: 360, rotateY: 360, rotateZ: -135, z: -30000 },
    final: { top: -8, left: 75, rotateX: -1, rotateY: -2, rotateZ: 0, z: 0 },
  },
  "cube-6": {
    initial: { top: -35, left: 67.5, rotateX: -180, rotateY: -360, rotateZ: -180, z: -30000 },
    final: { top: 18, left: 85, rotateX: 0, rotateY: -3, rotateZ: 0, z: 0 },
  },
}

// Define unique image sets for each cube
const cubeImageSets = {
  "cube-1": [
    "/images/cubeone/oneimg.jpg",
    "/images/cubeone/twoimg.jpg",
    "/images/cubeone/threeimg.jpg",
    "/images/cubeone/fourimg.jpg",
    "/images/cubeone/fiveimg.jpg",
    "/images/cubeone/sixim.jpg",
  ],
  "cube-2": [
    "/images/cubetwo/imageOne.jpeg",
    "/images/cubetwo/imageTwo.jpeg",
    "/images/cubetwo/imageThree.jpeg",
    "/images/cubetwo/imageFour.jpeg",
    "/images/cubetwo/imageFive.jpeg",
    "/images/cubetwo/imagesiz.jpeg",
  ],
  "cube-3": [
    "/images/cubethree/img1.jpeg",
    "/images/cubethree/img2.jpeg",
    "/images/cubethree/img3.jpeg",
    "/images/cubethree/img4.jpeg",
    "/images/cubethree/img5.jpeg",
    "/images/cubethree/img6.jpeg",
  ],
  "cube-4": [
    "/images/cubefour/oneimage.jpg",
    "/images/cubefour/twoimage.jpg",
    "/images/cubefour/threeimage.jpg",
    "/images/cubefour/fourimage.jpg",
    "/images/cubefour/fiveimage.jpg",
    "/images/cubefour/siximage.jpg",
  ],
  "cube-5": [
    "/images/cubefive/image-one.jpeg",
    "/images/cubefive/image-two.jpeg",
    "/images/cubefive/image-three.jpeg",
    "/images/cubefive/image-four.jpeg",
    "/images/cubefive/image-five.jpeg",
    "/images/cubefive/image-six.jpeg",
  ],
  "cube-6": [
    "/images/cubesix/one-img.jpg",
    "/images/cubesix/two-img.jpg",
    "/images/cubesix/three-img.jpg",
    "/images/cubesix/four-img.jpg",
    "/images/cubesix/five-img.jpg",
    "/images/cubesix/six-img.jpg",
  ],
}

export default function Home() {
  const containerRef = useRef(null)
  const stickyRef = useRef(null)
  const logoRef = useRef(null)
  const cubesContainerRef = useRef(null)
  const header1Ref = useRef(null)
  const header2Ref = useRef(null)
  const cubeRefs = useRef({})

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    const interpolate = (start, end, progress) => start + (end - start) * progress

    const ctx = gsap.context(() => {
      const stickyHeight = window.innerHeight * 4

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${stickyHeight}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Logo animation
          const initialProgress = Math.min(self.progress * 20, 1)
          gsap.set(logoRef.current, {
            filter: `blur(${interpolate(0, 20, initialProgress)}px)`,
            opacity: 1 - (self.progress >= 0.02 ? Math.min((self.progress - 0.02) * 100, 1) : 0),
          })

          // Cubes container opacity
          gsap.set(cubesContainerRef.current, {
            opacity: self.progress > 0.01 ? Math.min((self.progress - 0.01) * 100, 1) : 0,
          })

          // First heading animation
          const header1Progress = Math.min(self.progress * 2.5, 1)
          gsap.set(header1Ref.current, {
            transform: `translate(-50%, -50%) scale(${interpolate(1, 1.5, header1Progress)})`,
            filter: `blur(${interpolate(0, 20, header1Progress)}px)`,
            opacity: 1 - header1Progress,
          })

          // Second heading animation with fade-out
          const header2StartProgress = (self.progress - 0.4) * 10
          const header2Progress = Math.max(0, Math.min(header2StartProgress, 1))
          const header2FadeOutProgress = self.progress >= 0.9 ? (self.progress - 0.9) * 10 : 0
          gsap.set(header2Ref.current, {
            transform: `translate(-50%, -50%) scale(${interpolate(0.75, 1, header2Progress)})`,
            filter: `blur(${interpolate(10, 0, header2Progress)}px)`,
            opacity: header2Progress - header2FadeOutProgress,
          })

          // Cube animations
          const firstPhaseProgress = Math.min(self.progress * 2, 1)
          const secondPhaseProgress = self.progress >= 0.5 ? (self.progress - 0.5) * 2 : 0

          Object.entries(cubesData).forEach(([cubeClass, data]) => {
            const cube = cubeRefs.current[cubeClass]
            if (!cube) return

            const { initial, final } = data
            const currentTop = interpolate(initial.top, final.top, firstPhaseProgress)
            const currentLeft = interpolate(initial.left, final.left, firstPhaseProgress)
            const currentRotateX = interpolate(initial.rotateX, final.rotateX, firstPhaseProgress)
            const currentRotateY = interpolate(initial.rotateY, final.rotateY, firstPhaseProgress)
            const currentRotateZ = interpolate(initial.rotateZ, final.rotateZ, firstPhaseProgress)
            const currentZ = interpolate(initial.z, final.z, firstPhaseProgress)

            let additionalRotation = 0
            if (cubeClass === "cube-2") {
              additionalRotation = interpolate(0, 180, secondPhaseProgress)
            } else if (cubeClass === "cube-4") {
              additionalRotation = interpolate(0, -180, secondPhaseProgress)
            }

            gsap.set(cube, {
              top: `${currentTop}%`,
              left: `${currentLeft}%`,
              transform: `
                translate3d(-50%, -50%, ${currentZ}px)
                rotateX(${currentRotateX}deg)
                rotateY(${currentRotateY + additionalRotation}deg)
                rotateZ(${currentRotateZ}deg)
              `,
            })
          })
        },
      })

      // Pin cubes in second heading section
      ScrollTrigger.create({
        trigger: header2Ref.current,
        start: "40% top",
        end: "200% top",
        pin: cubesContainerRef.current,
        pinSpacing: false,
      })
    })

    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      ctx.revert()
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative w-screen overflow-hidden">
      <div ref={containerRef} className="h-auto bg-[#331707]">
        <section ref={stickyRef} className="sticky top-0 w-full h-screen bg-[#331707] text-[#FFE9D9] overflow-hidden">
          {/* Logo */}
          <div
            ref={logoRef}
            className="absolute top-64 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-12 md:gap-6 z-10"
          >
            <div className="flex flex-col justify-end">
              <div className="w-[80px] h-[75px] md:w-[35px] md:h-[35px] bg-[#FFE9D9] origin-bottom-right rotate-45"></div>
              <div className="w-[80px] h-[80px] md:w-[35px] md:h-[35px] bg-[#FFE9D9]"></div>
            </div>
            <div className="flex flex-col justify-end gap-12 md:gap-6">
              <div className="w-[80px] h-[80px] md:w-[35px] md:h-[35px] bg-[#FFE9D9]"></div>
              <div className="w-[80px] h-[80px] md:w-[35px] md:h-[35px] bg-[#FFE9D9]"></div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="w-[80px] h-[80px] md:w-[35px] md:h-[35px] bg-[#FFE9D9] origin-bottom-left -rotate-45"></div>
              <div className="w-[80px] h-[80px] md:w-[35px] md:h-[35px] bg-[#FFE9D9]"></div>
            </div>
          </div>
          {/* Cubes Container */}
          <div
            ref={cubesContainerRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ transformStyle: "preserve-3d", perspective: "10000px" }}
          >
            {Object.keys(cubesData).map((cubeClass) => (
              <Cube
                key={cubeClass}
                id={cubeClass}
                images={cubeImageSets[cubeClass]}
                ref={(el) => (cubeRefs.current[cubeClass] = el)}
              />
            ))}
          </div>
          {/* First Heading */}
          <div
            ref={header1Ref}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-4/5 md:w-3/5 text-center"
          >
            <h1 className="font-serif text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              The first media company crafted for the digital-first generation.
            </h1>
          </div>
          {/* Second Heading */}
          <div
            ref={header2Ref}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 xs:w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 text-center opacity-0 px-4 py-2"
          >
            <h2 className="font-serif text-xl xs:text-xl sm:text-2xl md:text-3xl mb-2 whitespace-normal xs:whitespace-pre-wrap sm:whitespace-normal">
              <span className="block xs:inline sm:inline">Where innovation</span>{" "}
              <span className="block xs:block sm:inline">meets precision.</span>
            </h2>
            <p className="font-serif text-[12px] xs:text-base sm:text-lg md:text-xl font-light">
              Symphonia unites visionary thinkers, creative architects, and analytical experts, collaborating seamlessly
              to transform challenges into opportunities. Together, we deliver tailored solutions that drive impact and
              inspire growth.
            </p>
          </div>
        </section>
        {/* Spacer */}
        <div className="w-screen h-[100vh] bg-[#d0bcac] text-[#331707] relative text-3xl md:text-7xl font-times flex justify-center overflow-hidden">
          <h1 className="absolute top-[50%] md:top-80">next section</h1>
        </div>
      </div>
    </div>
  )
}