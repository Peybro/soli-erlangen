import * as React from "react";
import Layout from "../../layouts/layout";
import Accordion from "react-bootstrap/Accordion";

export default function Zeitung() {
    const title = "Vereinsblatt"
    const setting = {
        start: 2005,
        last: {
            year: 2020,
            version: 2
        },
        link: "https://www.soli-erlangen.de/assets/vereinsblatt/soli_info_"
    }

    function getYearArray() {
        const array = []
        for (let i = setting.start; i <= setting.last.year; i++) {
            array.push(i)
        }
        return array.reverse()
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
                                <a type="button" className="col-4 btn btn-primary" href={`${setting.link}${year}_1.pdf`}
                                   target="_blank" rel="noreferrer">April {year} - September {year}</a>
                                {setting.last.version === 2 && <a type="button" className="col-4 btn btn-primary"
                                                                  href={`${setting.link}${year}_2.pdf`}
                                                                  target="_blank" rel="noreferrer">Oktober {year} -
                                    März {year + 1}</a>}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>))}
            </Accordion>
        </Layout>
    );
}
