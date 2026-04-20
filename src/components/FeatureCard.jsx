import Icon from './Icon'

function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <span className="feature-icon" aria-hidden="true">
        <Icon name={icon} size={24} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
