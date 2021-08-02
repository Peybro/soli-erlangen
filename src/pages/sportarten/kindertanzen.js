import * as React from "react";
import "./../../styles/bootstrap.scss";
import Layout from "../../components/layouts/layout";
import SportLayout from "../../components/layouts/sportLayout";

export default function Kindertanzen() {
  const title = "Kindertanzen"

  return (
    <Layout pageTitle={title}>
      <SportLayout name={title} times={["Montag: 16:30 - 17:30 Uhr"]}>
        <p>
          Bewegung ist unverzichtbar für die Entwicklung von Kindern und sie ist
          Ausdruck von Vitalität, von kindlicher Neugier und Lebensfreude.
        </p>

        <p>
          Unter der Leitung von Janice findet das Tanzen im Kindergarten "Die
          Arche" in Tennenlohe statt (
          <a href="https://wp.tennenlohe-evangelisch.de/">
            wp.tennenlohe-evangelisch.de
          </a>
          ).
        </p>
      </SportLayout>
    </Layout>
  );
}
