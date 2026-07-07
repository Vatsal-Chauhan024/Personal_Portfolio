import { useState } from "react"

import LogoComponent from "../LogoComponent/LogoComponent"
import OpacityContainer from "../OpacityContainer/OpacityContainer"
import NavComponent from "./NavComponent"

const Header = () => {
  const [isAnimateNow, setIsAnimateNow] = useState(false)

  return (
    <OpacityContainer
      className="p-5 fixed inset-0 h-20 text-primary z-50 w-screen bg-background-secondary/50 backdrop-blur-lg"
      from={{
        height: 0
      }}
      onCompleteAnimation={() => {
        setIsAnimateNow(true)
      }}
      to={{
        height: 80
      }}
    >
      <div className="flex w-full justify-between gap-5 items-center ">
        <LogoComponent animateNow={isAnimateNow} />
        <NavComponent animateNow={isAnimateNow} />
      </div>
    </OpacityContainer>
  )
}

export default Header
