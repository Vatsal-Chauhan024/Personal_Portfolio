import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { ContactForm, ImageComponent, InViewStaggerElement } from "@/components"
import { Constant } from "@/helpers"

const Contact = () => {
    return (
        <section
            className="py-7 sm:py-14 lg:py-28 space-y-12"
            id="contact_us"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-10">
                    <InViewSplitText
                        id="footer_heading"
                        type="chars"
                    >
                        <p
                            className=" font-heading
                        
h2_heading
text-primary-light
font-semibold
leading-tight
break-normal"
                            id="footer_heading"
                        >
                            LET'S BUILD SOMETHING EXCEPTIONAL{" "}
                        </p>
                    </InViewSplitText>
                    <InViewSplitText
                        id="footer_subtitile"
                        type="chars"
                    >
                        <p
                            className=" font-heading
                        
large_body
text-white
font-light
leading-tight
break-normal"
                            id="footer_subtitile"
                        >
                            From concept to production.
                        </p>
                    </InViewSplitText>

                    <InViewStaggerElement id="contact_items" staggerAmount={0.3}>
                        <div className="flex flex-wrap gap-5" id="contact_items">
                            {Constant.ContactUsArray?.map(item => {
                                const { content, imageUrl, name } = item
                                return (
                                    <div
                                        className="elevated_surface cursor-pointer elevated_surface_hover p-5 rounded-full"
                                        key={name}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            window.open(content, '_blank')
                                        }}
                                    >
                                        <ImageComponent
                                            className={`size-7 ${name === 'email' ? '[&>img]:white__filter' : ''}`}
                                            imgUrl={imageUrl}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </InViewStaggerElement>
                </div>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
