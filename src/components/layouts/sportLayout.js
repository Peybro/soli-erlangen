import * as React from "react";

import Alert from "react-bootstrap/Alert";
import Trainer from "../trainer";

export default function SportLayout({ children, times, name }) {
  return (
    <div className="row">
      <div className="col">
        <h2 className="heading">{name}</h2>
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
        <Trainer open={name.toLowerCase()} />
      </div>
    </div>
  );
}
