import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function Section({ id, title, subtitle, className = '', tone = 'white', delay = 0, children }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section
      id={id}
      ref={ref}
      className={`portfolio-section section-${tone} reveal-section ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <div className="section-inner">
        {(title || subtitle) && (
          <header className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
