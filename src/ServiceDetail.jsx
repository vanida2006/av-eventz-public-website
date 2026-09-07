import serviceDetails from './serviceData'
import './ServiceDetail.css'

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>

export default function ServiceDetail({ slug, onBack }) {
  const service = serviceDetails[slug]
  if (!service) return null
  const enquire = () => window.open(`https://wa.me/917204758541?text=${encodeURIComponent(`Hello AV Celebrations team, I would like to enquire about ${service.title}.`)}`, '_blank', 'noopener,noreferrer')
  return <main className="service-detail-page">
    <header className="service-detail-nav"><button onClick={onBack}>← Back to services</button><a className="service-detail-brand" href="/" onClick={onBack}>AV Celebrations</a></header>
    <section className="service-detail-intro"><p className="eyebrow">{service.number} / AV Celebrations services</p><h1>{service.title}</h1><p>{service.subtitle}</p></section>
    <figure className="service-detail-hero"><img src={service.hero} alt={service.title} /></figure>
    <section className="service-detail-section service-create"><div><p className="eyebrow">What we create</p><h2>Designed around<br /><em>your story.</em></h2></div><p>{service.creates}</p></section>
    {service.gallery.length > 0 && <section className="service-detail-section service-gallery-section"><div className="service-gallery-heading"><p className="eyebrow">The AV Celebrations edit</p><p>A considered collection of details, spaces and moments that shape the experience.</p></div><div className="service-gallery">{service.gallery.map((image, index) => <img key={image} className={`service-gallery-image service-gallery-image-${index}`} src={image} alt={`${service.title} inspiration ${index + 1}`} loading="lazy" />)}</div></section>}
    <section className="service-organise"><div className="service-detail-section"><div><p className="eyebrow light">How we organise it</p><h2>Every detail,<br /><em>beautifully held.</em></h2></div><p>{service.organise}</p></div><div className="service-process service-detail-section">{service.process.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="service-detail-section service-included"><div><p className="eyebrow">What&apos;s included</p><h2>One team for<br /><em>the whole picture.</em></h2></div><ul>{service.included.map(item => <li key={item}>{item}<Arrow /></li>)}</ul></section>
    <section className="service-final-cta"><div><p className="eyebrow light">Begin with a conversation</p><h2>Let&apos;s create something<br /><em>unforgettable.</em></h2><p>Tell us what you&apos;re imagining. We&apos;ll take care of everything behind the scenes.</p><button className="button button-light" onClick={enquire}>Start planning with AV <Arrow /></button></div></section>
  </main>
}
