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
            I am a results-driven Digital Marketing Executive with hands-on experience in SEO, social
            media management, and Meta Ads campaigns. My skills include keyword research, on-page
            SEO, technical SEO, Local SEO, Google Business Profile optimization, website performance
            analysis, and lead generation through paid social campaigns. I work with Google
            Analytics (GA4), Google Tag Manager, conversion tracking, Meta Pixel, Google Search
            Console, Screaming Frog, SEMrush, and Ahrefs. I also have working knowledge of Google
            Ads and a strong foundation in HTML for technical SEO implementation. I hold a B.Sc. in
            Physics from Mannar Thirumalai Naicker College, Madurai.
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
