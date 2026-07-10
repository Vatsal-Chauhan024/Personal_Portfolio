import { BlurComponent, ScrollToTop } from "@/components"
import { GeneralProps } from "@/types/Component"

const Layout = (props: Required<Pick<GeneralProps, "children">>) => {
  const { children } = props
  return <div className="min-h-screen w-full px-5 py-5 md:px-8 lg:px-12">
    <BlurComponent />
    <ScrollToTop />
    {children}</div>
}

export default Layout
