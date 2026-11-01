import {
  AhrefsIcon,
  CanvaIcon,
  FrogIcon,
  GoogleAdsIcon,
  GoogleAnalyticsIcon,
  MetaIcon,
  SearchConsoleIcon,
  SemrushIcon,
} from './ToolIcons.jsx';

const TOOLS = [
  { name: 'Google Ads', icon: <GoogleAdsIcon /> },
  { name: 'Meta', icon: <MetaIcon /> },
  { name: 'Google Analytics', icon: <GoogleAnalyticsIcon /> },
  { name: 'Google Search Console', icon: <SearchConsoleIcon /> },
  { name: 'SEMrush', icon: <SemrushIcon /> },
  { name: 'Ahrefs', icon: <AhrefsIcon /> },
  { name: 'Screaming Frog', icon: <FrogIcon size={22} /> },
  { name: 'Canva', icon: <CanvaIcon size={22} /> },
];

function Track() {
  return (
    <ul className="marquee__track">
      {TOOLS.map((t) => (
        <li className="marquee__item" key={t.name}>
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
