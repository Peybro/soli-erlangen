import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Trainer() {
  const trainer = [
    {
      sport: "Kunstrad",
      name: "Anne",
      email: "",
      telefone: "",
      mobile: "",
    },
    {
      sport: "Reigen",
      name: "Renate",
      email: "renate.transchel@gmx.de",
      telefone: "09131 49454 ",
      mobile: "",
    },
    {
      sport: "Radball",
      name: "Thomas",
      email: "t.kretschmann@t-online.de",
      telefone: "09131 482248",
      mobile: "49017643839664",
    },
    {
      sport: "Kindertanzen",
      name: "Janice",
      email: "janice.haeusinger93@t-online.de",
      telefone: "",
      mobile: "49017632843418",
    },
  ];

  return (
    <Accordion>
      {window.location.pathname === "/" && (
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
          <Accordion.Item eventKey={i + 1}>
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
              {person.telefone.length > 0 && (
                <button className="btn btn-outline-primary me-1">
                  <i className="bi bi-telephone" /> {person.telefone}
                </button>
              )}
              {person.mobile.length > 0 && (
                <a
                  type="button"
                  className="btn btn-outline-primary"
                  href={`https://wa.me/${person.mobile}`}
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
