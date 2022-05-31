import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ThumbUpIcon, BookmarkOutlinedIcon, HomeIcon, ExploreIcon } from "assets";

const NavSide = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light" id="nav-side"
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <LinkContainer to="/feed" className="nav-link link-dark d-flex">
            <Nav.Link><HomeIcon className="mui-icon"/>Home Feed</Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer to="/" className="nav-link link-dark d-flex">
            <Nav.Link><ExploreIcon className="mui-icon"/>Explore</Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer to="/" className="nav-link link-dark d-flex">
            <Nav.Link><BookmarkOutlinedIcon className="mui-icon"/>Bookmarks</Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer to="/" className="nav-link link-dark d-flex">
            <Nav.Link><ThumbUpIcon className="mui-icon"/>Liked Posts</Nav.Link>
          </LinkContainer>
        </li>
      </ul>
    </div>
  );
};

export default NavSide;
