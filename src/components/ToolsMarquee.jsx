import { SiGoogleads, SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiMeta } from 'react-icons/si';
import { FrogIcon, CanvaIcon } from './ToolIcons.jsx';

function Monogram({ letter, hue }) {
  return (
    <span className="tool__mono" style={{ '--hue': hue }} aria-hidden="true">
      {letter}
    </span>
  );
}

const TOOLS = [
  { name: 'Google Ads', icon: <SiGoogleads />, hue: '217, 89%, 55%' },
  { name: 'Meta', icon: <SiMeta />, hue: '221, 100%, 50%' },
  { name: 'Google Analytics', icon: <SiGoogleanalytics />, hue: '28, 92%, 48%' },
  { name: 'Google Search Console', icon: <SiGooglesearchconsole />, hue: '210, 84%, 52%' },
  { name: 'SEMrush', icon: <SiSemrush />, hue: '25, 96%, 51%' },
  { name: 'Ahrefs', icon: <Monogram letter="A" hue="16, 90%, 52%" />, hue: '16, 90%, 52%' },
  { name: 'Screaming Frog', icon: <FrogIcon size={18} />, hue: '150, 55%, 38%' },
  { name: 'Canva', icon: <CanvaIcon size={18} />, hue: '190, 80%, 45%' },
];

function Track() {
  return (
    <ul className="marquee__track">
      {TOOLS.map((t) => (
        <li className="marquee__item" key={t.name} style={{ '--hue': t.hue }}>
          <span className="marquee__icon">{t.icon}</span>
          <span className="marquee__name">{t.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ToolsMarquee() {
  return (
    <section className="marquee" aria-label="Tools I work with">
      <p className="marquee__label">Tools I Work With</p>
      <div className="marquee__viewport">
        <div className="marquee__row">
          <Track />
          <Track aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
