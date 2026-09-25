export default function SectionHeading({ eyebrow, title, intro, light = false, id }) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading__row">
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}
