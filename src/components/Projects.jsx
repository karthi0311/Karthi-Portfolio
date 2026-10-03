import { useState } from 'react';
import { Sparkles, Globe2 } from 'lucide-react';
import ProjectCard, { CtaButton, CtaLink } from './ProjectCard.jsx';
import EvidenceModal from './EvidenceModal.jsx';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">My Projects</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-list">
          <ProjectCard
            variant="a"
            number="01"
            category="Google Business Profile & Local SEO"
            title="Hot Bites"
            location="Ponmeni, Madurai, Tamil Nadu"
            description={
              <>
                Improved HOT BITES' local search visibility for relevant fast-food searches in
                Ponmeni, Madurai — targeting the search query <strong>"fast food shop in Ponmeni"</strong>,
                along with related terms like "burger in Ponmeni" and "fast food shop near me".
              </>
            }
            workDone={[
              'Google Business Profile setup & optimization',
              'Business category & information optimization',
              'Product/service optimization & Google Posts',
              'Business photo optimization',
              'Local keyword research',
              'Competitor profile & review analysis',
            ]}
            result="HOT BITES appeared in Google's AI Overview for the target search query “fast food shop in Ponmeni,” shown under “Popular Fast Food Options in Ponmeni.”"
            visual={
              <button
                className="project__evidence-trigger"
                onClick={() => setModalOpen(true)}
                aria-haspopup="dialog"
              >
                <img
                  src="/hotbites-proof.png"
                  alt="Google AI Overview showing HOT BITES listed under Popular Fast Food Options in Ponmeni"
                  className="project__img"
                />
                <span className="project__evidence-badge">
                  <Sparkles size={13} strokeWidth={2.4} /> Google AI Overview
                </span>
              </button>
            }
            cta={
              <CtaButton onClick={() => setModalOpen(true)}>View Evidence</CtaButton>
            }
          />

          <ProjectCard
            variant="b"
            number="02"
            category="Website Development / SEO"
            title="AI-Powered Website Development & SEO"
            description="Created, SEO-optimized, and deployed a responsive business website for HOT BITES, a fast-food business in Ponmeni, Madurai, using AI-assisted development."
            workDone={[
              'AI-assisted, responsive web development',
              'Keyword research and on-page SEO implementation',
              'Technical SEO: sitemap.xml, robots.txt, heading structure',
              'Google Search Console & Google Analytics setup',
              'Meta title, description & image alt-text optimization',
              'Internal linking, mobile optimization & deployment on Vercel',
            ]}
            tools={['HTML', 'CSS', 'AI Tools', 'Google Search Console', 'Google Analytics', 'Vercel']}
            result="Built and deployed a live, SEO-optimized business website targeting local search visibility for HOT BITES in Ponmeni, Madurai."
            visual={
              <a
                href="https://hotbites-madurai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project__preview"
                aria-label="Open the live Hot Bites website in a new tab"
              >
                <div className="project__browser-bar">
                  <span /><span /><span />
                  <span className="project__browser-url">
                    <Globe2 size={12} strokeWidth={2.2} /> hotbites-madurai.vercel.app
                  </span>
                </div>
                <div className="project__preview-body">
                  <p className="project__status"><span className="project__status-dot" /> Live</p>
                  <p className="project__preview-name">HOT BITES</p>
                  <p className="project__preview-tag">Fast Food &middot; Ponmeni, Madurai</p>
                </div>
              </a>
            }
            cta={
              <CtaLink href="https://hotbites-madurai.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Website
              </CtaLink>
            }
          />
        </div>
      </div>

      <EvidenceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        src="/hotbites-proof.png"
        alt="Google AI Overview showing HOT BITES listed under Popular Fast Food Options in Ponmeni, Madurai"
        caption="Google Search — AI Overview, September 2, 2026"
      />
    </section>
  );
}
