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
      className="px-12 py-5 sticky top-0 inset-0 h-20 text-primary z-30 w-screen bg-background-secondary/50 backdrop-blur-lg"
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
            staggerAmount={0.08}
          >
            <NavComponent
              className="*:opacity-0"
              onLinkClick={id => {
                const section = document.getElementById(id)

                if (section) {
                  window.scrollTo({
                    behavior: "smooth",
                    top: section.offsetTop - 80
                  })
                }
              }}
            />
          </StaggerContainer>
        ) : (
          <MenuBtn />
        )}
      </div>
    </OpacityContainer>
  )
}

export default Header
