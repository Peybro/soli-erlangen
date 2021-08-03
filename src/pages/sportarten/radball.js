import * as React from "react";
import "./../../styles/bootstrap.scss";
import Layout from "../../layouts/layout";
import SportLayout from "../../layouts/sportLayout";

export default function Radball() {
  const title ="Radball"

  return (
    <Layout pageTitle={title}>
      <SportLayout
        name={title}
        times={[
          "Donnerstag: 19:30 - 22:00 Uhr",
          "Freitag: 16:30 - 18:00 Uhr (Kinder)",
          "Freitag: 18:00 - 19:30 Uhr (Jugend)",
        ]}
      >
        <p>
          Radball gehört zur Sparte des Hallenradsports. Zwei Teams versuchen,
          den Ball mit Hilfe eines Radballrandes möglichst oft im Tor des
          Gegeners unterzubringen.
        </p>
        <p>
          Diese Sportart erfordert von den Spielern eine hervorragende
          Bewegungsmotorik und Geschicklichkeit im Umgang mit dem Radballrad,
          das mit einem herkömmlichen Fahrrad nur wenig Ähnlichkeit hat. Es hat
          eine starre Übersetzung und keine Bremse.
        </p>
        <p>
          Beim 2er Radball besteht eine Mannschaft aus zwei Spielern. Torwart
          und Feldspieler, wobei auch der Torhüter im Feld spielen kann und
          umgekehrt. Die Spielzeit beträgt je nach Altersklasse 2 x 5,6 oder 7
          Minuten.
        </p>
        <p>
          Das Spielfeld ist 14 Meter lang und 11 Meter breit. Es ist umgeben von
          einer 30 cm hohen Schrägbande. Die Tore sind zwei Meter breit und
          ebenso hoch.
        </p>
        <p>
          Der Ball hat Kugelform, 17 - 18 cm Durchmesser und hat ein Gewicht
          zwischen 500 und 600 g. Seine Geschwindigkeit erreicht bei
          Freischlägen bis zu 65 km/h.
        </p>
        <p>
          Gespielt wird der Ball durch Schläge mit dem Rad ohne Benutzung von
          Händen und Füßen. Nur der verteidigende Torwart darf in seinem
          Strafraum auch die Hände zur Ballabwehr benutzen. Kopfbälle sind
          gestattet.
        </p>
        <p>
          Im Strafraum, dem mit einer durchzogegen Linie von 2-m-Radius
          gekennzeichneten Halbkreis um das Tor, darf sich jeweils nur ein
          Spieler jeder Mannschaft befinden. Grobe Regelverstöße im eigenen
          Strafraum (z.B. Fussabwehr) werden mit einem Penalty (4 Meter )
          geahndet. Andere Regelübertretungen außerhalb des Strafraumes (z.B.
          Angriff auf den Gegner oder dessen Fahrrad) werden mit Freischlägen
          bestraft. Beim Ausball wird das Spiel nach Unterbrechung einen Meter
          von der Bande entfernt mit einem Abschlag fortgesetzt.
        </p>
        <p>
          Bei einer Ecke, wie Fussball durch die verteidigende Mannschaft
          verursacht, wird der Ball von einem fixierten Punkt aus, zwei Meter
          von der verlängerten Torauslinie, geschlagen.
        </p>
        <p>
          Bei Bodenberührung während des Spiels mit Fuß oder Körper ist der
          betreffende Spieler erst wieder spielberechtigt, wenn er die eigene
          Torauslinie überquert hat.
        </p>
        <p>Besuchen Sie Radball-Events und Sie werden begeistert sein !</p>
        <br />
        <p>
          ©
          <a href="https://www.wm-dornbirn2017.at/de/radball/">
            https://www.wm-dornbirn2017.at/de/radball/
          </a>
        </p>
      </SportLayout>
    </Layout>
  );
}
