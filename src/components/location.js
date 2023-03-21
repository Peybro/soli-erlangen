import * as React from "react";

import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

export default function Impressum({ section, variant }) {
  return (
    <Tab.Container
      defaultActiveKey={
        section === "Kindertanzen" ? "kindertanzen" : "kunstrad"
      }
    >
      <Row>
        <Col md={3}>
          <Nav variant="pills" className="flex-column">
            {[
              "Kunstrad",
              "Reigen",
              "Radball",
              "Gymnastik",
              "Kinderturnen",
              "Kindertanzen",
            ].map((sport, i) => (
              <Nav.Item key={i}>
                <Nav.Link eventKey={sport.toLowerCase()} className="text-light">
                  {sport}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>

        <div className="col bg-dark p-4 rounded-4">
          <Tab.Content>
            {["Kunstrad", "Reigen", "Radball", "Gymnastik", "Kinderturnen"].map(
              (sport, i) => (
                <Tab.Pane eventKey={sport.toLowerCase()} key={i}>
                  {variant === "nomaps" && (
                    <>
                      <h4>Schulturnhalle Grundschule Büchenbach</h4>
                      <p>
                        Jakob-Nein-Straße 4<br />
                        91056 Erlangen
                      </p>
                      <a
                        href="https://www.openstreetmap.org/?mlat=49.59092&amp;mlon=10.96516#map=19/49.59092/10.96516"
                        className="text-light mt-4"
                        target="_blank"
                      >
                        Auf Karte anzeigen
                      </a>
                    </>
                  )}

                  {variant === "gmaps" && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.6672685240188!2d10.965003642438527!3d49.59089806153942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1f8af807f70ab%3A0xa5a6089267024b38!2sTurnhalle%20Erlangen-B%C3%BCchenbach!5e0!3m2!1sde!2sde!4v1627838611343!5m2!1sde!2sde"
                      height="350"
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Maps Location"
                    />
                  )}

                  {variant === "omaps" && (
                    <>
                      <iframe
                        height="350"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=10.962920486927032%2C49.59013101912043%2C10.967399775981905%2C49.591706296514786&amp;layer=mapnik&amp;marker=49.59091866417675%2C10.965160131454468"
                        style={{ width: "100%" }}
                      ></iframe>
                      <br />
                      <small>
                        <a
                          href="https://www.openstreetmap.org/?mlat=49.59092&amp;mlon=10.96516#map=19/49.59092/10.96516"
                          className="text-light"
                        >
                          Größere Karte anzeigen
                        </a>
                      </small>
                    </>
                  )}
                </Tab.Pane>
              )
            )}
            <Tab.Pane eventKey="kindertanzen">
              {variant === "nomaps" && (
                <>
                  <h4>Kindergarten Arche</h4>
                  <p>
                    Lachnerstraße 43
                    <br />
                    91058 Erlangen
                  </p>

                  <a
                    href="https://www.openstreetmap.org/?mlat=49.55254&amp;mlon=11.02270#map=19/49.55254/11.02270"
                    className="text-light mt-4"
                    target="_blank"
                  >
                    Auf Karte anzeigen
                  </a>
                </>
              )}

              {variant === "gmaps" && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.9215860358739!2d11.02208849163276!3d49.55225418451494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1fe95232de9bf%3A0x519124d61e7f6904!2sKinderland%20%22Die%20Arche%22!5e0!3m2!1sde!2sde!4v1627838826053!5m2!1sde!2sde"
                  height="350"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                />
              )}

              {variant === "omaps" && (
                <>
                  <iframe
                    height="350"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.020928621292116%2C49.551755746023595%2C11.024469137191774%2C49.55333226236272&amp;layer=mapnik&amp;marker=49.552544010553646%2C11.022698879241943"
                    style={{ width: "100%" }}
                  ></iframe>
                  <br />
                  <small>
                    <a
                      href="https://www.openstreetmap.org/?mlat=49.55254&amp;mlon=11.02270#map=19/49.55254/11.02270"
                      className="text-light"
                    >
                      Größere Karte anzeigen
                    </a>
                  </small>
                </>
              )}
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Row>
    </Tab.Container>
  );
}
