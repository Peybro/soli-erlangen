import * as React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Link className="navbar-brand" to="/">
          <img
            src="https://soli-erlangen.de/img/soli-logo.b799b061.png"
            alt="[Logo]"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Soli-Erlangen
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Verein">
              <Link
                className="dropdown-item"
                to="/sportarten/reigen"
                activeClassName="active"
              >
                Vorstand & Trainer
              </Link>
              <Link
                className="dropdown-item"
                to="/verein/zeitung"
                activeClassName="active"
              >
                Vereinsblatt
              </Link>
              <Link
                className="dropdown-item"
                to="/verein/geschichte"
                activeClassName="active"
              >
                Geschichte
              </Link>
              <NavDropdown.Divider />
              <a
                className="dropdown-item"
                href="https://www.facebook.com/pg/RalfHaeusinger"
              >
                <i className="bi-facebook" /> Aktuelles
              </a>
            </NavDropdown>
            <Link className="nav-link" to="/kalender" activeClassName="active">
              Termine
            </Link>
            <NavDropdown title="Unsere Sportarten">
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
