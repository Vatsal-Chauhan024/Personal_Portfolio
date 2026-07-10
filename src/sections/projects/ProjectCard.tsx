import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { memo, useRef } from "react"

import { ProjectCardProps } from "@/types/Component"
import BrowserFrame from "./BrowserFrame"
import ProjectInfo from "./ProjectInfo"

const ProjectCard = ({ project, reverse = false }: ProjectCardProps) => {
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const browser = document.getElementById(`project_browser_${project.id}`)

        if (!browser) return

        gsap.fromTo(
            browser,
            {
                opacity: 0,
                scale: 0.9,
                y: 80
            },
            {
                duration: 0.8,
                ease: "power3.out",
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                    trigger: sectionRef.current
                },
                y: 0
            }
        )
    })

    return (
        <section
            className={`
                grid
                items-center
                gap-16

                lg:grid-cols-2

                ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
            `}
            ref={sectionRef}
        >
            <div id={`project_browser_${project.id}`}>
                <BrowserFrame
                    image={project.image}
                    url={project.liveUrl}
                    year={project.year}
                />
            </div>
            <ProjectInfo
                category={project.category}
                description={project.longDescription}
                features={project.features}
                githubUrl={project.githubUrl}
                id={project.id}
                liveUrl={project.liveUrl}
                technologies={project.technologies}
                title={project.title}
            />
        </section>
    )
}

export default memo(ProjectCard)
