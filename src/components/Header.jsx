import { useState } from 'react'
import { brand, navLinks } from '../data/portfolioData'
import Icon from './Icon'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-container">
        <a className="brand-link" href="#hero" onClick={closeMenu}>
          {brand}
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={22} />
        </button>

        <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
