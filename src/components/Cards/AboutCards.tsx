import { AboutCardProps } from "@/types/Component"

const AboutCards = (props: AboutCardProps) => {
    const { className = '', subtitle, title, value } = props
    return (
        <div className={`glass_card space-y-5  p-8  ${className}`}>
            <p className="h2_heading linear_gradient_utility uppercase text-center">{value}</p>
            <p className="h3_heading text-primary-light text-center">{title}</p>
            <p className="normal_body text-white text-center">{subtitle}</p>
        </div>
    )
}

export default AboutCards