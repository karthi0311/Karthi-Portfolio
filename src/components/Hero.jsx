import { ArrowRight, Download, MapPin } from 'lucide-react';
import SideSocials from './SideSocials.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__hello">Hello, I'm</p>
          <h1 className="hero__name">Karthi S</h1>
          <p className="hero__title">Digital Marketing Executive</p>
          <p className="hero__headline">SEO, Meta Ads &amp; Google Ads</p>

          <div className="hero__meta">
            <span className="hero__location"><MapPin size={14} strokeWidth={2.2} /> Madurai, Tamil Nadu, India</span>
            <span className="hero__badge">
              <span className="hero__dot" /> Open to Digital Marketing Opportunities
            </span>
          </div>

          <p className="hero__desc">
            I help improve online visibility and digital campaign performance through SEO, social
            media marketing, paid social campaigns, and data-driven website analysis.
          </p>
          <p className="hero__desc">
            I have hands-on experience in SEO, social media management, and Meta Ads campaigns,
            along with practical knowledge of GA4, Google Tag Manager, conversion tracking, and Meta
            Pixel. I also have foundational knowledge of Google Ads.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View My Projects <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <a className="btn btn-ghost" href="/Karthi_S_Resume.pdf" download="Karthi_S_Resume.pdf">
              <Download size={16} strokeWidth={2.4} /> Download Resume
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <SideSocials />
            <div className="hero__glow" aria-hidden="true" />
            <img
              src="/profile-photo.jpg"
              alt="Karthi S, Digital Marketing Executive"
              className="hero__photo"
              width="480"
              height="480"
            />
            <div className="hero__ring" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
