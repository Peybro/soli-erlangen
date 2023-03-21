import * as React from "react";
import Layout from "../layouts/layout";

export default function Impressum() {
  return (
    <Layout pageTitle="Impressum">
      <h3 className="sub-h">Impressum:</h3>

      <h3>Angaben gemäß § 5 TMG:</h3>

      <div className="verein mt-4">
        <p className="fw-bold">
          Rad- und Kraftfahrerverein Solidarität Erlangen 1903 e.V.
        </p>
        Fuchsweg 2<br />
        91074 Herzogenaurach
        <br />
        Deutschland
        <br />
        Telefonnummer: 09132 796970
        <br />
        E-Mail: vorstand@soli-erlangen.de
        <br />
        Website: https://www.soli-erlangen.de/
      </div>

      <div className="vertretung mt-4">
        <h5>Vertreten durch:</h5>
        Ralf Häusinger
        <br />
        Fuchsweg 2 <br />
        91074 Herzogenaurach
        <br />
        Deutschland
      </div>

      <div className="verantwortlich mt-4">
        <h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h5>
        Ralf Häusinger
        <br />
        Fuchsweg 2 <br />
        91074 Herzogenaurach
        <br />
        Deutschland
      </div>

      <div className="webmaster mt-4">
        <h5>Webmaster:</h5>
        Thomas Kretschmann
        <br />
        t.kretschmann@t-online.de
      </div>

      <div className="haftung mt-4">
        <h5>Haftungsausschluss (Disclaimer)</h5>
        <ol>
          <li>Haftung für Inhalte</li>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
          <li>Haftung für Links</li>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen.
          </p>
          <li>Urheberrecht</li>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <li>Datenschutz</li>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis.
          </p>
          <li>Widerspruch Werbe-Mails</li>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-E-Mails, vor.
          </p>
        </ol>
      </div>
    </Layout>
  );
}
