export default function Footer() {
  return (
    <footer className="bg-muted text-dark py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Milan Bequet. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="https://www.linkedin.com/in/milan-bequet-297a082b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-2"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/Fenrir1905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-2"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="mailto:milanbequet@gmail.com" className="text-dark mx-2">
          <i className="fas fa-envelope fa-lg"></i>
        </a>
        </div>
      </div>
    </footer>
  );
}
