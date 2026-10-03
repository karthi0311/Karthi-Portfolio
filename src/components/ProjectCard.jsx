import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({
  number,
  category,
  title,
  location,
  description,
  workDone,
  tools,
  result,
  visual,
  cta,
  variant = 'a',
}) {
  return (
    <article className={`project project--${variant}`}>
      <div className="project__visual">
        {visual}
      </div>

      <div className="project__body">
        <div className="project__top">
          <span className="project__number">{number}</span>
          <span className="project__category">{category}</span>
        </div>

        <h3 className="project__title">{title}</h3>
        {location && <p className="project__location">{location}</p>}
        <p className="project__desc">{description}</p>

        {workDone && (
          <div className="project__block">
            <p className="project__block-label">Work Done</p>
            <ul className="project__list">
              {workDone.map((w) => (
                <li key={w}><CheckCircle2 size={14} strokeWidth={2.2} /> {w}</li>
              ))}
            </ul>
          </div>
        )}

        {tools && (
          <div className="project__block">
            <p className="project__block-label">Tools</p>
            <div className="project__tags">
              {tools.map((t) => (
                <span className="project__tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {result && (
          <div className="project__result">
            <p className="project__block-label">Result</p>
            <p>{result}</p>
          </div>
        )}

        {cta}
      </div>
    </article>
  );
}

export function CtaButton({ children, ...props }) {
  return (
    <button className="btn btn-primary btn-sm project__cta" {...props}>
      {children} <ArrowUpRight size={15} strokeWidth={2.4} />
    </button>
  );
}

export function CtaLink({ children, ...props }) {
  return (
    <a className="btn btn-primary btn-sm project__cta" {...props}>
      {children} <ArrowUpRight size={15} strokeWidth={2.4} />
    </a>
  );
}
