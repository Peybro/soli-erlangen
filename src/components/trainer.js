import * as React from "react";

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
    <div class="accordion" id="accordionExample">
      {window.location.pathname === "/" && (
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingVorstand">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVorstand"
            >
              Allgemeines
            </button>
          </h2>
          <div
            id="collapseVorstand"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
            </div>
          </div>
        </div>
      )}
      {trainer.map((person, i) => {
        return (
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${i}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${i}`}
              >
                {person.sport}
              </button>
            </h2>
            <div
              id={`collapse${i}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
