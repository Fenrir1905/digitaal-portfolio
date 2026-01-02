import { useLanguage } from "../i18n/LanguageContext";

export default function FutureProofSkills(){

     const { t } = useLanguage();
     
    return(
        <>
        <section className="py-5 section-muted">
        <h2 className="mb-4 ms-1">{t.futureProof.softSkills}</h2>
        <div className="row mb-3 ms-1">
            <div className="col-md-4 fw-bold">
                 {t.futureProof.problemSolving}
            </div>
            <div className="col-md-8">
                 {t.futureProof.problemSolvingText}
            </div>
        </div>
        <div className="row mb-3 ms-1">
            <div className="col-md-4 fw-bold">
                 {t.futureProof.learning}
            </div>
            <div className="col-md-8">
                 {t.futureProof.learningText}
            </div>
        </div>
        <div className="row mb-3 ms-1">
            <div className="col-md-4 fw-bold">
                 {t.futureProof.feedback}
            </div>
            <div className="col-md-8">
                 {t.futureProof.feedbackText}
            </div>
        </div>
        <div className="row mb-3 ms-1">
            <div className="col-md-4 fw-bold">
                 {t.futureProof.collaboration}
            </div>
            <div className="col-md-8">
                 {t.futureProof.collaborationText}
            </div>
        </div>
        <div className="row mb-3 ms-1">
            <div className="col-md-4 fw-bold">
                 {t.futureProof.uxThinking}
            </div>
            <div className="col-md-8">
                 {t.futureProof.uxThinkingText}
            </div>
        </div>
        <div className="row mb-3 ms-1">
            <div className="col-md-4 fw-bold">
                 {t.futureProof.independence}
            </div>
            <div className="col-md-8">
                {t.futureProof.independenceText}
            </div>
        </div>
        </section>
        </>
    );
}