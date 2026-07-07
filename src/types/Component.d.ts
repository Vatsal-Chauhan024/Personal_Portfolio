import { gsap } from "gsap"
import type { ReactNode } from "react"

export interface GeneralProps {
  children?: ReactNode
  className?: string
  onPressImage?: () => void
  singleLineContent?: string
}

export interface ImageComponentProps extends Pick<GeneralProps, "className" | "onPressImage"> {
  imgUrl: string
}

export interface StaggerContainerProps
  extends Required<Pick<GeneralProps, "children">>,
    Pick<GeneralProps, "className"> {
  id?: string
  performAction?: boolean
  staggerAmount?: number
}

export interface OpacityContainerProps {
  children: React.ReactNode
  className?: string

  duration?: number
  from?: gsap.TweenVars
  onCompleteAnimation?: () => void
  to?: gsap.TweenVars
}
