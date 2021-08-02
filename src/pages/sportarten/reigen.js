import * as React from "react";
import "./../../styles/bootstrap.scss";
import Layout from "../../components/layouts/layout";
import SportLayout from "../../components/layouts/sportLayout";

export default function Reigen() {
  const title="Reigen"

  return (
    <Layout pageTitle={title}>
      <SportLayout
        name={title}
        times={[
          "Donnerstag: 16:00 - 17:00 Uhr (Schüler / Jugend)",
          "Donnerstag: 17:00 - 18:00 Uhr (Jugend)",
        ]}
      >
        <p>
          Früher war ein Einradfahrer eine Zirkussensation; heute ist es jedoch
          eine beliebte Beschäftigung für Kinder und Jugendliche - einfach weil
          es Spaß macht.
        </p>
        <p>
          Zugegeben man braucht ein bisschen Übung um auf dem Einrad fahren zu
          können, aber wenn man erst einmal gelernt hat, das Gleichgewicht, auf
          dem Rad zu halten, gehorcht es auch seinem Fahrer.
        </p>
        <p>
          Bei uns im Verein wird das Einradfahren als 4er oder 6er
          Mannschaftsportart mit minderstens drei Wettbewerben im Jahr
          betrieben, wo es besonders auf das sichere und ruhige Fahren auf dem
          Einrad im Team ankommt. Mit dem ensprechenden Ergeiz und Kameradschaft
          sind auch schnell erste Erfolge zu erreichen.
        </p>
        <h4>Voraussetzungen:</h4>
        <p>
          Um Einradfahren zu erlernen muss man nicht viele Voraussetzungen
          mitbringen. Es gibt keine Altereinschränkung, man sollte Fahradfahren
          können, Spaß am Sport und Bewegung haben, etwas Durchhaltevermögen und
          den Ergeiz gemeinsam im Team (Mannschaft) etwas zu erreichen.
        </p>
      </SportLayout>
    </Layout>
  );
}
