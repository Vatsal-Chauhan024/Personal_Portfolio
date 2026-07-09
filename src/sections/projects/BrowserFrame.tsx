import { memo } from "react"

import ImageComponent from "@/components/ImageComponent/ImageComponent"
import { Images } from "@/helpers"
import { BrowserFrameProps } from "@/types/Component"

const BrowserFrame = ({ image, url, className = "" }: BrowserFrameProps) => {
    return (
        <div
            className={`
                group/browser
                relative
                overflow-hidden

                rounded-4xl

                border
                border-white/10

                bg-linear-to-br
                from-surface
                via-background-secondary
                to-background

                shadow-purple-md

                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-primary/25
                hover:shadow-purple-lg

                ${className}
            `}
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0

                    bg-radial
                    from-primary/10
                    via-transparent
                    to-transparent

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover/browser:opacity-100
                "
            />

            {/* Header */}
            <div
                className="
                    relative
                    z-10

                    border-b
                    border-white/5

                    px-6
                    py-5
                "
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span
                            className="
                                size-2.5
                                rounded-full
                                bg-green-400
                                shadow-[0_0_12px_rgba(74,222,128,.6)]
                            "
                        />

                        <span className="small_text text-white">Live</span>
                    </div>


                </div>

                <div className="mt-4 flex items-center justify-between">
                    <span
                        className="
                            truncate

                            font-body
                            text-sm
                            text-muted
                        "
                    >
                        {url}
                    </span>

                    <ImageComponent
                        className="
                        [&>img]:object-cover!
                        cursor-pointer
                        size-4
            [&>img]:white__filter
                            transition-transform
                            duration-300

                            group-hover/browser:translate-x-1
                            group-hover/browser:-translate-y-1
                        "
                        imgUrl={Images.arrowupright}
                        onPressImage={() => {
                            window.open(url, '_blank')
                        }}
                    />
                </div>
            </div>

            <div
                className="
                    relative
                    overflow-hidden
                    bg-background
                "
            >
                <ImageComponent
                    className="
                        aspect-video
                        w-full
                        object-cover

                        transition-all
                        duration-700

                        group-hover/browser:scale-[1.025]
                    "
                    imgUrl={image}
                />

                {/* Bottom Fade */}
                <div
                    className="
                        pointer-events-none

                        absolute
                        inset-x-0
                        bottom-0

                        h-32

                        bg-linear-to-t
                        from-background
                        to-transparent
                    "
                />
            </div>
        </div>
    )
}

export default memo(BrowserFrame)
