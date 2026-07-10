import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useCallback, useRef } from "react"

import { CommonButton, HeadingComponent } from "@/components"
import { English } from "@/helpers"

gsap.registerPlugin(SplitText)

const HeroSection = ({ start }: { start: boolean }) => {
  const containerRef = useRef<HTMLElement | null>(null)

  const onPressBtn = useCallback((id: "projects" | "contact_us") => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop - 80
      })
    }
  }, [])

  useGSAP(
    () => {
      if (!start || !containerRef.current) return

      const identifier = containerRef.current.querySelector("#identifier")
      const description = containerRef.current.querySelector("#description")

      if (!identifier || !description) return

      const titleSplit = SplitText.create(identifier, {
        type: "words"
      })

      const descriptionSplit = SplitText.create(description, {
        type: "words"
      })

      const heroTexts = gsap.utils.toArray<HTMLElement>(".hero_text")
      const buttons = gsap.utils.toArray<HTMLElement>(".hero_btn")

      // Initial State
      gsap.set(containerRef.current, {
        autoAlpha: 0
      })

      gsap.set(heroTexts, {
        x: "-100%"
      })

      gsap.set(buttons, {
        opacity: 0,
        y: 30
      })

      gsap.set(titleSplit.words, {
        opacity: 0,
        y: -30
      })

      gsap.set(descriptionSplit.words, {
        opacity: 0,
        x: -30
      })

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out"
        }
      })

      tl.to(
        containerRef.current,
        {
          autoAlpha: 1,
          duration: 0.3
        },
        0
      )

        .to(
          heroTexts,
          {
            duration: 1.3,
            stagger: 0.08,
            x: 0
          },
          0
        )

        .to(
          titleSplit.words,
          {
            duration: 0.25,
            opacity: 1,
            stagger: 0.05,
            y: 0
          },
          "-=0.6"
        )

        .to(
          descriptionSplit.words,
          {
            duration: 0.25,
            opacity: 1,
            stagger: 0.04,
            x: 0
          },
          "-=0.1"
        )

        .to(
          buttons,
          {
            duration: 0.5,
            opacity: 1,
            stagger: 0.15,
            y: 0
          },
          "-=0.1"
        )

      return () => {
        titleSplit.revert()
        descriptionSplit.revert()
      }
    },
    {
      dependencies: [start],
      scope: containerRef
    }
  )

  return (
    <section
      className="relative h-screen space-y-12 pb-20"
      id="hero"
      ref={containerRef}
      style={{
        visibility: start ? "visible" : "hidden"
      }}
    >
      <div>
        <HeadingComponent
          className="hero_text linear_gradient_utility bg-clip-text text-transparent"
          heading_variant="hero"
          singleLineContent={English.E3}
        />

        <HeadingComponent
          className="hero_text linear_gradient_utility bg-clip-text text-transparent"
          heading_variant="hero"
          singleLineContent={English.E8}
        />
      </div>

      <h1
        className="h3_heading tracking-wide text-secondary-light"
        id="identifier"
      >
        • React • TypeScript • Web3
      </h1>

      <p
        className="normal_body text-secondary-light sm:max-w-md"
        id="description"
      >
        Building fast, interactive and scalable web applications with React, TypeScript, GSAP and
        Web3.
      </p>

      <div className="flex max-w-lg flex-col gap-5 *:w-fit sm:w-fit sm:flex-row sm:items-center">
        <CommonButton
          buttonContent="View Projects"
          className="hero_btn small_text! font-bold! h-16! sm:whitespace-nowrap opacity-0 translate-y-8"
          onClick={() => onPressBtn("projects")}
        />

        <CommonButton
          buttonContent="Contact Me"
          className="hero_btn small_text! font-bold! h-16! sm:whitespace-nowrap opacity-0 translate-y-8"
          onClick={() => onPressBtn("contact_us")}
        />
      </div>
    </section>
  )
}

export default HeroSection
