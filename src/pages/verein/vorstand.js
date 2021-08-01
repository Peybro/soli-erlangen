import * as React from "react";
import Layout from "../../components/layout";

import Vorstand from "./../../components/vorstand";
import Trainer from "./../../components/trainer";

export default function VorstandPage() {
  return (
    <Layout pageTitle="Vorstand & Trainer">
      <Vorstand />
      <h3 class="sub-h">Trainer:</h3>
      <Trainer />
    </Layout>
  );
}
