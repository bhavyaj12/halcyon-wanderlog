import { logo } from "assets";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationTop = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      bg="light"
      variant="light"
      expand="lg"
      style={{ boxShadow: "0px 10px 43px -11px rgba(0,0,0,0.59)" }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="80"
            className="d-inline-block align-top"
            alt="wanderlog social logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/mockman">
              <Nav.Link>
                Mockman
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/feed">
              <Nav.Link>
                Feed
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Image
            src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
            roundedCircle
            width={30}
            height={30}
            className="mx-3 my-2 img-fluid"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationTop;
