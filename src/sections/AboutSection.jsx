import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import { about } from '../data/portfolioData'

function AboutSection() {
  return (
    <Section id="sobre-mi" title={about.title} subtitle={about.description} tone="soft" delay={80}>
      <div className="features-grid">
        {about.highlights.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  )
}

export default AboutSection
