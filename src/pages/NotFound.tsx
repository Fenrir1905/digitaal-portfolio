import { useLanguage } from "../i18n/LanguageContext";

export default function NotFound() {

  const { t } = useLanguage();

  return (
        <div className="container-fluid pb-4" style={{ backgroundColor: '#f8f9fa', minHeight: '85vh'}}>
          <div className="container py-5 mt-5 pt-4 bg-white shadow-sm rounded-2" style={{ minHeight: '85vh' }}>
            <h2 className="mb-3 ms-1">{t.notfound.notFoundTitle}</h2>

            <p className="text-muted mb-4 ms-1">
             {t.notfound.notfoundText}<a href="/">home</a>.
            </p>
          </div>
        </div>
  );
}
