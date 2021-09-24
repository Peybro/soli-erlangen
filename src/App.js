import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Gymnastik from "./pages/Gymnastik";
import Kindertanzen from "./pages/Kindertanzen";
import Kinderturnen from "./pages/Kinderturnen";
import Kunstrad from "./pages/Kunstrad";
import Radball from "./pages/Radball";
import Reigen from "./pages/Reigen";

import Mininav from "./components/Mininav";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Mininav />
        </header>

        <Switch>
          <Route path="/kunstrad">
            <Kunstrad />
          </Route>
          <Route path="/reigen">
            <Reigen />
          </Route>
          <Route path="/radball">
            <Radball />
          </Route>
          <Route path="/gymnastik">
            <Gymnastik />
          </Route>
          <Route path="/kinderturnen">
            <Kinderturnen />
          </Route>
          <Route path="/kindertanzen">
            <Kindertanzen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
