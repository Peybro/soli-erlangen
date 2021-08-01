import * as React from "react";
import Layout from "../components/layout";

import Calendar from "./../components/calendar";

export default function Kalender() {
  return (
    <Layout>
      <div className="d-flex justify-content-center p-2">
        <Calendar />
      </div>
    </Layout>
  );
}
