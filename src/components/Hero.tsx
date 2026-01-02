import bgImage from '../images/background.jpg';
import { useLanguage } from "../i18n/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function Hero() {

const { t } = useLanguage();
 const navigate = useNavigate();

  return (
    <section
      className="d-flex align-items-center justify-content-center vh-100 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      ></div>
      <div className="text-center" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="display-4 mb-3">Milan Bequet</h1>
        <p className="lead mb-4">{t.home.subtitle}</p>
        <a onClick={() => navigate("/projects")} className="btn btn-primary btn-lg me-2">{t.navbar.projects}</a>
        <a onClick={() => navigate("/about")} className="btn btn-outline-light btn-lg">{t.navbar.about}</a>
      </div>
    </section>
  );
}
