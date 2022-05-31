import { Image } from "react-bootstrap";
import {
  ThumbUpOutlinedIcon,
  ThumbUpIcon,
  BookmarkBorderOutlinedIcon,
  BookmarkOutlinedIcon,
  ForumOutlinedIcon,
  ShareOutlinedIcon,
  DeleteOutlineIcon,
  EditIcon,
} from "assets";

const PostCard = () => {
  return (
    <div className="card bg-light m-4">
      <div className="card-body">
        <div className="post-user my-2">
          <Image
            src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
            roundedCircle
            width={50}
            height={50}
            className="mx-3 my-2 img-fluid"
          />
          <div className="flex-col">
            <span className="mx-3 name-bold">
              Bhavya Joshi <span className="post-date mx-3">May 26, 2022</span>
            </span>
            <span className="mx-3 user-name">@bhavyajoshi</span>
          </div>
          <div className="post-user-actions flex-row-centre">
            <button type="button" className="icon-btn flex-row-centre">
              <EditIcon />
            </button>
            <button type="button" className="icon-btn flex-row-centre">
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="post-footer-icons">
          <div className="flex-row-centre">
            <button type="button" className="icon-btn">
              <ThumbUpOutlinedIcon />
            </button>
            <span className="mx-1">1</span>
          </div>
          <div className="flex-row-centre">
            <button type="button" className="icon-btn">
              <ForumOutlinedIcon />
            </button>
            <span className="mx-1">1</span>
          </div>
          <div className="flex-row-centre">
            <button type="button" className="icon-btn">
              <BookmarkBorderOutlinedIcon />
            </button>
            <span className="mx-1">1</span>
          </div>
          <div className="flex-row-centre">
            <button type="button" className="icon-btn">
              <ShareOutlinedIcon />
            </button>
            <span className="mx-1">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;