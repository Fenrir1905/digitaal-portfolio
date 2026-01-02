import sdWorxImg from '../images/sd-worx.png';
import nilfiskImg from '../images/nilfisk.png';
import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {

  const { t } = useLanguage();
  const experienceLogos = [sdWorxImg, nilfiskImg, nilfiskImg];

  return (
    <>
      <h2 className='ms-1'>{t.experience.experience}</h2>
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {t.experience.items.map((exp, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
                <img
                  src={experienceLogos[idx]}
                  alt={exp.company}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                    marginRight: 15
                  }}
                />
                <div>
                  <h5>{exp.role}</h5>
                  <p className="mb-1">
                    <strong>{exp.company}</strong> | {exp.period}
                  </p>
                  <p className="mb-0">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
