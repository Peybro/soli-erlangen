import * as React from "react";
import { Link } from "gatsby";

export default function Mininav() {
  return (
    <ul className="nav bg-success justify-content-center nav-pills flex-column flex-sm-row">
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/sportarten/kunstrad" activeClassName="active">
          Kunstrad
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/sportarten/reigen" activeClassName="active">
          Reigen
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/sportarten/radball" activeClassName="active">
          Radball
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/sportarten/gymnastik" activeClassName="active">
          Gymnastik
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/sportarten/kinderturnen" activeClassName="active">
          Kinderturnen
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/sportarten/kindertanzen" activeClassName="active">
          Kindertanzen
        </Link>
      </li>
    </ul>
  );
}
