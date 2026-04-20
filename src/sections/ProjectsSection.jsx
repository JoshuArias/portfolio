import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import { projects } from '../data/portfolioData'

function ProjectsSection() {
  return (
    <Section
      id="proyectos"
      title="Proyectos Destacados"
      subtitle="Algunos de los proyectos en los que he trabajado"
      tone="white"
      delay={120}
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
