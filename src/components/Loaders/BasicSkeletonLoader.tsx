import { GeneralProps } from "@/types/Component"

const BasicSkeletonLoader = (props: Pick<GeneralProps, "className">) => {
  const { className } = props
  return <div className={`skeleton_loader ${className}`} />
}

export default BasicSkeletonLoader
