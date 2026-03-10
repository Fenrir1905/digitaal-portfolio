import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from "../i18n/LanguageContext";
import { useEffect, useState } from 'react';

export default function Navbar() {

  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = isHome
    ? scrolled
      ? "navbar navbar-expand-lg navbar-light bg-light fixed-top shadow"
      : "navbar navbar-expand-lg navbar-dark navbar-transparent fixed-top"
    : "navbar navbar-expand-lg navbar-light bg-light fixed-top";

  return (
   <nav className={navbarClass}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Milan Bequet</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">{t.navbar.home}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">{t.navbar.projects}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">{t.navbar.about}</Link></li>
          </ul> 
          <button
            className="btn btn-sm"
            onClick={() => setLanguage(language === "nl" ? "en" : "nl")} aria-label="Change language">
            <img
              src={language === "nl" ? "/flags/flagEn.svg" : "/flags/flagNl.svg"}
              alt={language === "nl" ? "English" : "Nederlands"}
              style={{ width: 24, height: 24 }}
            />
        </button>
        </div>
      </div>
    </nav>
  );
}
