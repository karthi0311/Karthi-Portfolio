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
          <p className="hero__headline">SEO &middot; Local SEO &middot; Google Ads &middot; Meta Ads</p>

          <div className="hero__meta">
            <span className="hero__location"><MapPin size={14} strokeWidth={2.2} /> Madurai, Tamil Nadu</span>
            <span className="hero__badge">
              <span className="hero__dot" /> Open to Digital Marketing Opportunities
            </span>
          </div>

          <p className="hero__desc">
            I'm a Digital Marketing Executive focused on SEO, Local SEO, Google Business Profile,
            Google Ads, Meta Ads, and social media marketing. I enjoy using research and data to
            improve online visibility and solve digital marketing challenges.
          </p>
          <p className="hero__desc">
            I'm continuously learning and looking for opportunities to grow, contribute, and
            develop my skills as a digital marketing professional.
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
