import { gsap } from "gsap"
import type { ReactNode } from "react"

export interface GeneralProps {
  children?: ReactNode
  className?: string
  singleLineContent?: string
}

export interface ImageComponentProps extends Pick<GeneralProps, "className"> {
  imgUrl: string
}

export interface StaggerContainerProps
  extends Required<Pick<GeneralProps, "children">>,
    Pick<GeneralProps, "className"> {
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
