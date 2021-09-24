import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Mininav() {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Link to="/kunstrad">Kunstrad</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/reigen">Reigen</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/radball">Radball</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/gymnastik">Gymnastik</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/kinderturnen">Kinderturnen</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/kindertanzen">Kindertanzen</Link>
      </Nav.Item>
    </Nav>
  );
}
