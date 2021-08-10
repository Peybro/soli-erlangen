import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

import Cookies from "js-cookie";

import Layout from "../layouts/layout";
import "./../styles/bootstrap.scss";

import Trainer from "./../components/trainer";

const IndexPage = () => {
  let images = [
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_generationen.jpg",
      alt: "Solidarität vereint Generationen",
      title: "Radball von jung bis alt",
      desc: "Bei uns steht neben dem Wettkampf vor allem der Spaß im Vordergrund",
    },
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_bankübung.jpg",
      alt: "Bankübung",
      title: "Übung macht den Meister",
      desc: "Nicht nur Stehen, sondern auch kontrolliertes Hüpfen auf einem Rad ist möglich",
    },
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_moritz-und-tobi-2.jpg",
      alt: "Stehen mit Radballrädern",
      title: "Moritz und Tobi (U19)",
      desc: "Das Stehen ist mit den besonderen Rädern kein Problem",
    },
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_ecke.jpg",
      alt: "Eckentraining",
      title: "Eckentraining",
      desc: "Viele Regeln beim Radball ähneln denen des Fußballs",
    },
    {
      src: "https://soli-erlangen.de/assets/slideshow/radball_bankübung_moritz-und-tobi.jpg",
      alt: "Bankübung",
      title: "Bankübung",
      desc: "Verschiedene Übungen gehören dazu um erfolgreich die Tricks zu beherrschen",
    },
  ];

  const [showCalendar, setShowCalendar] = React.useState(false);

  React.useEffect(() => {
    getCalendarSetting();
  }, []);

  function getCalendarSetting() {
    if (Cookies.get("settings"))
      setShowCalendar(JSON.parse(Cookies.get("settings"))["gcal"]);
  }

  function handleSettingsChange() {
    getCalendarSetting();
  }

  return (
    <Layout pageTitle="index" onSettingsChange={() => handleSettingsChange()}>
      <div style={{ maxWidth: "1500px" }}>
        <div className="row g-0">
          <div className="col-md-4 pt-1 px-2">
            <div className="pb-2">
              <div className="row g-0 pb-1">
                <h3 className="col heading">Kontakt:</h3>
                <a
                  type="button"
                  className="col-2 btn btn-primary"
                  href="https://www.facebook.com/pg/RalfHaeusinger"
                >
                  <i className="bi-facebook" />
                </a>
              </div>
              <Trainer
              // open={"allgemein"}
              />
            </div>
            {showCalendar && (
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBerlin&amp;src=dTFmZzZqdGprczlnNGRxb2VsMHRxc25ya2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZGUuZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23F4511E&amp;title=Soli-Erlangen&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA"
                style={{ borderWidth: 0, width: "100%" }}
                height="400"
                frameBorder="0"
                scrolling="no"
                title="Soli Kalender"
              />
            )}
          </div>
          <div className="col-md order-first order-md-last">
            <Carousel>
              {images.map((image, i) => {
                return (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={image.alt}
                    />
                    <Carousel.Caption>
                      <p className="h3">{image.title}</p>
                      <p>{image.desc}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
