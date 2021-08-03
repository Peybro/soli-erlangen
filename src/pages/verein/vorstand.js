import * as React from "react";
import Layout from "../../layouts/layout";

import Vorstand from "./../../components/vorstand";
import Trainer from "./../../components/trainer";

export default function VorstandPage() {
    return (
        <Layout pageTitle="Vorstand & Trainer">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <h3 className="heading">Vorstand:</h3>
                    <Vorstand/>
                </div>
                <div className="col mt-1 mt-md-0">
                    <h3 className="heading">Trainer:</h3>
                    <Trainer/>
                </div>
            </div>
        </Layout>
    );
}
