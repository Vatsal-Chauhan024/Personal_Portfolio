import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import { InViewSplitTextProps } from "@/types/Component"

gsap.registerPlugin(ScrollTrigger, SplitText)

const InViewSplitText = (props: InViewSplitTextProps) => {
    const { children, id, type, position, timeLine } = props
    useGSAP(
        () => {
            const element = document.getElementById(id)

            if (!element) return

            const split = SplitText.create(element, {
                type,

            })
            const itemToSplit = split?.[type]

            const tl = gsap.timeline({
                scrollTrigger: {
                    scroller: "#scroller",
                    start: "top 95%",
                    toggleActions: "play none none reverse",
                    trigger: element
                }
            })
            const timeLineToUse = timeLine ?? tl

            timeLineToUse.fromTo(
                itemToSplit,
                {
                    opacity: 0,
                    x: -30
                },
                {
                    duration: 1,
                    opacity: 1,
                    stagger: 0.05,
                    x: 0
                }, position
            )

            timeLineToUse.to(
                element,
                {
                    "--underline-width": "100%",
                    duration: 0.4,
                    ease: "power2.out"
                },
                "-=0.4"
            )
        },
        { dependencies: [id] }
    )

    return children
}

export default InViewSplitText
