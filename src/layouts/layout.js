import * as React from "react";
import "../styles/bootstrap.scss";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Form from "react-bootstrap/Form";

import Cookies from "js-cookie";

import NavbarComponent from "../components/navbar";
import Mininav from "../components/mininav";
import Location from "../components/location";

export default function Layout({
  pageTitle,
  description,
  children,
  onSettingsChange,
}) {
  const [showCookieAlert, setShowCookieAlert] = React.useState(true);
  const [settings, setSettings] = React.useState({
    gcal: false,
    maps: false,
    gmaps: false,
    omaps: true,
  });
  const [showCookieInput, setShowCookieInput] = React.useState(false);
  const [saveCookieForDays, setSaveCookieForDays] = React.useState(30);
  const [isFluid, setIsFluid] = React.useState(false);

  React.useLayoutEffect(() => {
    const settingsCookie = Cookies.get("settings");
    if (settingsCookie) {
      setSettings(JSON.parse(settingsCookie));
      setShowCookieAlert(false);
    } else {
      setShowCookieAlert(true);
    }
  }, []);

  React.useEffect(() => {
    getIsFluid();

    document.addEventListener("resize", getIsFluid());
    return () => {
      document.removeEventListener("resize", getIsFluid());
    };
  });

  function getIsFluid() {
    // Check if window is defined (so if in the browser or in node.js)
    if (typeof window !== "undefined" && window.innerWidth > 1400) {
      setIsFluid(true);
    } else {
      setIsFluid(false);
    }
  }

  function handleCookieSettings(expiresInDays) {
    Cookies.set("settings", JSON.stringify(settings), {
      expires: expiresInDays
        ? expiresInDays
        : saveCookieForDays >= 0
        ? parseInt(saveCookieForDays)
        : 0,
    });
    //TODO
    // onSettingsChange();
    setShowCookieAlert(false);
  }

  return (
    <div className="layout">
      <Helmet defer={false}>
        <meta charSet="utf-8" />

        {pageTitle && <title>{`${pageTitle}`} | Soli-Erlangen</title>}
        {(!pageTitle || pageTitle === "index") && <title>Soli-Erlangen</title>}
        <meta
          name="description"
          content={
            description
              ? description
              : "Herzlich willkommen! Sport von jung bis alt. Bei uns steht vor allem der Spaß im Vordergrund. Schau doch mal vorbei :)"
          }
        />

        <link rel="icon" href="https://soli-erlangen.de/assets/logo.png" />
      </Helmet>

      <header>
        <NavbarComponent />
        <Mininav />
      </header>

      <main
        className={`${
          isFluid ? "container" : pageTitle !== "index" && "mx-2"
        } mb-2`}
      >
        {children}
      </main>

      <footer className="bg-success text-light p-3">
        <Location
          section={pageTitle}
          variant={
            settings.maps ? (settings.gmaps ? "gmaps" : "omaps") : "nomaps"
          }
        />
        <hr />
        <div className="mt-4 w-100">
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
        </div>
        <div
          id="banner-wrapper"
          style={{
            display: "block",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
            display: showCookieAlert ? "block" : "none",
          }}
        >
          <div
            id="cookie-banner"
            className="bg-light text-dark"
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100vw",
              padding: "20px",
            }}
          >
            <p className="h4">
              Diese Seite nutzt Cookies!{" "}
              <small className="text-muted">
                (... wenn du sie nicht aus lässt 😉)
              </small>
            </p>
            <div>
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
                  className="btn btn-outline-secondary mt-2 me-1"
                  type="submit"
                  onClick={() => handleCookieSettings()}
                >
                  Speichern{" "}
                  <small>
                    (setzt einen Cookie mit den Einstellungen für{" "}
                    {saveCookieForDays} Tag
                    {saveCookieForDays > 1 ? "e" : ""})
                  </small>
                </button>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleCookieSettings(-1)}
                >
                  Ohne Cookies fortfahren{" "}
                  <small>(frägt beim nächsten Mal wieder)</small>
                </button>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
