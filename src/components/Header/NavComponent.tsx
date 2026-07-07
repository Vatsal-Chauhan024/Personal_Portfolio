import { NavLink } from "react-router-dom"

import { Constant } from "@/helpers"
import StaggerContainer from "../StaggerContainer/StaggerContainer"

const NavComponent = (props: { animateNow: boolean }) => {
    const { animateNow } = props
    return (
        <StaggerContainer
            className="flex  items-center font-semibold text-primary"
            performAction={animateNow}
        >
            {Constant.NavArray.map(item => {
                const { id, name } = item
                return (
                    <NavLink
                        className="basic_hover_animation px-4 hover:text-primary-light opacity-0"
                        key={id}
                        to={id}
                    >
                        {name}
                    </NavLink>
                )
            })}
        </StaggerContainer>
    )
}

export default NavComponent
