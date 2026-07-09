import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { HeadingComponent, InViewStaggerElement, ServiceCard } from "@/components"
import { Constant } from "@/helpers"

const Services = () => {
  const servicesTl = useRef<GSAPTimeline | null>(null)
  useGSAP(() => {
    servicesTl.current = gsap.timeline({
      scrollTrigger: {
        scroller: "#scroller",
        start: "top 90%",
        toggleActions: "play none none reverse",
        trigger: "#service_details"
      }
    })
  }, [])

  return (
    <section
      className="py-7 sm:py-14 lg:py-28 space-y-12"
      id="services"
    >
      <InViewSplitText
        id="services_heading"
        type="chars"
      >
        <HeadingComponent
          className="underline_class uppercase tracking-wide"
          heading_variant="h2_type"
          id="services_heading"
          singleLineContent="Services"
        />
      </InViewSplitText>

      <InViewSplitText
        id="services_description"
        type="words"
      >
        <p
          className="normal_body leading-[1.7em] text-secondary-light font-semibold sm:max-w-2xl"
          id="services_description"
        >
          Delivering scalable frontend solutions, interactive experiences and production-ready
          applications with a focus on quality, performance and user experience.
        </p>
      </InViewSplitText>
      
        <InViewStaggerElement
          id="service_details"
          timeLine={servicesTl.current!}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            id="service_details"
          >
            {Constant.ServicesArray?.map(service => {
              const { description, id, label, title } = service
              return (
                <ServiceCard
                  description={description}
                  key={title}
                  secondaryTitle={label}
                  subTitle={id}
                  title={title}
                />
              )
            })}
          </div>
        </InViewStaggerElement>
     
    </section>
  )
}

export default Services
