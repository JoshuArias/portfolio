import Icon from './Icon'

function ProjectCard({ title, description, tags, links, image }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img className="project-image" src={image} alt={`Captura de ${title}`} loading="lazy" />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="project-tags" aria-label={`Tecnologías usadas en ${title}`}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <Icon name={link.icon} size={18} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
