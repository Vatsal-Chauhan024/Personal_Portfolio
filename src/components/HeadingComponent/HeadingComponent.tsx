import { useMemo } from "react"

import { HeadingComponentProps } from "@/types/Component"

const HeadingComponent = (props: HeadingComponentProps) => {
  const { singleLineContent, className = "", heading_variant = "large_type", id = "" } = props

  const classToUse = useMemo(() => {
    return heading_variant === "hero"
      ? "hero_title"
      : heading_variant === "h2_type"
        ? "h2_heading"
        : heading_variant === "h3_type"
          ? "h3_heading"
          : heading_variant === "h4_type"
            ? "h4_heading"
            : heading_variant === "large_type"
              ? "large_body"
              : heading_variant === "normal_type"
                ? "normal_body"
                : heading_variant === "small_type"
                  ? "small_text"
                  : "label_text"
  }, [heading_variant])

  return (
    <p
      className={`linear_gradient_utility bg-clip-text text-transparent ${classToUse} ${className}`}
      id={id}
    >
      {singleLineContent}
    </p>
  )
}

export default HeadingComponent
