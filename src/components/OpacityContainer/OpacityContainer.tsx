import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { memo, useRef } from "react"

import { OpacityContainerProps } from "@/types/Component"

const OpacityContainer = (props: OpacityContainerProps) => {
  const { onCompleteAnimation, className = "", children, from, to, duration = 1 } = props
  const opacityContainerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (!opacityContainerRef.current) return

    gsap.fromTo(
      opacityContainerRef.current,
      {
        opacity: 0,
        ...from
      },
      {
        duration,
        ease: "power3.out",
        opacity: 1,
        ...to,
        onComplete: onCompleteAnimation
      }
    )
  }, [])

  return (
    <div
      className={className}
      ref={opacityContainerRef}
    >
      {children}
    </div>
  )
}

export default memo(OpacityContainer)
