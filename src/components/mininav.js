import * as React from "react";
import { Link } from "gatsby";

import Nav from "react-bootstrap/Nav";

export default function Mininav() {
  const sports = [
    {
      name: "Kunstrad",
      src: "https://www.soli-erlangen.de/img/logo_kunstrad_q.15eb38b1.png",
    },
    {
      name: "Reigen",
      src: "https://www.soli-erlangen.de/img/logo_einrad_q.0989f6f3.png",
    },
    {
      name: "Radball",
      src: "https://www.soli-erlangen.de/img/logo_radball_q.f6405617.png",
    },
    {
      name: "Gymnastik",
      src: "https://www.soli-erlangen.de/img/logo_gymnastik_q.69ca25c2.png",
    },
    {
      name: "Kinderturnen",
      src: "https://www.soli-erlangen.de/img/logo_turnen_q.e1ac8637.png",
    },
    {
      name: "Kindertanzen",
      src: "https://www.soli-erlangen.de/img/logo_tanz_q.b13535cd.png",
    },
  ];

  return (
    <Nav className="justify-content-center bg-success" variant="tabs">
      {sports.map((sport, i) => {
        return (
          <Nav.Item>
            <Link
              className="nav-link text-dark"
              to={`/sportarten/${sport.name[0].toLowerCase()}${sport.name.slice(
                1
              )}`}
              activeClassName="active"
            >
              <img src={sport.src} width="30" />
              <span className="d-none d-lg-inline">{sport.name}</span>
            </Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}
