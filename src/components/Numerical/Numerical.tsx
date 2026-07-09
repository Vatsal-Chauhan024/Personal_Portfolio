import { memo } from "react"

import { GeneralProps } from "@/types/Component"

const Numerical = (
    props: Pick<GeneralProps, "className"> & Required<Pick<GeneralProps, "singleLineContent">>
) => {
    const { className = "", singleLineContent } = props
    return (
        <span
            className={`
      absolute
      right-6
      top-0
      font-heading
      text-[9rem]
      font-bold
      leading-none
      text-white/4
      select-none
      pointer-events-none
     ${className}`}
        >
            {singleLineContent}
        </span>
    )
}

export default memo(Numerical)
