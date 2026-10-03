import { Search, MapPinned, Megaphone, Users } from 'lucide-react';

const FOCUS = [
  { icon: <Search size={18} strokeWidth={2.2} />, label: 'SEO' },
  { icon: <MapPinned size={18} strokeWidth={2.2} />, label: 'Local SEO' },
  { icon: <Megaphone size={18} strokeWidth={2.2} />, label: 'Google Ads' },
  { icon: <Users size={18} strokeWidth={2.2} />, label: 'Meta Ads' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <div className="about__text">
          <p className="eyebrow">About Me</p>
          <h2>About Me</h2>
          <p className="about__p">
            I'm a Digital Marketing Executive focused on SEO, Local SEO, Google Business Profile,
            Google Ads, Meta Ads, and social media marketing. I enjoy using research and data to
            improve online visibility and solve digital marketing challenges.
          </p>
          <p className="about__p">
            I'm continuously learning and looking for opportunities to grow, contribute, and
            develop my skills as a digital marketing professional.
          </p>
        </div>

        <div className="about__card" role="list" aria-label="Areas of focus">
          <p className="about__card-title">Areas of Focus</p>
          <div className="about__focus-grid">
            {FOCUS.map((f) => (
              <div className="about__focus-item" role="listitem" key={f.label}>
                <span className="about__focus-icon">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
