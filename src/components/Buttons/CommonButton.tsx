import { memo } from "react"

import { ButtonComponentProps } from "@/types/Component"

const CommonButton = (props: ButtonComponentProps) => {
  const { buttonContent, imageUrl = "", className = "", variant = 'outline', ...rest } = props
  return (
    <button
      className={` ${variant === 'outline' ? 'px-12 h-18 rounded-xl  shadow-[0_0_30px_rgba(124,58,237,.3)]  border border-dashed   border-primary-dark hover:bg-transparent transition-all duration-300 ease-in text-white large_body uppercase tracking-widest font-semibold ' : ''}  ${className}`}
      type="button"
      {...rest}
    >
      {buttonContent}
    </button>
  )
}

export default memo(CommonButton)
