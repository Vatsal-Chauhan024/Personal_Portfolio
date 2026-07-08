import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { AboutCards, HeadingComponent, InViewStaggerElement } from "@/components"
import { Constant } from "@/helpers"

const About = () => {
    return (
        <section
            className="pb-6"
            id="about"
        >
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                <div className="space-y-12">
                    <InViewSplitText
                        id="about_heading"
                        type="chars"
                    >
                        <HeadingComponent
                            className="underline_class uppercase tracking-wide"
                            heading_variant="h2_type"
                            id="about_heading"
                            singleLineContent="About"
                        />
                    </InViewSplitText>

                    <div>
                        <InViewSplitText
                            id="initial_word"
                            type="chars"
                        >
                            <p
                                className="h3_heading text-secondary-light tracking-wide"
                                id="initial_word"
                            >
                                I BUILD PRODUCTS,
                            </p>
                        </InViewSplitText>
                        <InViewSplitText
                            id="second_word"
                            type="chars"
                        >
                            <p
                                className="h3_heading text-secondary-light tracking-wide"
                                id="second_word"
                            >
                                NOT JUST INTERFACES.
                            </p>
                        </InViewSplitText>
                    </div>

                    <InViewSplitText
                        id="about_description"
                        type="words"
                    >
                        <p
                            className="normal_body leading-[1.7em] text-secondary-light font-semibold sm:max-w-2xl"
                            id="about_description"
                        >
                            I'm a Frontend Engineer with 2 years of experience building modern React applications,
                            interactive GSAP animations, and scalable Web3 products. I focus on creating fast,
                            responsive, and user-centric experiences while collaborating with clients and
                            cross-functional teams.
                        </p>
                    </InViewSplitText>

                    <div className="bg-(--glass-bg-hover) shadow-(--shadow-purple-md) border space-y-5 border-border border-solid rounded-md p-5">
                        <InViewSplitText
                            id="dev_philosophy"
                            type="chars"
                        >
                            <p
                                className="h4_heading text-white"
                                id="dev_philosophy"
                            >
                                MY DEVELOPMENT PHILOSOPHY{" "}
                            </p>
                        </InViewSplitText>
                        <InViewSplitText
                            id="dev_philosophy_des"
                            type="words"
                        >
                            <p
                                className="text-muted"
                                id="dev_philosophy_des"
                            >
                                "I believe great products are built where design, motion and performance meet"
                            </p>
                        </InViewSplitText>
                    </div>
                </div>

                <InViewStaggerElement id="about_list">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        id="about_list"
                    >
                        {Constant.AboutStats.map((about, index) => {
                            const { id } = about
                            return (
                                <AboutCards
                                    {...about}
                                    className={Constant.AboutStats?.length % 2 !== 0 && index === Constant.AboutStats?.length - 1 ? 'sm:col-span-2' : ''}
                                    key={id}
                                />
                            )
                        })}
                    </div>
                </InViewStaggerElement>
            </div>
        </section>
    )
}

export default About
