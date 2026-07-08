import { BlurComponent } from "@/components"
import { GeneralProps } from "@/types/Component"

const Layout = (props: Required<Pick<GeneralProps, "children">>) => {
  const { children } = props
  return <div className="py-5 px-12 h-screen w-screen overflow-y-auto" id="scroller">
    <BlurComponent />
    {children}</div>
}

export default Layout
