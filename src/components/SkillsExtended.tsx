import { useLanguage } from "../i18n/LanguageContext";

export default function SkillsExtended() {

  const { t } = useLanguage();
  const skills = [
    { name: 'C# / .NET', rating: 4 },
    { name: 'Javascript', rating: 4 },
    { name: 'React', rating: 4 },
    { name: 'Typescript', rating: 4 },
    { name: 'Angular', rating: 4 },
    { name: 'Bootstrap', rating: 4 },
    { name: 'SQL', rating: 4 },
    { name: 'Java', rating: 4 },
    { name: 'MongoDB', rating: 3 },
    { name: 'Blazor', rating: 3 },
    { name: 'Tailwind', rating: 3 },
    { name: 'Serverless', rating: 2 }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
    <h2 className="ms-1">{t.skillsExt.skills}</h2>
    <section className="py-5 section-muted">
      <div className="container">
        <div className="row g-4">
          {skills.map((skill, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card shadow-sm text-center p-4 skill-card">
                <h5>{skill.name}</h5>
                <div>{renderStars(skill.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
