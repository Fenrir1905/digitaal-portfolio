import Experience from "../components/Experience";
import FutureProofSkills from "../components/FutureProofSkills";
import SkillsExtended from "../components/SkillsExtended";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {

  const { t } = useLanguage();

  return (
   <>
   <div className="container-fluid pb-4" style={{ backgroundColor: '#f8f9fa', minHeight: '85vh'}}>
          <div className="container py-4 mt-5 pt-4 bg-white shadow-sm rounded-2" style={{ minHeight: '85vh'}}>
              <h2 className="ms-1">{t.about.aboutMe}</h2>
              <div style={{ whiteSpace: 'pre-wrap' }} className="py-4 ms-1">
                  {t.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            <hr/>
            <SkillsExtended/>
            <hr/>  
            <Experience/>
            <hr/>
            <FutureProofSkills/>
          </div>
      </div>
      </>
  );
}
