import { memo } from "react"

import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { ImageComponent, InViewStaggerElement, Numerical } from "@/components"
import { Images } from "@/helpers"
import { ProjectInfoProps } from "@/types/Component"

const ProjectInfo = (props: ProjectInfoProps) => {
    const { id, title, category, description, technologies, features } = props
    return (
        <div className="flex h-full flex-col justify-center">
            <Numerical
                className="relative"
                singleLineContent={id}
            />

            <InViewSplitText
                id={`project_title_${id}`}
                position=">-=0.1"
                type="chars"
            >
                <p
                    className="
mt-5
font-heading
h2_heading
font-semibold
leading-tight
break-normal"
                    id={`project_title_${id}`}
                >
                    {title}
                </p>
            </InViewSplitText>

            <InViewSplitText
                id={`project_category_${id}`}
                position=">+=0.3"
                type="words"
            >
                <p
                    className="mt-3 text-lg text-secondary-light"
                    id={`project_category_${id}`}
                >
                    {category}
                </p>
            </InViewSplitText>

            <InViewSplitText
                id={`project_description_${id}`}
                position=">+=0.3"
                type="words"
            >
                <p
                    className="mt-8 max-w-xl leading-8 text-gray"
                    id={`project_description_${id}`}
                >
                    {description}
                </p>
            </InViewSplitText>

            <div className="my-10 h-px bg-white/10" />

            <div>
                <InViewSplitText
                    id={`project_technology_${id}`}
                    position=">+=0.3"
                    type="words"
                >
                    <p
                        className="label_text text-muted"
                        id={`project_technology_${id}`}
                    >
                        Technologies
                    </p>
                </InViewSplitText>
                <InViewStaggerElement id={`project_tech_${id}`}>
                    <div
                        className="mt-5 flex flex-wrap gap-3"
                        id={`project_tech_${id}`}
                    >
                        {technologies.map(item => (
                            <span
                                className="
                                rounded-full
                                border
                                border-primary/15

                                bg-primary/5

                                px-5
                                py-2

                                text-sm
                                text-primary-light

                                transition-all
                                duration-300

                                hover:border-primary/30
                                hover:bg-primary/10
                            "
                                key={item}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </InViewStaggerElement>

                <div className="mt-10">
                    <InViewSplitText
                        id={`project_hightlight_${id}`}
                        type="chars"
                    >
                        <p
                            className="label_text text-muted"
                            id={`project_hightlight_${id}`}
                        >
                            Highlights
                        </p>
                    </InViewSplitText>
                    <InViewStaggerElement id={`project_features_${id}`}>
                        <div
                            className="mt-5 grid grid-cols-2 gap-4"
                            id={`project_features_${id}`}
                        >
                            {features.map(item => (
                                <div
                                    className="flex items-center gap-3"
                                    key={item}
                                >
                                    <ImageComponent
                                        className="[&>img]:white__filter size-4 "
                                        imgUrl={Images.checkup}
                                    />

                                    <span className="text-gray">{item}</span>
                                </div>
                            ))}
                        </div>
                    </InViewStaggerElement>
                </div>
            </div>
        </div>
    )
}

export default memo(ProjectInfo)
