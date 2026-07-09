import { memo } from "react"

import { GeneralProps } from "@/types/Component"
import ImageComponent from "../ImageComponent/ImageComponent"

interface SkillCardProps
    extends Required<Pick<GeneralProps, "singleLineContent">>,
    Pick<GeneralProps, "className"> {
    skill: string
}

const SkillCard = ({ singleLineContent, className = "", skill }: SkillCardProps) => {
    return (
        <div
            className={`
                group/skill
                relative
                size-36
                overflow-hidden
                rounded-[28px]

                border border-white/5

                bg-linear-to-br
                from-surface
                via-background-secondary
                to-background

                shadow-purple-sm

                transition-all
                duration-500
                ease-out

                hover:border-primary/20
                hover:shadow-purple-lg

                ${className}
            `}
            title={skill}
        >
            {/* Purple Glow */}
            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-40
                    w-40

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full
                    bg-primary/15
                    blur-[70px]

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover/skill:opacity-100
                "
            />

            {/* Logo */}
            <div
                className="
                    absolute
                    inset-0
                    z-10

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-500

                    group-hover/skill:scale-75
                    group-hover/skill:opacity-20
                    group-hover/skill:blur-sm
                "
            >
                <ImageComponent
                    className="size-16 object-contain"
                    imgUrl={singleLineContent}
                />
            </div>

            {/* Glass Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    z-20

                    flex
                    items-center
                    justify-center

                    bg-surface/70
                    backdrop-blur-xl

                    origin-bottom
                    scale-y-0
                    opacity-0

                    transition-all
                    duration-500

                    group-hover/skill:scale-y-100
                    group-hover/skill:opacity-100
                "
            >
                <span
                    className="
                        font-heading
                        px-2
                        text-center
                        text-sm sm:text-md: md:text-lg
                        font-semibold
                        text-white
                        tracking-wide

                        -translate-y-8
                        opacity-0

                        transition-all
                        duration-500
                        delay-150

                        group-hover/skill:translate-y-0
                        group-hover/skill:opacity-100
                    "
                >
                    {skill}
                </span>
            </div>

            {/* Bottom Gradient */}
            <div
                className="
                    absolute
                    bottom-0
                    left-1/2

                    h-0.5
                    w-0

                    -translate-x-1/2

                    bg-linear-to-r
                    from-transparent
                    via-primary
                    to-transparent

                    transition-all
                    duration-500

                    group-hover/skill:w-full
                "
            />
        </div>
    )
}

export default memo(SkillCard)
