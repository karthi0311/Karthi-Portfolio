import { LineChart, Database, Puzzle, Focus, GraduationCap } from 'lucide-react';

const ITEMS = [
  {
    icon: <LineChart size={22} strokeWidth={1.9} />,
    title: 'Analytical Thinking',
    desc: 'I use research and data to understand digital marketing opportunities and make informed decisions.',
  },
  {
    icon: <Database size={22} strokeWidth={1.9} />,
    title: 'Data-Driven Approach',
    desc: 'I focus on available data and insights to identify areas for improvement.',
  },
  {
    icon: <Puzzle size={22} strokeWidth={1.9} />,
    title: 'Problem Solving',
    desc: 'I enjoy identifying digital marketing challenges and finding practical solutions.',
  },
  {
    icon: <Focus size={22} strokeWidth={1.9} />,
    title: 'Attention to Detail',
    desc: 'I pay attention to details across keywords, website structure, and optimization activities.',
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.9} />,
    title: 'Continuous Learning',
    desc: 'I continuously learn new digital marketing strategies, tools, and techniques.',
  },
];

export default function WhatIBring() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What I Bring</p>
          <h2>What I Bring</h2>
        </div>

        <div className="bring-grid">
          {ITEMS.map((it) => (
            <div className="bring-card" key={it.title}>
              <span className="bring-card__icon">{it.icon}</span>
              <h3 className="bring-card__title">{it.title}</h3>
              <p className="bring-card__desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
