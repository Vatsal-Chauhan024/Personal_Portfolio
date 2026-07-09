import { memo } from "react"

import { GeneralProps } from "@/types/Component"
import ImageComponent from "../ImageComponent/ImageComponent"

const SkillCard = (
    props: Required<Pick<GeneralProps, "singleLineContent">> &
        Pick<GeneralProps, "className"> & { skill: string }
) => {
    const { singleLineContent, className = "", skill = "" } = props
    return (
        <div
            className={`group/skill_card elevated_surface elevated_surface_hover overflow-hidden  relative size-36 flex items-center justify-center  bg-surface rounded-md ${className}`}
        >
            <ImageComponent
                className="size-16 group-hover/skill_card:opacity-50 group-hover/skill_card:scale-50 transition-all duration-900 ease-in"
                imgUrl={singleLineContent}
            />

            <div className="absolute opacity-0 group-hover/skill_card:opacity-100 h-0 group-hover/skill_card:h-36 transition-all duration-900 ease-in w-full bg-surface/20 bottom-0 left-0">
                <span className="absolute  -translate-x-1/2 left-1/2 px-4 py-2 bg-surface-2 border-primary border border-solid rounded-full group-hover/skill_card:top-1/2 group-hover/skill_card:-translate-y-1/2  small_text text-primary uppercase  top-full delay-800 duration-200 ease-initial">
                    {skill}
                </span>
            </div>
        </div>
    )
}

export default memo(SkillCard)
