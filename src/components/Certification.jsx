import { BadgeCheck } from 'lucide-react';

export default function Certification() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Certification</p>
          <h2>Certification</h2>
        </div>

        <div className="cert-card">
          <span className="cert-card__icon"><BadgeCheck size={22} strokeWidth={1.9} /></span>
          <div>
            <h3 className="cert-card__title">Digital Marketing Certification</h3>
            <p className="cert-card__org">Shiksha Simple Learn, Madurai</p>
          </div>
          <span className="cert-card__period">Jul 2025 &ndash; Oct 2025</span>
        </div>
      </div>
    </section>
  );
}
