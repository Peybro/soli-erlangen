import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Trainer({ open }) {
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined";

  const trainer = [
    {
      sport: "Kunstrad",
      name: "Anne",
      email: "",
      telefon: "",
      mobil: "",
    },
    {
      sport: "Reigen",
      name: "Renate",
      email: "renate.transchel@gmx.de",
      telefon: "09131 49454 ",
      mobil: "",
    },
    {
      sport: "Radball",
      name: "Thomas",
      email: "t.kretschmann@t-online.de",
      telefon: "09131 482248",
      mobil: "49017643839664",
    },
    {
      sport: "Kindertanzen",
      name: "Janice",
      email: "janice.haeusinger93@t-online.de",
      telefon: "",
      mobil: "49017632843418",
    },
  ];

  return (
    <Accordion defaultActiveKey={open}>
      {isBrowser && window.location.pathname === "/" && (
        <Accordion.Item eventKey="0">
          <Accordion.Header>Allgemeines</Accordion.Header>
          <Accordion.Body>
            <h4>Ralf Häusinger</h4>
            <a
              type="button"
              className="btn btn-outline-primary me-1"
              href="mailto:ralf.haeusinger@t-online.de"
            >
              <i className="bi bi-envelope" />
            </a>
            <button className="btn btn-outline-primary me-1">
              <i className="bi bi-telephone" /> 09132 796970
            </button>
            <a
              type="button"
              className="btn btn-outline-primary"
              href="https://wa.me/49017645145696"
            >
              <i className="bi bi-whatsapp" />
            </a>
          </Accordion.Body>
        </Accordion.Item>
      )}

      {trainer.map((person, i) => {
        return (
          <Accordion.Item eventKey={person.sport.toLowerCase()} key={i}>
            <Accordion.Header>{person.sport}</Accordion.Header>
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
        );
      })}
    </Accordion>
  );
}
