import * as React from "react";
import "./../styles/bootstrap.scss";
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Link } from "gatsby";

import Navbar from "./navbar";
import Mininav from "./mininav";
import Location from "./location";

export default function Layout({ pageTitle, children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
        <Mininav />
      </header>

      <main className="container-fluid">
        <h3 class="heading">{pageTitle}</h3>
        {children}
      </main>

      <footer className="bg-success text-light p-3">
        Hier findet ihr uns:
        <Location />
        <p className="mt-4 w-100">
          Rad und Kraftfahrerverein Solidarität Erlangen 1903 e. V.
          <Link className="float-end" to="/impressum">
            Impressum
          </Link>
        </p>
      </footer>
    </div>
  );
}
