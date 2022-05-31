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
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, logoutFunc } from "redux-reducers";
import { useToast } from "custom-hooks";
import { logo, dummyProfile } from "assets";

const NavigationTop = () => {
  const { isAuth } = useSelector(getAuth);
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      const response = dispatch(logoutFunc());
      if (response) {
        showToast("success", "Logged out successfully.");
        navigate("/");
      }
    } catch (error) {
      showToast("error", "Logout failed.");
    }
  };

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      bg="light"
      variant="light"
      expand="lg"
      className="social-header"
    >
      <Container fluid>
        <Navbar.Brand href="/">
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
              <Nav.Link>Mockman</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {isAuth && (
              <LinkContainer to="/feed">
                <Nav.Link>My Feed</Nav.Link>
              </LinkContainer>
            )}
            {isAuth ? (
              <Button variant="danger" onClick={logoutHandler}>
                Logout
              </Button>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
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
          {isAuth && (
            <Image
              alt="user profile image"
              src={dummyProfile}
              roundedCircle
              width={30}
              height={30}
              className="mx-3 my-2 img-fluid"
            />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationTop;
