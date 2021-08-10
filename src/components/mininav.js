import * as React from "react";
import { Link } from "gatsby";

import Nav from "react-bootstrap/Nav";

export default function Mininav() {
  const sports = [
    {
      name: "Kunstrad",
      src: "https://www.soli-erlangen.de/assets/stickmen/logo_kunstrad_q.png",
    },
    {
      name: "Reigen",
      src: "https://www.soli-erlangen.de/assets/stickmen/logo_reigen_q.png",
    },
    {
      name: "Radball",
      src: "https://www.soli-erlangen.de/assets/stickmen/logo_radball_q.png",
    },
    {
      name: "Gymnastik",
      src: "https://www.soli-erlangen.de/assets/stickmen/logo_gymnastik_q.png",
    },
    {
      name: "Kinderturnen",
      src: "https://www.soli-erlangen.de/assets/stickmen/logo_kinderturnen_q.png",
    },
    {
      name: "Kindertanzen",
      src: "https://www.soli-erlangen.de/assets/stickmen/logo_kindertanzen_q.png",
    },
  ];

  return (
    <Nav className="justify-content-center bg-success" variant="tabs">
      {sports.map((sport, i) => {
        return (
          <Nav.Item key={i}>
            <Link
              className="nav-link text-dark"
              to={`/sportarten/${sport.name[0].toLowerCase()}${sport.name.slice(
                1
              )}`}
              activeClassName="active"
            >
              <img src={sport.src} width="30" alt="Sports Icon" />
              <span className="d-none d-lg-inline">{sport.name}</span>
            </Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}
