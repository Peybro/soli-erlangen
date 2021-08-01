import * as React from "react";
import "./../styles/bootstrap.scss";
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Offcanvas from "react-bootstrap/Offcanvas";
import Cookies from "js-cookie";

import NavbarComponent from "./navbar";
import Mininav from "./mininav";
import Location from "./location";

export default function Layout({ pageTitle, children }) {
  const [showCookie, setShowCookie] = React.useState(true);

  React.useState(() => {
    if (Cookies.get("cookies_read") === "true") {
      setShowCookie(false);
    } else {
      setShowCookie(true);
    }
  }, []);

  function handleCloseCookieAlert() {
    setShowCookie(false);
    Cookies.set("cookies_read", "true", { expires: 7 });
  }

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
        <NavbarComponent />
        <Mininav />
      </header>

      <main className="container-fluid">
        {pageTitle && <h3 class="heading">{pageTitle}</h3>}
        {children}
      </main>

      <footer className="bg-success text-light p-3">
        <Location />
        <p className="mt-4 w-100">
          Rad und Kraftfahrerverein Solidarität Erlangen 1903 e. V.
          <Link className="float-end" to="/impressum">
            Impressum
          </Link>
        </p>
        <Offcanvas
          show={showCookie}
          placement={"bottom"}
          onHide={() => handleCloseCookieAlert()}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Diese Seite nutzt Cookies!</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Mit der Nutzung dieser Seite geben Sie sich damit einverstanden,
            dass Cookies gespeichert werden.
          </Offcanvas.Body>
        </Offcanvas>
      </footer>
    </div>
  );
}
