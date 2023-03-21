import * as React from "react";
import { Link } from "gatsby";

import kunstradLogo from "./../../static/stickmen/logo_kunstrad_q.png";
import reigenLogo from "./../../static/stickmen/logo_reigen_q.png";
import radballLogo from "./../../static/stickmen/logo_radball_q.png";
import gymnastikLogo from "./../../static/stickmen/logo_gymnastik_q.png";
import kinderturnenLogo from "./../../static/stickmen/logo_kinderturnen_q.png";
import kindertanzenLogo from "./../../static/stickmen/logo_kindertanzen_q.png";

import Nav from "react-bootstrap/Nav";

export default function Mininav() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const sports = [
    {
      name: "Kunstrad",
      src: kunstradLogo,
    },
    {
      name: "Reigen",
      src: reigenLogo,
    },
    {
      name: "Radball",
      src: radballLogo,
    },
    {
      name: "Gymnastik",
      src: gymnastikLogo,
    },
    {
      name: "Kinderturnen",
      src: kinderturnenLogo,
    },
    {
      name: "Kindertanzen",
      src: kindertanzenLogo,
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
              <img
                src={sport.src}
                className="d-inline"
                width={width <= 350 ? 20 : width < 384 ? "25" : "30"}
                alt="Sports Icon"
              />
              <span className="d-none d-lg-inline">{sport.name}</span>
            </Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}
