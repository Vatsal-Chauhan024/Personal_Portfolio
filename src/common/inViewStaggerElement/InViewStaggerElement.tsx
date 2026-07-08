import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

import { InViewStaggerElementProps } from "@/types/Component"

gsap.registerPlugin(ScrollTrigger)

const InViewStaggerElement = (props: InViewStaggerElementProps) => {
    const { children, id, position, timeLine, duration, staggerAmount } = props
    useGSAP(
        () => {
            const element = document.getElementById(id)
            const childrens = element?.children


            if (!element || !childrens) return
            const elementsToStagger = gsap.utils.toArray(childrens)

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
                elementsToStagger,
                {
                    opacity: 0,
                    y: -30
                },
                {
                    duration: duration ?? 0.19,
                    opacity: 1,
                    stagger: staggerAmount ?? 0.3,
                    y: 0
                }, position
            )
        },
        { dependencies: [id] }
    )

    return children
}

export default InViewStaggerElement
