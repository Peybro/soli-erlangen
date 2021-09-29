import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Trainer({ open }) {
  const trainer = [
    {
      sport: "Allgemein",
      name: "Ralf Häusinger",
      email: "vorstand@soli-erlangen.de",
      telefon: "09132 796970",
      mobil: "49017645145696",
      icon: "",
    },
    {
      sport: "Kunstrad",
      name: "Anne",
      email: "kunstrad@soli-erlangen.de",
      telefon: "",
      mobil: "",
      icon: "https://www.soli-erlangen.de/assets/stickmen/logo_kunstrad_q.png",
    },
    {
      sport: "Reigen",
      name: "Renate",
      email: "reigen@soli-erlangen.de",
      telefon: "09131 49454",
      mobil: "",
      icon: "https://www.soli-erlangen.de/assets/stickmen/logo_reigen_q.png",
    },
    {
      sport: "Radball",
      name: "Thomas",
      email: "radball@soli-erlangen.de",
      telefon: "",
      mobil: "49017643839664",
      icon: "https://www.soli-erlangen.de/assets/stickmen/logo_radball_q.png",
    },
    {
      sport: "Gymnastik",
      name: "Heiner",
      email: "gymnastik@soli-erlangen.de",
      telefon: "09131 990149",
      mobil: "",
      icon: "https://www.soli-erlangen.de/assets/stickmen/logo_gymnastik_q.png",
    },
    {
      sport: "Kinderturnen",
      name: "Ralf",
      email: "kinderturnen@soli-erlagen.de",
      telefon: "09132 796970",
      mobil: "49017645145696",
      icon: "https://www.soli-erlangen.de/assets/stickmen/logo_kinderturnen_q.png",
    },
    {
      sport: "Kindertanzen",
      name: "Janice",
      email: "kindertanzen@soli-erlangen.de",
      telefon: "",
      mobil: "49017632843418",
      icon: "https://www.soli-erlangen.de/assets/stickmen/logo_kindertanzen_q.png",
    },
  ];

  return (
    <Accordion defaultActiveKey={open}>
      {trainer.map((person, i) => {
        return (
          <Accordion.Item eventKey={person.sport.toLowerCase()} key={i}>
            <Accordion.Header>
              {person.icon && (
                <img src={person.icon} width="30" alt="Sports Icon" />
              )}
              {person.sport}
            </Accordion.Header>
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
                <a
                  type="button"
                  className="btn btn-outline-primary me-1"
                  href={`tel:+49${person.telefon
                    .substr(1, person.telefon.length)
                    .replace(" ", "")}`}
                >
                  <i className="bi bi-telephone" /> {person.telefon}
                </a>
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
