import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2>Education</h2>
        </div>

        <div className="edu-card">
          <span className="edu-card__icon"><GraduationCap size={22} strokeWidth={1.9} /></span>
          <div>
            <h3 className="edu-card__title">B.Sc. Physics</h3>
            <p className="edu-card__org">Mannar Thirumalai Naicker College, Madurai | 2022–2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
