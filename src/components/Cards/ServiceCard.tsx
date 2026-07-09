import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { ServiceCardProps } from "@/types/Component"
import Numerical from "../Numerical/Numerical"

const ServiceCard = (props: ServiceCardProps) => {
    const { description, title, className = "", subTitle = "", secondaryTitle } = props
    return (
        <div className={`glass_card rounded-3xl p-8 ${className}`}>
            {subTitle !== "" && <Numerical singleLineContent={subTitle} />}

            <div className="relative z-10 space-y-6">
                <InViewSplitText id={`service_title_${title}`} type="chars">
                    <p className="label_text text-primary-light" id={`service_title_${title}`}>{title}</p>
                </InViewSplitText>


                <InViewSplitText id={`service_secondary_title_${title}`} type="chars">
                    <h3 className="h3_heading" id={`service_secondary_title_${title}`}>{secondaryTitle}</h3>
                </InViewSplitText>

                <InViewSplitText id={`service_description_${title}`} type="words">
                    <p className="normal_body max-w-2xl text-gray leading-8" id={`service_description_${title}`}>{description}</p>
                </InViewSplitText>
            </div>
        </div>
    )
}

export default ServiceCard
