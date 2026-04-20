import SkillPanel from '../components/SkillPanel'
import Section from '../components/Section'
import { skillGroups } from '../data/portfolioData'

function SkillsSection() {
  return (
    <Section
      id="habilidades"
      title="Habilidades"
      subtitle="Tecnologías y herramientas con las que trabajo"
      tone="soft"
      delay={160}
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillPanel key={group.title} {...group} />
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection
