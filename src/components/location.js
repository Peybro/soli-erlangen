import * as React from "react";

export default function Impressum() {
  const [currentLocation, setCurrentLocation] = React.useState("");

  React.useEffect(() => {
    setCurrentLocation(window.location.pathname);
  }, []);

  let kindertanzen = {
    src: "https://www.openstreetmap.org/export/embed.html?bbox=11.021199524402618%2C49.55188973449008%2C11.02419823408127%2C49.55314955612231&amp;layer=mapnik&amp;marker=49.55251964936795%2C11.022698879241943",
    href: "https://www.openstreetmap.org/?mlat=49.55252&amp;mlon=11.02270#map=19/49.55252/11.02270",
    google_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.9215860358739!2d11.02208849163276!3d49.55225418451494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1fe95232de9bf%3A0x519124d61e7f6904!2sKinderland%20%22Die%20Arche%22!5e0!3m2!1sde!2sde!4v1627838826053!5m2!1sde!2sde",
  };
  let rest = {
    src: "https://www.openstreetmap.org/export/embed.html?bbox=10.96413016319275%2C49.590290983384044%2C10.966190099716188%2C49.59154981428122&amp;layer=mapnik&amp;marker=49.5909204028935%2C10.965160131454468",
    href: "https://www.openstreetmap.org/?mlat=49.59092&amp;mlon=10.96516#map=19/49.59092/10.96516",
    google_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.6672685240188!2d10.965003642438527!3d49.59089806153942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f8af807f70ab%3A0xa5a6089267024b38!2sTurnhalle%20Erlangen-B%C3%BCchenbach!5e0!3m2!1sde!2sde!4v1627838611343!5m2!1sde!2sde",
  };

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
          Rest
        </button>
      </div>

      {/* Google Maps */}
      <iframe
        src={
          !currentLocation.includes("kindertanzen")
            ? rest.google_src
            : kindertanzen.google_src
        }
        height="450"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      {/* Open Maps */}
      {/* <iframe
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src={
          !currentLocation.includes("kindertanzen")
            ? rest.src
            : kindertanzen.src
        }
        style={{ border: "1px solid black", width: "100%" }}
        title=""
      />
      <br />
      <small>
        <a
          href={
            !currentLocation.includes("kindertanzen")
              ? rest.href
              : kindertanzen.href
          }
        >
          Größere Karte anzeigen
        </a>
      </small> */}
    </div>
  );
}
