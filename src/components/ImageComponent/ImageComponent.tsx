import { memo, useEffect, useState } from "react"

import { ImageComponentProps } from "@/types/Component"
import BasicSkeletonLoader from "../Loaders/BasicSkeletonLoader"

const ImageComponent = (props: ImageComponentProps) => {
  const { imgUrl, className = "", onPressImage } = props
  const [isLoadingImage, setIsLoadingImage] = useState(true)
  const [imageToRender, setImageToRender] = useState(imgUrl)

  useEffect(() => {
    const imgElement = new Image()
    imgElement.src = imgUrl
    imgElement.onload = () => {
      setIsLoadingImage(false)
      setImageToRender(imgUrl)
    }

    imgElement.onerror = () => {
      setIsLoadingImage(false)
      setImageToRender("")
    }
  }, [imgUrl])

  return (
    <div
      className={className}
      onClick={e => {
        if (onPressImage) {
          e.stopPropagation()
          onPressImage()
        }
      }}
    >
      {isLoadingImage ? (
        <BasicSkeletonLoader />
      ) : imageToRender !== "" ? (
        <img
          alt={`error-icon-${imageToRender}`}
          className="w-full h-full"
          loading="lazy"
          src={imageToRender}
        />
      ) : null}
    </div>
  )
}

export default memo(ImageComponent)
