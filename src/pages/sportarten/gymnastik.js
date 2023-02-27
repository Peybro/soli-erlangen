import * as React from "react";
import "./../../styles/bootstrap.scss";
import Layout from "../../layouts/layout";
import SportLayout from "../../layouts/sportLayout";

import { gymnastikImages } from "../../services/imageService";

export default function Gymnastik() {
  const title = "Gymnastik";

  return (
    <Layout pageTitle={title}>
      <SportLayout
        title={title}
        times={["Dienstag: 19:30 - 22:00 Uhr"]}
        slideshow={gymnastikImages}
      >
        <p>
          Freude an sportlicher Betätigung zur Erhaltung der Fitness für den
          eigenen Körper, ohne im Wettkampf mit Maßband und Stoppuhr ermittelte
          Leistungen zu erzwingen, waren Idee und Motivation ein
          Gymnastik-abteilung zu gründen.
        </p>
        <p>
          Schon 1973 verstand es die Gymnastikgruppe der "Soli", die Musik in
          rhythmische Bewegung umzusetzen. Ziel war es, in der Gymnastik als
          Ausgleichssport die motorischen Grundeigenschaften zu verbessern oder
          für den Nichtsportler die Möglichkeit anzubieten, in der Gruppe die
          Muskulatur und den Kreislauf fit zu halten.
        </p>
        <p>
          Parallel zu den spezifischen Sportarten der "Soli", wie Radball und
          Kunstradfahren, soll mit der Gymnastik die breite Basis unserer
          Mitbürger animiert werden, um der Bewegungsarmut unserer technisierten
          Gesellschaft entgegenzuwirken. Wöchentlich 2 Stunden sportliche
          Betätigung als Ausglauch für statische Körperhaltung bei der Arbeit,
          beim Autofahren oder der Entspannung vor dem Fernsehapparat sind nicht
          genug, aber der Grundstein für das persönliche Eintreten der
          Degenerationserscheinungen der Muskulatur entgegenzuwirken.
        </p>
        <p>
          <b>Nutzen Sie die Möglichkeit.</b>
        </p>
      </SportLayout>
    </Layout>
  );
}
