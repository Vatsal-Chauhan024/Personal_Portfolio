import Marquee from "react-fast-marquee"

import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { HeadingComponent } from "@/components"
import SkillCard from "@/components/Cards/SkillCard"
import { Constant } from "@/helpers"

const Skills = () => {
    return (
        <section
            className="py-14 space-y-12"
            id="skills"
        >
            <InViewSplitText
                id="skills_heading"
                type="chars"
            >
                <HeadingComponent
                    className="underline_class uppercase tracking-wide"
                    heading_variant="h2_type"
                    id="skills_heading"
                    singleLineContent="skills"
                />
            </InViewSplitText>

            <InViewSplitText
                id="skills_description"
                type="words"
            >
                <p
                    className="normal_body leading-[1.7em] text-secondary-light font-semibold sm:max-w-2xl"
                    id="skills_description"
                >
                    A curated set of technologies powering every project I build—focused on performance,
                    scalability, and seamless user experiences.
                </p>
            </InViewSplitText>


            {Constant.SkillsMarqueeArray?.map((skills, index) => {
                return (
                    <Marquee
                        autoFill
                        direction={(index + 1) % 2 === 0 ? "left" : "right"}
                        gradient={false}
                        key={`skill_${index + 1}`}
                        pauseOnHover
                        speed={35}
                    >
                        {skills.map(skill => {
                            const { img, name } = skill
                            return (
                                <SkillCard
                                    className="mx-3 last:mr-0 first-letter:ml-0"
                                    key={name}
                                    singleLineContent={img}
                                    skill={name}
                                />
                            )
                        })}
                    </Marquee>
                )
            })}
        </section>
    )
}

export default Skills
