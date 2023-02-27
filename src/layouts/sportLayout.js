import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

import Alert from "react-bootstrap/Alert";
import Trainer from "../components/trainer";

export default function SportLayout({ children, times, title, slideshow }) {
  return (
    <div className="row g-0">
      <div className="col me-2">
        <h2 className="heading">{title}</h2>
        <Alert variant="primary">
          <i className="bi bi-alarm float-end" />
          {times.map((time, i) => {
            return <p key={i}>{time}</p>;
          })}
        </Alert>
        <Carousel>
          {[...slideshow].map((image, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
                <Carousel.Caption>
                  <p className="h3">{image.title}</p>
                  <p>{image.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        {children}
      </div>
      <div className="col-md-4">
        <h2 className="heading">Trainer:</h2>
        <Trainer open={title.toLowerCase()} />
      </div>
    </div>
  );
}
