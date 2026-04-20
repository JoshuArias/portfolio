import { hero } from '../data/portfolioData'
import Icon from './Icon'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; 2026 Portfolio. Todos los derechos reservados.</p>

        <div className="footer-socials" aria-label="Redes sociales">
          {hero.socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
              <Icon name={link.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
