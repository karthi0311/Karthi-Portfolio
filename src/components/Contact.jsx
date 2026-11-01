import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section section--alt contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Let's Connect</p>
          <h2>Get In Touch</h2>
          <p className="contact__intro">
            I'm currently open to opportunities in Digital Marketing, SEO, Local SEO, and
            Performance Marketing. I'm looking forward to contributing my skills, learning from a
            professional team, and growing as a Digital Marketing professional.
          </p>
        </div>

        <div className="contact-grid">
          <a className="contact-card" href="tel:+919994138093">
            <span className="contact-card__icon"><Phone size={20} strokeWidth={2} /></span>
            <span className="contact-card__label">Phone</span>
            <span className="contact-card__value">+91 9994138093</span>
          </a>

          <a className="contact-card" href="mailto:karthiselvamvk@gmail.com">
            <span className="contact-card__icon"><Mail size={20} strokeWidth={2} /></span>
            <span className="contact-card__label">Email</span>
            <span className="contact-card__value">karthiselvamvk@gmail.com</span>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/karthi-digital-marketer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon"><FaLinkedinIn size={18} /></span>
            <span className="contact-card__label">LinkedIn</span>
            <span className="contact-card__value">linkedin.com/in/karthi-digital-marketer</span>
          </a>
        </div>

        <a
          className="btn btn-primary contact__btn"
          href="https://www.linkedin.com/in/karthi-digital-marketer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn <ArrowUpRight size={16} strokeWidth={2.4} />
        </a>
      </div>
    </section>
  );
}
