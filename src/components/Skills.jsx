import { SearchCheck, Target, BarChart3 } from 'lucide-react';

const GROUPS = [
  {
    title: 'SEO & Search',
    icon: <SearchCheck size={20} strokeWidth={2} />,
    items: ['SEO', 'Local SEO', 'Google Business Profile', 'Keyword Research', 'Competitor Research', 'Google Search Console'],
  },
  {
    title: 'Paid Advertising & Social Media',
    icon: <Target size={20} strokeWidth={2} />,
    items: ['Google Ads', 'Meta Ads', 'Social Media Marketing'],
  },
  {
    title: 'Analytics & Technical',
    icon: <BarChart3 size={20} strokeWidth={2} />,
    items: ['Google Analytics', 'HTML'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Digital Marketing Skills</h2>
        </div>

        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-card" key={g.title}>
              <span className="skill-card__icon">{g.icon}</span>
              <h3 className="skill-card__title">{g.title}</h3>
              <ul className="skill-card__list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
