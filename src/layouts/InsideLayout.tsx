import { GeneralProps } from "@/types/Component"

const InsideLayout = (props: Required<Pick<GeneralProps, "children">>) => {
  const { children } = props
  return <div className="h-full w-full">{children}</div>
}

export default InsideLayout
