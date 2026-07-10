import InViewSplitText from "@/common/InViewSplitText/InViewSplitText"
import { HeadingComponent } from "@/components"
import { Constant } from "@/helpers"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section
      className="py-14 space-y-12"
      id="projects"
    >
      <InViewSplitText
        id="projects_heading"
        type="chars"
      >
        <HeadingComponent
          className="underline_class uppercase tracking-wide"
          heading_variant="h2_type"
          id="projects_heading"
          singleLineContent="projects"
        />
      </InViewSplitText>

      <InViewSplitText
        id="projects_description"
        type="words"
      >
        <p
          className="normal_body leading-[1.7em] text-secondary-light font-semibold sm:max-w-2xl"
          id="projects_description"
        >
          Delivering scalable frontend solutions, interactive experiences and production-ready
          applications with a focus on quality, performance and user experience.
        </p>
      </InViewSplitText>
      <div className="space-y-14 md:space-y-10">
        {Constant.ProjectsArray.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
