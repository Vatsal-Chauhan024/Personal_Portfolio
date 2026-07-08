import { useEffect, useState } from "react"

import LogoComponent from "../LogoComponent/LogoComponent"
import OpacityContainer from "../OpacityContainer/OpacityContainer"
import StaggerContainer from "../StaggerContainer/StaggerContainer"
import MenuBtn from "./MenuBtn"
import NavComponent from "./NavComponent"

const Header = () => {
  const [isAnimateNow, setIsAnimateNow] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setShowMobileMenu(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <OpacityContainer
      className="px-12 py-5 fixed inset-0 h-20 text-primary z-30 w-screen bg-background-secondary/50 backdrop-blur-lg"
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
        {!showMobileMenu ? (
          <StaggerContainer
            id="stagger_elements"
            performAction={isAnimateNow}
          >
            <NavComponent
              className="*:opacity-0"
              onLinkClick={id => {
                const scroller = document.getElementById("scroller")
                const section = document.getElementById(id)

                if (scroller && section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            />
          </StaggerContainer>
        ) : (
          <MenuBtn />
        )
        }
      </div>
    </OpacityContainer>
  )
}

export default Header
