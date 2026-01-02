import type { Project } from "../types/types";
import { projects as projectsNl } from "../data/projects.nl";
import { projects as projectsEn } from "../data/projects.en";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";


export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();

     const { t, language } = useLanguage();

     const projects = language === "nl" ? projectsNl : projectsEn;

    const project: Project | undefined = projects.find(
        p => p.id === Number(id)
    );

    if (!project) {
        return (
        <div className="container-fluid pb-4" style={{ backgroundColor: '#f8f9fa', minHeight: '85vh'}}>
          <div className="container py-5 mt-5 pt-4 bg-white shadow-sm rounded-2" style={{ minHeight: '85vh' }}>
            <h2 className="mb-3 ms-1">{t.projects.notFoundTitle}</h2>

            <p className="text-muted mb-4 ms-1">
              {t.projects.notFoundText}<a href="/projects">{t.projects.myProjects}</a>.
            </p>
          </div>
        </div>
        );
    }

  return (
   <div className="container-fluid pb-4" style={{ backgroundColor: '#f8f9fa', minHeight: '85vh'}}>
      <div className="container py-5 mt-5 pt-4 bg-white shadow-sm rounded-2" style={{ minHeight: '85vh' }}>

        <h2 className="mb-3 ms-1">{project.title}</h2>

        <p className="text-muted mb-4 ms-1">
          {project.description}
        </p>

        <div className="mb-4 ms-1">
          <h5>{t.projects.technologies}</h5>
          <div>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="badge bg-light text-dark me-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 ms-1">
          <h5>{t.projects.projectType}</h5>
          <p>{project.type}</p>
        </div>

        {project.learnings && (
        <>
        <div className="ms-1">
            <h5>{t.projects.learnings}</h5>
            <p>{project.learnings}</p>
        </div>
        </>
        )}
        {project.challenges && (
        <>
        <div className="ms-1">
            <h5>{t.projects.challenges}</h5>
            <p>{project.challenges}</p>
        </div>
        </>
        )}
        <Link to="/projects" className="btn btn-outline-primary ms-1 mt-4">
          {t.projects.backToProjects}
        </Link>

      </div>
      </div>
  );
}
