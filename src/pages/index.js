import * as React from "react";

import Layout from "../components/layout";
import "./../styles/bootstrap.scss";

import Carousel from "./../components/carousel";
import Trainer from "./../components/trainer";

const IndexPage = () => {
  return (
    <Layout>
      <div className="row g-0">
        <div className="col-4 pe-2">
          <div className="row me-1 mt-1">
            <h3 className="col sub-h">Kontakt:</h3>
            <a
              type="button"
              className="col-2 btn btn-primary"
              href="https://www.facebook.com/pg/RalfHaeusinger"
            >
              <i className="bi-facebook" />
            </a>
          </div>
          <Trainer />
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBerlin&amp;src=dTFmZzZqdGprczlnNGRxb2VsMHRxc25ya2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZGUuZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23F4511E&amp;title=Soli-Erlangen&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA"
            style={{ borderWidth: 0, width: "100%" }}
            height="400"
            frameborder="0"
            scrolling="no"
            title="Soli Kalender"
          />
        </div>
        <div className="col">
          <Carousel />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
