import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

import { Images } from "@/helpers"
import ImageComponent from "../ImageComponent/ImageComponent"
import OpacityContainer from "../OpacityContainer/OpacityContainer"
import NavComponent from "./NavComponent"

const MenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const overlayRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const timeLineRef = useRef<GSAPTimeline | null>(null)

  useGSAP(() => {
    if (!overlayRef.current || !closeBtnRef.current) return

    const items = document.getElementById("stagger_elements")
    const childrenElement = items?.children

    if (!childrenElement) return

    gsap.set(childrenElement, {
      opacity: 0
    })

    gsap.set(overlayRef.current, {
      height: 0,
      opacity: 0,
      width: 0
    })

    gsap.set(closeBtnRef.current, {
      opacity: 0,
      scale: 0
    })

    timeLineRef.current = gsap.timeline({
      defaults: {
        ease: "power2.inOut"
      },
      paused: true
    })

    timeLineRef.current
      .to(overlayRef.current, {
        duration: 0.8,
        height: "100vh",
        opacity: 1,
        width: "100vw"
      })
      .to(
        closeBtnRef.current,
        {
          delay: 0.1,
          duration: 0.5,
          opacity: 1,
          scale: 1
        },
        "-=0.15"
      )
      .to(
        childrenElement,
        {
          duration: 0.6,
          opacity: 1,
          stagger: 0.08,
          y: 0
        },
        "-=0.1"
      )
  }, [])

  useGSAP(
    () => {
      if (!timeLineRef.current) return

      if (isMenuOpen) {
        timeLineRef.current.play()
      } else {
        timeLineRef.current.reverse()
      }
    },
    {
      dependencies: [isMenuOpen]
    }
  )

  return (
    <>
      <button
        className="flex cursor-pointer items-center justify-center"
        onClick={e => {
          e.stopPropagation()
          setIsMenuOpen(true)
        }}
        type="button"
      >
        <OpacityContainer>
          <ImageComponent
            className="[&>img]:size-10 [&>img]:white__filter"
            imgUrl={Images.menu}
          />
        </OpacityContainer>
      </button>

      <div
        className="fixed top-0 right-0 z-50  overflow-hidden bg-background-secondary"
        ref={overlayRef}
      >
        <button
          className="absolute top-8 right-8 "
          onClick={() => setIsMenuOpen(false)}
          ref={closeBtnRef}
          type="button"
        >
          <ImageComponent
            className="[&>img]:size-8 [&>img]:white__filter"
            imgUrl={Images.close}
          />
        </button>

        <NavComponent
          className="flex h-screen w-screen flex-col items-center justify-center gap-6"
          onLinkClick={() => {
            setIsMenuOpen(false)
          }}
        />
      </div>
    </>
  )
}

export default MenuBtn
