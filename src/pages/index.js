import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

import Cookies from "js-cookie";

import Layout from "../layouts/layout";
import "./../styles/bootstrap.scss";

import Trainer from "./../components/trainer";

import {
  gymnastikImages,
  kindertanzenImages,
  kinderturnenImages,
  kunstradImages,
  radballImages,
  reigenImages,
} from "./../services/imageService";

const IndexPage = () => {
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

  /**
   * Shuffles array
   * @param {Array} a items An array containing the items.
   */
  function shuffle(a) {
    const shuffled = a
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    console.log(a);
    console.log(shuffled);

    return shuffled;
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
                  href="https://de-de.facebook.com/RalfHaeusinger/"
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
                title="Soli Kalender"
              />
            )}
          </div>
          <div className="col-md order-first order-md-last">
            <Carousel>
              {shuffle([
                ...gymnastikImages,
                ...kindertanzenImages,
                ...kinderturnenImages,
                ...kunstradImages,
                ...radballImages,
                ...reigenImages,
              ]).map((image, i) => {
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
