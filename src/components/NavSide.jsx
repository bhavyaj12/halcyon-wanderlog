import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ThumbUpIcon, BookmarkOutlinedIcon, HomeIcon, ExploreIcon } from "assets";

const NavSide = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light" id="nav-side"
    >
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <LinkContainer to="/" className="nav-link link-dark" style={{display: "flex"}}>
            <Nav.Link><HomeIcon style={{marginRight: "1rem"}}/>Home Feed</Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/" className="nav-link link-dark" style={{display: "flex"}}>
            <Nav.Link><ExploreIcon style={{marginRight: "1rem"}}/>Explore</Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/" className="nav-link link-dark" style={{display: "flex"}}>
            <Nav.Link><BookmarkOutlinedIcon style={{marginRight: "1rem"}}/>Bookmarks</Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/" className="nav-link link-dark" style={{display: "flex"}}>
            <Nav.Link><ThumbUpIcon style={{marginRight: "1rem"}}/>Liked Posts</Nav.Link>
          </LinkContainer>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavSide;
