import { LinkedinIcon, InstagramIcon, WhatsappIcon } from './SocialIcons.jsx';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthi-s-8a0b68366/', icon: <LinkedinIcon size={19} /> },
  { label: 'WhatsApp', href: 'https://wa.me/919994138093', icon: <WhatsappIcon size={19} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/karthi___48', icon: <InstagramIcon size={19} /> },
];

export default function SideSocials() {
  return (
    <div className="side-socials" aria-label="Social links">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="side-socials__link"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
      <span className="side-socials__line" aria-hidden="true" />
    </div>
  );
}
