import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <a className="navbar-brand" href="/">William Miller</a>
              <br />
              <small>&copy copyright</small>
            </div>
            <div className="col-sm-8">
              
              <ul className="fmenu navbar-nav">
                <li className="nav-item">
                  <a className="flink nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="flink nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="flink nav-link active" href="/">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
