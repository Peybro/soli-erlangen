import * as React from "react";

export default function Impressum() {
  const [currentLocation, setCurrentLocation] = React.useState("rest");

  let kindertanzen = {
    src: "https://www.openstreetmap.org/export/embed.html?bbox=11.021199524402618%2C49.55188973449008%2C11.02419823408127%2C49.55314955612231&amp;layer=mapnik&amp;marker=49.55251964936795%2C11.022698879241943",
    href: "https://www.openstreetmap.org/?mlat=49.55252&amp;mlon=11.02270#map=19/49.55252/11.02270",
  };
  let rest = {
    src: "https://www.openstreetmap.org/export/embed.html?bbox=10.96413016319275%2C49.590290983384044%2C10.966190099716188%2C49.59154981428122&amp;layer=mapnik&amp;marker=49.5909204028935%2C10.965160131454468",
    href: "https://www.openstreetmap.org/?mlat=49.59092&amp;mlon=10.96516#map=19/49.59092/10.96516",
  };

  return (
    <div>
      <div className="mb-1">
        <button
          className={`btn btn${currentLocation === 'rest' ? '-outline' : ''}-primary`}
          onClick={() => setCurrentLocation("kindertanzen")}
        >
          Kindertanzen
        </button>
        <button
          className={`btn btn${currentLocation === 'kindertanzen' ? '-outline' : ''}-primary`}
          onClick={() => setCurrentLocation("rest")}
        >
          Rest
        </button>
      </div>

      <iframe
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src={currentLocation === "rest" ? rest.src : kindertanzen.src}
        style={{ border: "1px solid black", width: "100%" }}
        title=""
      />
      <br />
      <small>
        <a href={currentLocation === "rest" ? rest.href : kindertanzen.href}>
          Größere Karte anzeigen
        </a>
      </small>
    </div>
  );
}
