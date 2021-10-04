import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function Mininav() {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Nav className="justify-content-center">
        <LinkContainer to="/kunstrad">
          <Nav.Link>Kunstrad</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/reigen">
          <Nav.Link>Reigen</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/radball">
          <Nav.Link>Radball</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/gymnastik">
          <Nav.Link>Gymnastik</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/kinderturnen">
          <Nav.Link>Kinderturnen</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/kindertanzen">
          <Nav.Link>Kindertanzen</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
