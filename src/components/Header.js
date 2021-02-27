import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          William Miller
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="/About">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
