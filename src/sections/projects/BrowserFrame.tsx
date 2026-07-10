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
                w-full
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
                    pointer-events-none
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
                    flex 
                    flex-col
                    border-b
                    border-white/5

                    px-6
                    py-5
                "
      >
        {/* Live */}
        <div className="flex flex-row items-center gap-3">
          <span
            className="
                            size-2.5
                            rounded-full
                            bg-green-400
                            shadow-[0_0_12px_rgba(74,222,128,.7)]
                        "
          />

          <span className="small_text text-white">Live</span>
        </div>

        {/* URL */}
        <div className="mt-4 flex sm:justify-between  items-center gap-3">
          <span
            className="font-body
                            text-xs sm:text-sm
                            text-muted break-all"
            title={url}
          >
            {url}
          </span>

          <button
            className="
                            shrink-0
                            transition-transform
                            duration-300

                            hover:scale-110

                            group-hover/browser:translate-x-1
                            group-hover/browser:-translate-y-1
                        "
            onClick={() => window.open(url, "_blank")}
            type="button"
          >
            <ImageComponent
              className="
                                size-4
                                [&>img]:object-cover!
                                [&>img]:white__filter
                            "
              imgUrl={Images.arrowupright}
            />
          </button>
        </div>
      </div>

      {/* Preview */}
      <div
        className="
                    relative
                    aspect-video
                    overflow-hidden
                    bg-background
                "
      >
        <ImageComponent
          className="
                        h-full
                        w-full

                        [&>img]:h-full
                        [&>img]:w-full
                        [&>img]:object-cover

                        transition-transform
                        duration-700

                        group-hover/browser:scale-[1.03]
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
                        via-background/70
                        to-transparent
                    "
        />
      </div>
    </div>
  )
}

export default memo(BrowserFrame)
