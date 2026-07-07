import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { Images } from "@/helpers"
import ImageComponent from "../ImageComponent/ImageComponent"

const LogoComponent = (props: { animateNow: boolean }) => {
  const { animateNow } = props
  useGSAP(
    () => {
      if (!animateNow) return

      gsap.fromTo(
        ".logo",
        { opacity: 0, scale: 0 },
        {
          duration: 1,
          opacity: 1,
          rotate: 360,
          scale: 1
        }
      )
    },
    { dependencies: [animateNow] }
  )

  return (
    <ImageComponent
      className="w-10 h-10 logo opacity-0"
      imgUrl={Images.logo}
    />
  )
}

export default LogoComponent
