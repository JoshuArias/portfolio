import { useState } from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { contact } from '../data/portfolioData'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const SUCCESS_MESSAGE = 'Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactSection() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''
    const botcheck = formData.get('botcheck')?.toString() ?? ''
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (botcheck) {
      return
    }

    if (!name || !email || !message) {
      setFormStatus({
        type: 'error',
        message: 'Completa nombre, email y mensaje antes de enviar la consulta.',
      })
      return
    }

    if (!emailPattern.test(email)) {
      setFormStatus({
        type: 'error',
        message: 'Ingresa un email válido para que pueda responderte.',
      })
      return
    }

    if (!accessKey) {
      setFormStatus({
        type: 'error',
        message: 'No fue posible enviar la consulta en este momento. Escríbeme por email.',
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          botcheck,
          subject: `Nueva consulta desde portfolio - ${name}`,
          from_name: 'Portfolio Joshua',
        }),
      })
      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Web3Forms no pudo procesar el mensaje.')
      }

      setFormStatus({ type: 'success', message: SUCCESS_MESSAGE })
      form.reset()
    } catch {
      setFormStatus({
        type: 'error',
        message: 'No pude enviar la consulta. Inténtalo de nuevo o escríbeme directamente por email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section
      id="contacto"
      title={contact.title}
      subtitle={contact.subtitle}
      tone="white"
      delay={220}
    >
      <div className="contact-layout">
        <aside className="contact-info" aria-label="Información de contacto">
          <h3>{contact.introTitle}</h3>
          <p className="contact-intro">{contact.introText}</p>

          <div className="contact-details">
            {contact.details.map((item) => {
              const content = (
                <>
                  <span className="contact-icon" aria-hidden="true">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </span>
                </>
              )

              return item.href ? (
                <a key={item.label} className="contact-detail" href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className="contact-detail">
                  {content}
                </div>
              )
            })}
          </div>

          <p className="response-note">{contact.responseNote}</p>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex="-1" />

          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@empresa.com"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Cuéntame sobre tu proyecto, objetivo o idea principal"
            required
          />

          <button className="primary-button form-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
          </button>

          {formStatus.message && (
            <p className={`form-status form-status--${formStatus.type}`} role="status" aria-live="polite">
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}

export default ContactSection
