import * as React from "react";
import Layout from "../../layouts/layout";
import Accordion from "react-bootstrap/Accordion";

export default function Zeitung() {
  const title = "Vereinsblatt";
  const setting = {
    start: 2005,
    last: {
      year: 2022,
      version: 2,
    },
    link: "https://www.soli-erlangen.de/vereinsblatt/soli_info_",
  };

  function getYearArray() {
    const array = [];
    for (let i = setting.start; i <= setting.last.year; i++) {
      array.push(i);
    }
    return array.reverse();
  }

  return (
    <Layout pageTitle={title}>
      <h2 className="heading">{title}</h2>
      <Accordion defaultActiveKey={setting.last.year}>
        {getYearArray().map((year, i) => (
          <Accordion.Item eventKey={year} key={i}>
            <Accordion.Header>{year}</Accordion.Header>
            <Accordion.Body>
              <div className="row justify-content-around">
                <div className="col">
                  <h2>
                    April {year} - September {year}
                  </h2>
                  {year !== 2021 && (
                    <>
                      <iframe
                        src={`${setting.link}${year}_1.pdf`}
                        className="d-none d-md-block mb-1"
                        loading="lazy"
                        width="100%"
                        height="300px"
                        title={`${setting.link}${year}_1`}
                      />
                      <a
                        type="button"
                        className="btn btn-primary"
                        href={`${setting.link}${year}_1.pdf`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Größer anzeigen
                      </a>
                    </>
                  )}
                  {year === 2021 && (
                    <p>
                      Pandemiebedingt gab es in diesem Zeitraum keine
                      Neuigkeiten im Vereinsgeschehen.
                    </p>
                  )}
                </div>
                  <div className="col">
                    <h2>
                      Oktober {year} - März {year + 1}
                    </h2>
                    <iframe
                      src={`${setting.link}${year}_2.pdf`}
                      className="d-none d-md-block mb-1"
                      loading="lazy"
                      width="100%"
                      height="300px"
                      title={`${setting.link}${year}_2`}
                    />
                    <a
                      type="button"
                      className="btn btn-primary"
                      href={`${setting.link}${year}_2.pdf`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Größer anzeigen
                    </a>
                  </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Layout>
  );
}
