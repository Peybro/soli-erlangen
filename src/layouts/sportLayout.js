import * as React from "react";

import Alert from "react-bootstrap/Alert";
import Trainer from "../components/trainer";

export default function SportLayout({ children, times, title }) {
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
        {children}
      </div>
      <div className="col-md-4">
        <h2 className="heading">Trainer:</h2>
        <Trainer open={title.toLowerCase()} />
      </div>
    </div>
  );
}
