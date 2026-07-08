import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

import { CommonButton, HeadingComponent } from "@/components"
import { English } from "@/helpers"

gsap.registerPlugin(SplitText)

const HeroSection = () => {
    useGSAP(
        () => {
            const textSplitter = SplitText.create("#identifier", { type: "words" })
            const textSplitter2 = SplitText.create("#description", { type: "words" })
            const timeLine = gsap.timeline({
                defaults: {
                    ease: "power2.inOut"
                }
            })
            textSplitter.words?.forEach(item => {
                timeLine.set(item, { opacity: 0, y: -30 })
            })
            textSplitter2.words?.forEach(item => {
                timeLine.set(item, { opacity: 0, x: -30 })
            })
            const elements = document.querySelectorAll(".hero_text")
            const btnElements = document.querySelectorAll(".hero_btn")
            timeLine.set(btnElements, { opacity: 0, y: -30 })
            timeLine.fromTo(
                elements,
                {
                    x: "-100%"
                },
                {
                    duration: 1.5,
                    stagger: 0.06,
                    x: 0
                }
            )
            timeLine.to(textSplitter.words, {
                duration: 0.19,
                opacity: 1,
                stagger: 0.04,
                y: 0
            })
            timeLine.to(
                textSplitter2.words,
                {
                    duration: 0.19,
                    opacity: 1,
                    stagger: 0.04,
                    x: 0
                },
                "-=0.05"
            )
            timeLine.to(btnElements, {
                duration: 0.5,
                opacity: 1,
                stagger: 0.3,
                y: 0
            }, "-=0.05")
        },
        { dependencies: [] }
    )

    return (
        <section
            className="space-y-12 relative pt-20 h-screen"
            id="hero"
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
                className="h3_heading text-secondary-light tracking-wide"
                id="identifier"
            >
                Frontend Engineer • React • TypeScript • Web3
            </h1>

            <p
                className="normal_body text-secondary-light sm:max-w-md"
                id="description"
            >
                Building fast, interactive and scalable web applications with React, TypeScript, GSAP and
                Web3.
            </p>

            <div className="flex  gap-5 flex-row flex-wrap sm:items-center max-w-lg sm:w-fit *:w-fit">
                <CommonButton
                    buttonContent="View Projects"
                    className="hero_btn flex-1 whitespace-nowrap"
                />
                <CommonButton
                    buttonContent="Download"
                    className="hero_btn flex-1 whitespace-nowrap"
                />
            </div>
        </section>
    )
}

export default HeroSection
