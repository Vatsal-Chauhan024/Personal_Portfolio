import { GeneralProps } from "@/types/Component"

const InsideLayout = (props: Required<Pick<GeneralProps, "children">>) => {
  const { children } = props
  return <div className="h-full w-full pt-20">{children}</div>
}

export default InsideLayout
