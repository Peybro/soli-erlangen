import * as React from "react";

export default function Impressum({ section, variant }) {
  const [currentLocation, setCurrentLocation] = React.useState("");

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined";

  React.useEffect(() => {
    if (isBrowser) {
      setCurrentLocation(window.location.pathname);
    }
  }, []);

  let kindertanzen = {
    src: "https://www.openstreetmap.org/export/embed.html?bbox=11.020486056804659%2C49.551694842053685%2C11.024836599826815%2C49.55328528082332&amp;layer=mapnik",
    href: "https://www.openstreetmap.org/?mlat=49.55252&amp;mlon=11.02270#map=19/49.55252/11.02270",
    google_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.9215860358739!2d11.02208849163276!3d49.55225418451494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1fe95232de9bf%3A0x519124d61e7f6904!2sKinderland%20%22Die%20Arche%22!5e0!3m2!1sde!2sde!4v1627838826053!5m2!1sde!2sde",
  };
  let rest = {
    src: "https://www.openstreetmap.org/export/embed.html?bbox=10.962818562984468%2C49.59010319919498%2C10.967169106006624%2C49.59169238700324&amp;layer=mapnik",
    href: "https://www.openstreetmap.org/?mlat=49.59092&amp;mlon=10.96516#map=19/49.59092/10.96516",
    google_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.6672685240188!2d10.965003642438527!3d49.59089806153942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f8af807f70ab%3A0xa5a6089267024b38!2sTurnhalle%20Erlangen-B%C3%BCchenbach!5e0!3m2!1sde!2sde!4v1627838611343!5m2!1sde!2sde",
  };

  if (variant !== "nomaps") {
    return (
      <div>
        <div className="mb-1">
          <button
            className={`me-2 btn btn${
              !currentLocation.includes("kindertanzen") ? "-outline" : ""
            }-light`}
            onClick={() => setCurrentLocation("kindertanzen")}
          >
            Kindertanzen
          </button>
          <button
            className={`btn btn${
              currentLocation.includes("kindertanzen") ? "-outline" : ""
            }-light`}
            onClick={() => setCurrentLocation("rest")}
          >
            {section === "Kunstrad" ||
            section === "Reigen" ||
            section === "Radball" ||
            section === "Gymnastik" ||
            section === "Kinderturnen"
              ? `${section} (Rest)`
              : "Rest"}
          </button>
        </div>

        {/* Google Maps */}
        {variant === "gmaps" && (
          <iframe
            src={
              !currentLocation.includes("kindertanzen")
                ? rest.google_src
                : kindertanzen.google_src
            }
            height="450"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          />
        )}

        {/* Open Maps */}
        {variant === "omaps" && (
          <>
            <iframe
              height="350"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={
                !currentLocation.includes("kindertanzen")
                  ? rest.src
                  : kindertanzen.src
              }
              style={{ border: "1px solid black", width: "100%" }}
              title="Open Maps Location"
            />
            <br />
            <small>
              <span className="fw-bold">
                {!currentLocation.includes("kindertanzen")
                  ? "(Nummer 4)"
                  : "(Nummer 43)"}
              </span>
              {"  "}
              <a
                href={
                  !currentLocation.includes("kindertanzen")
                    ? rest.href
                    : kindertanzen.href
                }
                className="text-light"
              >
                Größere Karte anzeigen
              </a>
            </small>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col">
          <h3>Kindertanzen:</h3>
          <p>Kindergarten Arche</p>
          <p>
            Lachnerstraße 43
            <br />
            91058 Erlangen
          </p>
        </div>
        <div className="col">
          <h3>
            {section === "Kunstrad" ||
            section === "Reigen" ||
            section === "Radball" ||
            section === "Gymnastik" ||
            section === "Kinderturnen"
              ? `${section} (Rest)`
              : "Rest"}
            :
          </h3>
          <p>Schulturnhalle Grundschule Büchenbach</p>
          <p>
            Jakob-Nein-Straße 4<br />
            91056 Erlangen
          </p>
        </div>
      </div>
    );
  }
}
