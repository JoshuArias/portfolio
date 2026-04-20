function SkillPanel({ title, skills }) {
  return (
    <article className="skill-panel">
      <h3>{title}</h3>

      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillPanel
