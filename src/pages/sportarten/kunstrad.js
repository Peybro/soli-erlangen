import * as React from "react";
import "./../../styles/bootstrap.scss";
import Layout from "../../layouts/layout";
import SportLayout from "../../layouts/sportLayout";

import { kunstradImages } from "../../services/imageService";

export default function Kunstrad() {
  const title = "Kunstrad";

  return (
    <Layout pageTitle={title}>
      <SportLayout
        title={title}
        times={["Dienstag: 18:00 - 19:30 Uhr"]}
        slideshow={kunstradImages}
      >
        <p>
          Kunstradfahren ist ein Hallenradsport, der sehr viel mit Ästhetik zu
          tun hat.
        </p>
        <p>
          Er ist mit Kunstturnen oder Eiskunstlauf vergleichbar, erfordert viel
          Gefühl, eine perfekte Koordination des ganzen Körpers und einen sehr
          guten Gleichgewichtssinn.
        </p>
        <p>
          Beim Kunstradfahren werden verschiedene Halteübungen,
          Gleichgewichtsübungen, sowie Übungen für Kraft und Sprünge ausgeführt.
        </p>
        <p>
          Kunstradfahren ist ein nicht sehr bekannter Hallenradsport und wird
          meistens in Sporthallen auf einem speziellen Kunstrad, auch
          "Saalmaschine" genannt, ausgeübt.
        </p>
        <p>Es gibt beim Kunstradfahren verschiedene Disziplinen:</p>
        <ul>
          <li>Einer Kunstrad</li>
          <li>Zweier Kunstrad</li>
          <li>Vierer Kunstrad</li>
          <li>Sechser Kunstrad</li>
          <li>Vierer Einradfahren</li>
          <li>Sechser Einradfahren</li>
        </ul>
        <p>
          Einer- und Zweier-Kunstradfahren ist eine Leistungssportart. Das
          Kunstradfahren stellt hier vor allem hohe Anforderungen an die
          technische und koordinative Fähigkeiten und Fertigkeiten des
          Sportlers.
        </p>
        <p>
          Im Vierer- und Sechser-Kunstradfahren sind hingegen (ähnlich wie beim
          Synchronschwimmen) weniger die
        </p>
        <p>
          körperlichen Voraussetzungen bedingt, vielmehr jedoch präzise
          Perfektion, Synchronität und Teamgeist und ebenfalls schnellreaktives
          Handeln.
        </p>
        <p>
          Das günstigste Einstiegsalter für das Kunstradfahren liegt etwa bei
          fünf bis sieben Jahren, also sobald das Radfahren beherrscht wird.
          Zwischen sechs und zwölf Jahren steht das Grundlagentraining im
          Mittelpunkt der Ausbildung.
        </p>
        <p>
          Zwischen 13 und 16 Jahren erfolgt das Aufbautraining mit den
          Schwerpunkten, Verbesserung der speziellen Koordination, der
          speziellen Beweglichkeit, Intensivierung des Techniktrainings,
          allgemeines und spezielles Kraftraining.
        </p>
        <p>
          Zwischen dem 15. und 16. Lebensjahr beginnt das Leistungstraining,
          Schwerpunkte sind hierbei komplexes Techniktraining, gezieltes Kraft-
          und Ausdauertraining sowie mentales Training, Intensivierung des
          Trainings und Erhöhung der Wettkampfhäufigkeit.
        </p>
        <br />
        <p>
          ©
          <a href="https://www.wm-dornbirn2017.at/de/kunstradfahren/">
            https://www.wm-dornbirn2017.at/de/kunstradfahren/
          </a>
        </p>
      </SportLayout>
    </Layout>
  );
}
