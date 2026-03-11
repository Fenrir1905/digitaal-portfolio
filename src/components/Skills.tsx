import { useLanguage } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";

export default function Skills() {

  const { t } = useLanguage();
  const skills = ['C# / .NET', 'Java', 'Javascript', 'Typescript', 'Blazor', 'Angular', 'React', 'SQL' ,'MongoDB'];

  return (
    <section className="py-5 bg-light" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <h2 className="text-center mb-4">{t.home.mySkills}</h2>
        <div className="row g-4">
          {skills.map((skill, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card shadow-sm text-center p-4">
                <h5>{skill}</h5>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-4 mb-4">{t.home.more} <Link to="/about">{t.home.here}</Link>!</p>
      </div>
    </section>
  );
}
