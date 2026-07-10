import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { memo, useRef } from "react"

import { StaggerContainerProps } from "@/types/Component"

const StaggerContainer = (props: StaggerContainerProps) => {
  const { children, className = "", performAction = true, staggerAmount = 0.3, id = "" } = props
  const mainContainerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      if (!mainContainerRef.current || !performAction) return
      const container = mainContainerRef.current
      const element = document.getElementById(id)
      const elements = gsap.utils.toArray<HTMLElement>(element?.children ?? container.children)

      gsap.fromTo(
        elements,
        {
          y: -10
        },
        {
          duration: 0.2,
          ease: "power3.out",
          opacity: 1,
          stagger: staggerAmount,
          y: 0
        }
      )
    },
    { dependencies: [performAction, children] }
  )

  return (
    <div
      className={className}
      ref={mainContainerRef}
    >
      {children}
    </div>
  )
}

export default memo(StaggerContainer)
