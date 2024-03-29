import * as React from "react";
import "./../../styles/bootstrap.scss";
import Layout from "../../layouts/layout";
import SportLayout from "../../layouts/sportLayout";

import { kinderturnenImages } from "../../services/imageService";

export default function Kinderturnen() {
  const title = "Kinderturnen";

  return (
    <Layout pageTitle={title}>
      <SportLayout
        title={title}
        times={["Dienstag: 17:00 - 18:00 Uhr"]}
        slideshow={kinderturnenImages}
      >
        <p>
          Durch Umsetzung bestimmter Handlungsprinzipien soll ein langfristiger
          Wechsel vom Mitmachen und Mitspielen zum selbstbestimmten Handeln
          erreicht werden: Offenheit, Aufforderungscharakter, Freiwilligkeit,
          Zwanglosigkeit, Wahlmöglichkeit/Entscheidungsmöglichkeit,
          Initiativmöglichkeit. Die sozialen Ziele sind unter anderem
          Wahrnehmung der Gefühle und Bedürfnisse anderer, Erkennung und
          Beachtung von Regeln, Fähigkeit zur Gruppenintegration, Umgang mit
          Misserfolg, Aufbau von Rücksichtnahme und Toleranz.
          <a href="https://de.wikipedia.org/wiki/Kinderturnen">©</a>
        </p>
      </SportLayout>
    </Layout>
  );
}
