import { Link } from "react-router-dom";
import { projects as projectsNl } from "../data/projects.nl";
import { projects as projectsEn } from "../data/projects.en"
import { useLanguage } from "../i18n/LanguageContext";

export default function Projects() {
  
  const { t, language } = useLanguage();
  const projects = language === "nl" ? projectsNl : projectsEn;

  return (
      <div className="container-fluid pb-4" style={{ backgroundColor: '#f8f9fa', minHeight: '85vh'}}>
      <div className="container py-4 mt-5 pt-4 bg-white shadow-sm rounded-2" style={{ minHeight: '85vh' }}>
        <h2 className="ms-1">{t.projects.title}</h2>

        <div className="row g-4 py-4">
          {projects.map(project => (
            <div className="col-md-6 col-lg-4" key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm project-card skill-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>

                  <p className="card-text text-muted">
                    {project.shortdescription}
                  </p>

                  <div className="mb-3">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="badge bg-light text-dark me-1 mb-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <small className="text-secondary mt-auto">
                    {project.type}
                  </small>
                </div>
              </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
      </div>
  );
}
