import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a
            href="https://www.linkedin.com/in/ridhobaguse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/ridhobaguse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/ridhobaguse/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
