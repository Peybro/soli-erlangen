import * as React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import soliLogo from "./../../static/logo.png";

export default function NavbarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src={soliLogo}
            alt="Soli Logo"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Soli-Erlangen
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="nav-link"
              to="/verein/zeitung"
              activeClassName="active"
            >
              Zeitung
            </Link>
            <NavDropdown title="Verein">
              <Link
                className="dropdown-item"
                to="/verein/vorstand"
                activeClassName="active"
              >
                Vorstand & Trainer
              </Link>
              {/* <Link
                className="dropdown-item"
                to="/verein/zeitung"
                activeClassName="active"
              >
                Vereinsblatt
              </Link> */}
              <Link
                className="dropdown-item"
                to="/verein/geschichte"
                activeClassName="active"
              >
                Geschichte
              </Link>
              <a
                className="dropdown-item"
                href="https://www.soli-erlangen.de/spiel/"
              >
                Spielberichtsbogen
              </a>
              <NavDropdown.Divider />
              <a
                className="dropdown-item"
                href="https://de-de.facebook.com/RalfHaeusinger/"
              >
                <i className="bi-facebook" /> Aktuelles
              </a>
            </NavDropdown>
            <Link className="nav-link" to="/kalender" activeClassName="active">
              Termine
            </Link>
            <a
              className="nav-link"
              href="https://de-de.facebook.com/RalfHaeusinger/"
            >
              <i className="bi-facebook" /> Aktuelles
            </a>

            {/* <NavDropdown title="Unsere Sportarten">
              <Link
                className="dropdown-item"
                to="/sportarten/kunstrad"
                activeClassName="active"
              >
                Kunstrad
              </Link>
              <Link
                className="dropdown-item"
                to="/sportarten/reigen"
                activeClassName="active"
              >
                Reigen
              </Link>
              <Link
                className="dropdown-item"
                to="/sportarten/radball"
                activeClassName="active"
              >
                Radball
              </Link>
              <Link
                className="dropdown-item"
                to="/sportarten/gymnastik"
                activeClassName="active"
              >
                Gymnastik
              </Link>
              <Link
                className="dropdown-item"
                to="/sportarten/kinderturnen"
                activeClassName="active"
              >
                Kinderturnen
              </Link>
              <Link
                className="dropdown-item"
                to="/sportarten/kindertanzen"
                activeClassName="active"
              >
                Kindertanzen
              </Link>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
