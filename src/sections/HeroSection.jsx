import Section from '../components/Section'
import Icon from '../components/Icon'
import { hero } from '../data/portfolioData'

function HeroSection() {
  return (
    <Section id="hero" className="hero-section" tone="white" delay={0}>
      <div className="hero-content">
        <h1>{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>

        <div className="social-links" aria-label="Redes sociales">
          {hero.socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
              <Icon name={link.icon} size={22} />
            </a>
          ))}
        </div>

        <a className="primary-button" href={hero.ctaHref}>
          {hero.ctaLabel}
        </a>
      </div>

      <a className="scroll-cue" href="#sobre-mi" aria-label="Ir a Sobre mí">
        <Icon name="chevronDown" size={28} />
      </a>
    </Section>
  )
}

export default HeroSection
