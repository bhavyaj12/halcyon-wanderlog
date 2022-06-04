import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, logoutFunc } from "redux-reducers";
import { useToast } from "custom-hooks";
import { useTheme } from "theme-context";
import { DarkMode, LightMode } from "@mui/icons-material";
import { logo, dummyProfile } from "assets";

const NavigationTop = () => {
  const { theme, setTheme } = useTheme();
  const { isAuth, user } = useSelector(getAuth);
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    localStorage.setItem("wanderlog-theme", theme);
  }, [theme]);

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
      bg={theme === "light" ? "light" : "dark"}
      variant={theme === "light" ? "light" : "dark"}
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
              <Button variant="danger" onClick={logoutHandler} className="logout-btn">
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
          <Button className="change-theme-btn" variant="outline-secondary mx-2" onClick={changeTheme}>
            {theme === "dark" ? <DarkMode /> : <LightMode />}
          </Button>
          {isAuth && (
            <LinkContainer to={`/profile/${user.username}`}>
              <Nav.Link>
                <Image
                  alt="user profile image"
                  src={dummyProfile}
                  roundedCircle
                  width={30}
                  height={30}
                  className="mx-3 my-2 img-fluid"
                />
              </Nav.Link>
            </LinkContainer>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationTop;
