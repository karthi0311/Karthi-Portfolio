const EXPERIENCE = [
  {
    role: 'Digital Marketing Executive',
    org: 'Laabamone Business Solutions Pvt Ltd',
    period: 'Dec 2025 – Present',
    location: 'Madurai, India',
    current: true,
    points: [
      'Conduct keyword research and implement on-page SEO strategies to improve organic visibility and search rankings.',
      'Analyze website performance using Google Search Console and Screaming Frog to identify indexing issues, crawl errors, and optimization opportunities.',
      'Manage and grow social media presence across Facebook, Instagram, LinkedIn, and Twitter/X, driving audience engagement and brand visibility.',
      'Plan, launch, and optimize Meta Ads campaigns focused on lead generation, refining audience targeting to improve campaign performance.',
      'Perform technical SEO audits, including indexing checks and crawl analysis, to maintain site health and search performance.',
      'Track traffic, user behavior, and conversions using Google Analytics (GA4), Google Tag Manager, and Meta Pixel to measure campaign performance.',
      'Utilize SEMrush and Ahrefs for competitor analysis and content strategy planning to inform data-driven marketing decisions.',
      'Optimize the company\'s Google Business Profile and apply Local SEO best practices to improve local search visibility.',
    ],
  },
  {
    role: 'Digital Marketing Intern',
    org: 'Shiksha Simple Learn',
    period: 'Nov 2025',
    location: 'Madurai, India',
    current: false,
    points: [
      'Gained hands-on training in SEO, social media marketing, and digital campaign fundamentals through practical exercises.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>My Experience</h2>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <article className={`timeline__item ${e.current ? 'is-current' : ''}`} key={e.role + e.org}>
              <div className="timeline__rail">
                <span className="timeline__node" />
              </div>
              <div className={`timeline__card ${e.current ? 'is-current' : ''}`}>
                {e.current && <span className="timeline__tag">Current Role</span>}
                <div className="timeline__top">
                  <div>
                    <h3 className="timeline__role">{e.role}</h3>
                    <p className="timeline__org">{e.org}</p>
                  </div>
                  <div className="timeline__meta">
                    <span>{e.period}</span>
                    <span>{e.location}</span>
                  </div>
                </div>
                <ul className="timeline__points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
