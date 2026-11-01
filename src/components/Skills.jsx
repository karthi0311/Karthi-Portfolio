import { SearchCheck, Target, BarChart3 } from 'lucide-react';

const GROUPS = [
  {
    title: 'SEO & Content',
    icon: <SearchCheck size={20} strokeWidth={2} />,
    items: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Local SEO',
      'Google Business Profile Optimization',
      'Content Optimization',
      'Competitor Analysis',
    ],
  },
  {
    title: 'Paid Media & Social',
    icon: <Target size={20} strokeWidth={2} />,
    items: [
      'Meta Ads Management',
      'Meta Pixel',
      'Google Ads (Basics)',
      'Lead Generation Campaigns',
      'Social Media Marketing',
      'Meta Business Suite',
    ],
  },
  {
    title: 'Analytics & Technical',
    icon: <BarChart3 size={20} strokeWidth={2} />,
    items: [
      'Google Analytics (GA4)',
      'Google Tag Manager',
      'Conversion Tracking',
      'Google Search Console',
      'Screaming Frog',
      'SEMrush',
      'Ahrefs',
      'HTML',
      'Canva',
      'ChatGPT',
    ],
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
