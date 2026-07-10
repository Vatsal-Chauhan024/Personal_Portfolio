import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"

import { Images } from "@/helpers"

gsap.registerPlugin(SplitText)

const SplashScreen = (props: { OnComplete: () => void }) => {
  const { OnComplete } = props
  const containerRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const shineRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !glowRef.current ||
        !shineRef.current ||
        !logoRef.current ||
        !titleRef.current ||
        !subtitleRef.current ||
        !progressRef.current
      )
        return

      const split = SplitText.create(titleRef.current, {
        type: "words, chars"
      })
      const subtitleSplit = SplitText.create(subtitleRef.current, {
        type: "words, chars"
      })

      gsap.set(progressRef.current, {
        scaleX: 0,
        transformOrigin: "left center"
      })

      gsap.set(shineRef.current, {
        x: -40
      })
      gsap.set(split.chars, {
        opacity: 0,
        y: 30
      })
      gsap.set(subtitleSplit.chars, {
        filter: "blur(12px)",
        opacity: 0,
        rotateX: 60,
        scale: 2,
        z: -500
      })

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out"
        },
        onComplete: () => OnComplete()
      })

      tl.from(containerRef.current, {
        duration: 0.3,
        scale: 0
      })
      tl.fromTo(
        glowRef.current,
        {
          scale: 0.6
        },
        {
          duration: 0.5,
          ease: "power2.out",
          opacity: 1,
          scale: 1
        },
        0
      ).to(
        glowRef.current,
        {
          duration: 2,
          ease: "sine.inOut",
          scale: 1
        },
        "<"
      )
      tl.from(
        logoRef.current,
        {
          duration: 0.5,
          ease: "back.out(2)",
          filter: "blur(10px)",
          opacity: 0,
          rotate: -20,
          scale: 0.3
        },
        "-=0.8"
      )
        .fromTo(
          split.chars,
          {
            filter: "blur(8px)",
            opacity: 0,
            rotateX: -90,
            y: 60
          },
          {
            duration: 0.7,
            filter: "blur(0px)",
            opacity: 1,
            rotateX: 0,
            stagger: {
              each: 0.035,
              from: "center"
            },
            y: 0
          },
          "-=0.4"
        )
        .fromTo(
          subtitleSplit.chars,
          {
            filter: "blur(12px)",
            opacity: 0,
            rotateX: 60,
            scale: 2,
            z: -500
          },
          {
            duration: 0.9,
            ease: "power4.out",
            filter: "blur(0px)",
            opacity: 1,
            rotateX: 0,
            scale: 1,
            stagger: {
              each: 0.03,
              from: "center"
            },
            z: 0
          },
          "-=0.2"
        )
        .to(progressRef.current, {
          duration: 1.3,
          ease: "power2.out",
          scaleX: 1
        })
        .to(
          shineRef.current,
          {
            duration: 1.3,
            ease: "none",
            x: 220
          },
          "<"
        )
        .to({}, { duration: 0.2 })
        .to(containerRef.current, {
          duration: 1,
          ease: "power4.inOut",
          yPercent: -100
        })
    },
    { dependencies: [] }
  )

  return (
    <div
      className="fixed inset-0 z-999 bg-background"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.15),transparent_65%)] rounded-full"
        ref={glowRef}
      />

      <div className="flex h-full flex-col items-center justify-center">
        <img
          alt="error-logo"
          className="w-24"
          loading="lazy"
          ref={logoRef}
          src={Images.logo}
        />

        <h1
          className="hero_title text-center"
          ref={titleRef}
        >
          VATSAL CHAUHAN
        </h1>

        <p
          className="h2_heading mt-5 text-center"
          ref={subtitleRef}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          Frontend Developer
        </p>

        <div className="relative mt-10 h-0.5 w-52 overflow-hidden rounded-full bg-white/10">
          <div
            className="absolute inset-0 origin-left rounded-full bg-primary"
            ref={progressRef}
          />

          <div
            className="absolute top-0 left-0 h-full w-10 bg-white/70 blur-md"
            ref={shineRef}
          />
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
