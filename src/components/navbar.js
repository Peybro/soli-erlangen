import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://soli-erlangen.de/img/soli-logo.b799b061.png"
            alt="[Logo]"
            width="40"
            className="d-inline-block align-text-top"
          />{" "}
          Soli-Erlangen
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Verein
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/verein/vorstand"
                    activeClassName="active"
                  >
                    Vorstand & Trainer
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/verein/zeitung"
                    activeClassName="active"
                  >
                    Vereinsblatt
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/verein/geschichte"
                    activeClassName="active"
                  >
                    Geschichte
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://www.facebook.com/pg/RalfHaeusinger"
                    activeClassName="active"
                  >
                    <i className="bi-facebook" /> Aktuelles
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/kalender"
                activeClassName="active"
              >
                Termine
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Unsere Sportarten
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sportarten/kunstrad"
                    activeClassName="active"
                  >
                    Kunstrad
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sportarten/reigen"
                    activeClassName="active"
                  >
                    Reigen
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sportarten/radball"
                    activeClassName="active"
                  >
                    Radball
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sportarten/gymnastik"
                    activeClassName="active"
                  >
                    Gymnastik
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sportarten/kinderturnen"
                    activeClassName="active"
                  >
                    Kinderturnen
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sportarten/kindertanzen"
                    activeClassName="active"
                  >
                    Kindertanzen
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
