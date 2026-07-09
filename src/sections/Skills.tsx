import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { HeadingComponent } from "@/components"
import SkillCard from "@/components/Cards/SkillCard"
import { Images } from "@/helpers"

const Skills = () => {
    return (
        <section
            className="py-7 sm:py-14 lg:py-28 space-y-12"
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
                    A curated set of technologies powering every project I build—focused on performance, scalability, and seamless user experiences.
                </p>
            </InViewSplitText>

            <SkillCard singleLineContent={Images.reactLogo} skill="React"/>
        </section>
    )
}

export default Skills