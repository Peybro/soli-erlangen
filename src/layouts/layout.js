import * as React from "react";
import "../styles/bootstrap.scss";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import Cookies from "js-cookie";

import NavbarComponent from "../components/navbar";
import Mininav from "../components/mininav";
import Location from "../components/location";

export default function Layout({ pageTitle, children, onSettingsChange }) {
  const [showCookieAlert, setShowCookieAlert] = React.useState(true);
  const [settings, setSettings] = React.useState({
    gcal: false,
    maps: false,
    gmaps: false,
    omaps: true,
  });
  const [showCookieInput, setShowCookieInput] = React.useState(false);
  const [saveCookieForDays, setSaveCookieForDays] = React.useState(30);

  React.useEffect(() => {
    const settingsCookie = Cookies.get("settings");
    if (settingsCookie) {
      setSettings(JSON.parse(settingsCookie));
      setShowCookieAlert(false);
    } else {
      setShowCookieAlert(true);
    }
  }, []);

  function handleCookieSettings() {
    Cookies.set("settings", JSON.stringify(settings), {
      expires: saveCookieForDays >= 0 ? parseInt(saveCookieForDays) : 0,
    });
    onSettingsChange();
    setShowCookieAlert(false);
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

      <main className="container-fluid mb-2">{children}</main>

      <footer className="bg-success text-light p-3">
        <Location
          section={pageTitle}
          variant={
            settings.maps ? (settings.gmaps ? "gmaps" : "omaps") : "nomaps"
          }
        />
        <hr />
        <p className="mt-4 w-100">
          <small>
            Rad und Kraftfahrerverein Solidarität Erlangen 1903 e. V.
          </small>
          <div className="float-end">
            <Link className="text-light" to="/impressum">
              Impressum
            </Link>{" "}
            <span
              className="text-light text-decoration-underline"
              style={{ cursor: "pointer" }}
              onClick={() => setShowCookieAlert(true)}
            >
              Einstellungen
            </span>
          </div>
        </p>
        <Offcanvas
          show={showCookieAlert}
          placement={"bottom"}
          scroll={true}
          // onHide={() => handleCloseCookieAlert()}
        >
          <Offcanvas.Header>
            <Offcanvas.Title>
              Diese Seite nutzt Cookies!{" "}
              <small className="text-muted">
                (... wenn du sie nicht aus lässt 😉)
              </small>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <img
              className="d-none d-md-block"
              style={{
                width: "30vw",
                position: "absolute",
                right: "50px",
                bottom: "20px",
                zIndex: -5,
              }}
              src="https://www.freepngimg.com/download/cookie/10-2-cookie-png-file.png"
              alt="Cookies"
              onClick={() => setShowCookieInput(!showCookieInput)}
            />
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Check
                type="checkbox"
                label="Google Kalender"
                checked={settings.gcal}
                onChange={() =>
                  setSettings({ ...settings, gcal: !settings.gcal })
                }
              />
              <Form.Check
                type="checkbox"
                label="Maps"
                checked={settings.maps}
                onChange={() =>
                  setSettings({ ...settings, maps: !settings.maps })
                }
              />
              <div>
                <Form.Check
                  type="radio"
                  inline
                  name="mapsRadio"
                  label="Google Maps"
                  checked={settings.gmaps}
                  disabled={!settings.maps}
                  onChange={() =>
                    setSettings({ ...settings, gmaps: true, omaps: false })
                  }
                />
                <Form.Check
                  type="radio"
                  inline
                  name="mapsRadio"
                  label="Open Maps"
                  checked={settings.omaps}
                  disabled={!settings.maps}
                  onChange={() =>
                    setSettings({ ...settings, gmaps: false, omaps: true })
                  }
                />
              </div>
              <button
                className="btn btn-primary mt-2"
                type="submit"
                onClick={() => handleCookieSettings()}
              >
                Speichern
              </button>{" "}
              <small>
                (setzt einen Cookie für {saveCookieForDays} Tag
                {saveCookieForDays > 1 ? "e" : ""})
              </small>
              {showCookieInput && (
                <Form.Control
                  type="number"
                  className="mt-1"
                  min="0"
                  max="365"
                  value={saveCookieForDays}
                  onInput={(e) => setSaveCookieForDays(e.target.value)}
                />
              )}
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </footer>
    </div>
  );
}
