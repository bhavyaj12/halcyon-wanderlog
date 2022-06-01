import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  AccountCircleIcon,
  BookmarkOutlinedIcon,
  HomeIcon,
  ExploreIcon,
} from "assets";
import { useTheme } from "theme-context";

const NavSide = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "d-flex flex-column flex-shrink-0 p-3 bg-light"
          : "d-flex flex-column flex-shrink-0 p-3 bg-dark"
      }
      id="nav-side"
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <LinkContainer to="/feed" className="nav-link link-dark d-flex">
            <Nav.Link>
              <HomeIcon className="mui-icon" />
              Home Feed
            </Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer
            to="/"
            className={
              theme === "light"
                ? "nav-link link-dark d-flex"
                : "nav-link link-light d-flex"
            }
          >
            <Nav.Link>
              <ExploreIcon className="mui-icon" />
              Explore
            </Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer
            to="/bookmarks"
            className={
              theme === "light"
                ? "nav-link link-dark d-flex"
                : "nav-link link-light d-flex"
            }
          >
            <Nav.Link>
              <BookmarkOutlinedIcon className="mui-icon" />
              Bookmarks
            </Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer
            to="/"
            className={
              theme === "light"
                ? "nav-link link-dark d-flex"
                : "nav-link link-light d-flex"
            }
          >
            <Nav.Link>
              <AccountCircleIcon className="mui-icon" />
              Profile
            </Nav.Link>
          </LinkContainer>
        </li>
      </ul>
    </div>
  );
};

export default NavSide;
