import { useEffect, useState } from "react"

import { Images } from "@/helpers"
import ImageComponent from "../ImageComponent/ImageComponent"

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 50)
        }

        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return (
        <button
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full
                bg-primary text-white shadow-lg shadow-primary/30
                transition-all duration-300
                hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-primary/50
                active:scale-95
                ${visible
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-6 opacity-0"
                }`}
            onClick={() =>
                window.scrollTo({
                    behavior: "smooth",
                    top: 0
                })
            }
            type="button"
        >
            <ImageComponent
                className="size-5 [&>img]:white__filter"
                imgUrl={Images.uparrow}
            />
        </button>
    )
}

export default ScrollToTop
