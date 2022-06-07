const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 mt-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://github.com/bhavyaj12"
              target="_blank"
              className="nav-link px-2 text-muted"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/bhavzlearn"
              target="_blank"
              className="nav-link px-2 text-muted"
            >
              Twitter
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/bhavya-joshi-438178184"
              target="_blank"
              className="nav-link px-2 text-muted"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          &copy; All Rights Reserved 2022 Halcyon-Designs
        </p>
      </footer>
    </div>
  );
};

export default Footer;
