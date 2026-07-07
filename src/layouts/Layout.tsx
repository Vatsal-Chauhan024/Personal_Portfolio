import { GeneralProps } from "@/types/Component"

const Layout = (props: Required<Pick<GeneralProps, "children">>) => {
  const { children } = props
  return <div className="p-5">{children}</div>
}

export default Layout
