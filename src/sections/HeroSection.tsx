import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

import { HeadingComponent } from "@/components"
import { English } from "@/helpers"

gsap.registerPlugin(SplitText)

const HeroSection = () => {
    useGSAP(
        () => {
            const textSplitter = SplitText.create("#identifier", { type: "words" })
            const timeLine = gsap.timeline({
                defaults: {
                    ease: "power2.inOut"
                }
            })
            textSplitter.words?.forEach(item => {
                timeLine.set(item, { opacity: 0, y: -30 })
            })
            const elements = document.querySelectorAll(".hero_text")
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

            textSplitter.words.forEach(item => {
                timeLine.to(item, {
                    duration: 0.19,
                    opacity: 1,
                    stagger: 0.04,
                    y: 0
                })
            })
        },
        { dependencies: [] }
    )

    return (
        <section
            className="space-y-8"
            id="hero"
        >
            <div>
                <HeadingComponent
                    className="hero_text"
                    heading_variant="hero"
                    singleLineContent={English.E3}
                />
                <HeadingComponent
                    className="hero_text"
                    heading_variant="hero"
                    singleLineContent={English.E8}
                />
            </div>
            <h1
                className="h3_heading text-secondary-light tracking-wide"
                id="identifier"
            >
                Hi, I am <strong>Vatsal Chauhan</strong>
            </h1>
        </section>
    )
}

export default HeroSection
