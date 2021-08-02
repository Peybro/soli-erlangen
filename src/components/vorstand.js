import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Vorstand() {
  const vostand = [
    {
      titel: "1. Vorstand",
      name: "Ralf Häusinger",
      email: "ralf.haeusinger@t-online.de",
      telefon: "09132 796970",
      mobil: "49017645145696",
    },
    {
      titel: "2. Vorstand",
      name: "René",
      email: "",
      telefon: "",
      mobil: "",
    },
    {
      titel: "Sportleiter",
      name: "Thomas",
      email: "t.kretschmann@t-online.de",
      telefon: "",
      mobil: "49017643839664",
    },
    {
      titel: "Fachwart Kunstrad",
      name: "Anne",
      email: "",
      telefon: "",
      mobil: "",
    },
    {
      titel: "Fachwart Reigen",
      name: "Renate",
      email: "renate.transchel@gmx.de",
      telefon: "09131 49454 ",
      mobil: "",
    },
    {
      titel: "Frauenbeauftragte",
      name: "Sabine",
      email: "",
      telefon: "09132 796970",
      mobil: "",
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      {vostand.map((person, i) => (
        <Accordion.Item eventKey={i}>
          <Accordion.Header>{person.titel}</Accordion.Header>
          <Accordion.Body>
            <h4>{person.name}</h4>
            {person.email.length > 0 && (
              <a
                type="button"
                className="btn btn-outline-primary me-1"
                href={`mailto:${person.email}`}
              >
                <i className="bi bi-envelope" />
              </a>
            )}
            {person.telefon.length > 0 && (
              <button className="btn btn-outline-primary me-1">
                <i className="bi bi-telephone" /> {person.telefon}
              </button>
            )}
            {person.mobil.length > 0 && (
              <a
                type="button"
                className="btn btn-outline-primary"
                href={`https://wa.me/${person.mobil}`}
              >
                <i className="bi bi-whatsapp" />
              </a>
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
