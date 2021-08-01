import * as React from "react";
import "./../styles/bootstrap.scss";
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Navbar from "./navbar";
import Mininav from "./mininav";
import Location from "./location";

export default function Layout({ pageTitle, children }) {
  return (
    <div className="layout">
      <Helmet defer={false}>
        {pageTitle && <title>{`${pageTitle}`} | Soli-Erlangen</title>}
        {!pageTitle && <title>Soli-Erlangen</title>}

        <link
          rel="icon"
          href="https://soli-erlangen.de/img/soli-logo.b799b061.png"
        />
      </Helmet>

      <header>
        <Navbar />
        <Mininav />
      </header>

      <main className="container-fluid">
        {pageTitle && <h3 class="heading">{pageTitle}</h3>}
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
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
        >
          Diese Seite nutzt Cookies!
        </button>
        <div
          class="offcanvas offcanvas-bottom bg-success"
          tabindex="-1"
          id="offcanvasBottom"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Offcanvas bottom
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body small">
            Mit der Nutzung dieser Seite geben Sie sich einverstanden, dass
            Cookies auf Ihrem Gerät gespeichert werden.
          </div>
        </div>
      </footer>
    </div>
  );
}
