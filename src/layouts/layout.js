import React, { useState, useEffect } from "react";
import "../styles/bootstrap.scss";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import Cookies from "js-cookie";

import NavbarComponent from "../components/navbar";
import Mininav from "../components/mininav";
import Location from "../components/location";

import { doc, onSnapshot } from "firebase/firestore";
import db from "./../services/firebase";

export default function Layout({
  pageTitle,
  description,
  children,
  onSettingsChange,
}) {
  const [showCookieAlert, setShowCookieAlert] = useState(true);

  const [cookieSettings, setCookieSettings] = useState({
    gcal: false,
    maps: false,
    gmaps: false,
    omaps: true,
  });

  const [gcal, setGcal] = useState(false);
  const [maps, setMaps] = useState(false);
  const [gmaps, setGmaps] = useState(false);
  const [omaps, setOmaps] = useState(true);

  const [showCookieInput, setShowCookieInput] = useState(false);
  const [isFluid, setIsFluid] = useState(false);
  const [bannerSettings, setBannerSettings] = useState({
    enabled: true,
    title: "",
    description: "",
    bgColor: "",
  });
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const settingsCookie = Cookies.get("settings");
    if (settingsCookie) {
      const tempSettings = JSON.parse(settingsCookie);
      setGcal(tempSettings.gcal);
      setMaps(tempSettings.maps);
      setGmaps(tempSettings.gmaps);
      setOmaps(tempSettings.omaps);
      setCookieSettings(JSON.parse(settingsCookie));

      setShowCookieAlert(false);
    } else {
      setShowCookieAlert(true);
    }
  }, []);

  useEffect(() => {
    listenForUpdates();
    getIsFluid();

    document.addEventListener("resize", getIsFluid());
    return () => {
      document.removeEventListener("resize", getIsFluid());
    };
  }, []);

  function getIsFluid() {
    // Check if window is defined (so if in the browser or in node.js)
    if (typeof window !== "undefined" && window.innerWidth > 1400) {
      setIsFluid(true);
    } else {
      setIsFluid(false);
    }
  }

  function handleCookieSettings(useTheseSettings = false, expires = 365) {
    const tempSettings =
      useTheseSettings !== false
        ? useTheseSettings
        : {
            gcal: gcal,
            maps: maps,
            gmaps: gmaps,
            omaps: omaps,
          };

    setGcal(tempSettings.gcal);
    setMaps(tempSettings.maps);
    setGmaps(tempSettings.gmaps);
    setOmaps(tempSettings.omaps);
    setCookieSettings(tempSettings);

    Cookies.set("settings", JSON.stringify(tempSettings), {
      expires: expires,
    });
    if (pageTitle === "index" || pageTitle === "kalender") onSettingsChange();
    setShowCookieAlert(false);
  }

  function handleOnlyEssentialSettings() {
    // TODO 🤮
    handleCookieSettings(
      { gcal: false, maps: false, gmaps: false, omaps: true },
      31
    );
  }

  function listenForUpdates() {
    onSnapshot(doc(db, "banner", "settings"), (doc) => {
      setBannerSettings(doc.data());
    });
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

      <header className="bg-success">
        <NavbarComponent />
        {(pageTitle === "index" || pageTitle === "Bannersettings") &&
          showBanner &&
          bannerSettings.enabled && (
            <div className="container">
              <Alert
                variant={bannerSettings.bgColor}
                onClose={() => setShowBanner(false)}
                dismissible
              >
                <Alert.Heading>{bannerSettings.title}</Alert.Heading>
                {bannerSettings.description.split("\n").map((line, i) => {
                  return (
                    <p key={i} className="mb-0">
                      {line}
                    </p>
                  );
                })}
              </Alert>
            </div>
          )}
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
        <div className="container">
          <div className="mb-4">
            <h3 className="heading">Hier findest du uns:</h3>
            <Location
              section={pageTitle}
              variant={
                cookieSettings.maps
                  ? cookieSettings.gmaps
                    ? "gmaps"
                    : "omaps"
                  : "nomaps"
              }
            />
          </div>

          <hr />

          <div className="row">
            <div className="col-sm-12 col-md">
              <p className="fs-6">
                Rad- und Kraftfahrerverein Solidarität Erlangen 1903 e. V.
              </p>
            </div>
            <div className="col-auto">
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
        </div>

        {showCookieAlert && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              color: "black",
              backgroundColor: "transparent",
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              pointerEvents: "none",
              cursor: "not-allowed",
            }}
          >
            <div
              className="p-4"
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                backgroundColor: "white",
                width: "100%",
                borderTop: "1px solid #333",
                zIndex: 10000,
                pointerEvents: "all",
              }}
            >
              <h2>Diese Seite nutzt Cookies!</h2>
              <div>
                <img
                  className="d-none d-md-block"
                  style={{
                    width: "30vw",
                    position: "absolute",
                    right: "50px",
                    bottom: "20px",
                    zIndex: 10001,
                  }}
                  src="https://www.freepngimg.com/download/cookie/10-2-cookie-png-file.png"
                  alt="Cookies"
                  onClick={() => setShowCookieInput(!showCookieInput)}
                />
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Check
                    type="checkbox"
                    label="Google Kalender"
                    checked={gcal}
                    onChange={() => setGcal(!gcal)}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Maps"
                    checked={maps}
                    onChange={() => setMaps(!maps)}
                  />
                  <div>
                    <Form.Check
                      type="radio"
                      inline
                      name="mapsRadio"
                      label="Google Maps"
                      checked={gmaps}
                      disabled={!maps}
                      onChange={() => {
                        setGmaps(true);
                        setOmaps(false);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      inline
                      name="mapsRadio"
                      label="Open Maps"
                      checked={omaps}
                      disabled={!maps}
                      onChange={() => {
                        setGmaps(false);
                        setOmaps(true);
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-outline-primary mt-2 me-1"
                    type="submit"
                    onClick={() => handleCookieSettings()}
                  >
                    Speichern
                  </button>
                  <button
                    className="btn btn-primary mt-2"
                    type="submit"
                    onClick={() => handleOnlyEssentialSettings()}
                  >
                    Nur essentielle
                  </button>
                </Form>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
