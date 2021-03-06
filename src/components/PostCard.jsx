import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import {
  getAuth,
  getPost,
  deletePost,
  likePost,
  dislikePost,
  SET_POST_TO_EDIT,
  SHOW_MODAL,
  addBookmark,
  deleteBookmark,
} from "redux-reducers";
import { useToast } from "custom-hooks";
import { Image } from "react-bootstrap";
import { useTheme } from "theme-context";
import { Link, useNavigate } from "react-router-dom";
import {
  ThumbUpOutlinedIcon,
  ThumbUpIcon,
  BookmarkBorderOutlinedIcon,
  BookmarkOutlinedIcon,
  ForumOutlinedIcon,
  DeleteOutlineIcon,
  EditIcon,
} from "assets";

const PostCard = ({ post }) => {
  const { user, token } = useSelector(getAuth);
  const { bookmarks } = useSelector(getPost);
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const {
    _id,
    content,
    likes: { likeCount, likedBy },
    username,
    createdAt,
    postImage,
    comments,
    profileImg,
  } = post;

  const checkUserLikes = () => {
    return likedBy.find((userInList) => userInList.username === user.username)
      ? true
      : false;
  };

  const checkUserBookmarks = () => {
    return bookmarks.find((postId) => postId === _id) ? true : false;
  };

  const deletePostHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(deletePost({ token, postId: _id }));
      if (response.error) {
        throw new Error(response.payload);
      }
    } catch (error) {
      if (error.message.includes("404"))
        showToast(
          "error",
          "This username is not registered. Please login again."
        );
      else if (error.message.includes("500"))
        showToast("error", "Can't delete post. Try again later.");
    }
  };

  const editPostHandler = (e) => {
    e.preventDefault();
    dispatch(SHOW_MODAL(true));
    dispatch(SET_POST_TO_EDIT(post));
  };

  const likeHandler = async (e) => {
    e.preventDefault();
    try {
    if(checkUserLikes()) {
      const response = await dispatch(dislikePost({ token, postId: _id }));
    } else {
      const response = await dispatch(likePost({ token, postId: _id }));
    }
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      if (error.message.includes("404"))
        showToast(
          "error",
          "This username is not registered. Please refresh and login again."
        );
      else if (error.message.includes("500"))
        showToast("error", "Can't edit post likes. Try again later.");
    }
  };

  const bookmarkHandler = async (e) => {
    e.preventDefault();
    try {
      const response = checkUserBookmarks()
        ? await dispatch(deleteBookmark({ token, postId: _id }))
        : await dispatch(addBookmark({ token, postId: _id }));
      if (response.error) {
        throw new Error(response.payload);
      }
      showToast("success", "Bookmarks modified.");
    } catch (error) {
      if (error.message.includes("404"))
        showToast(
          "error",
          "This username is not registered. Please refresh and login again."
        );
      else if (error.message.includes("500"))
        showToast("error", "Can't edit bookmarks. Try again later.");
    }
  };

  const goToUserProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  return (
    <Link
      to={`/post/${_id}`}
      className={
        theme === "light"
          ? "card post-card bg-light m-4"
          : "card post-card bg-dark m-4"
      }
    >
      <div className="card-body">
        <div className="post-user my-2">
          <Image
            src={username === user.username ? user.profileImg : profileImg}
            roundedCircle
            width={50}
            height={50}
            className="my-2 object-fit-cover flex-shrink-0"
          />
          <div
            className="d-flex flex-column justify-content-center align-items-start gap-1 link-no-decor"
            onClick={(e) => {
              e.preventDefault();
              goToUserProfile(username);
            }}
          >
            <span className="mx-3 name-bold">@{username}</span>
            <span className="post-date mx-3">
              {dayjs(new Date(createdAt)).format("HH:mm:ss, ddd, DD/MM/YYYY")}
            </span>
          </div>
          {user.username === username && (
            <div className="post-user-actions flex-row-centre">
              <button
                type="button"
                className={
                  theme === "light"
                    ? "icon-btn flex-row-centre"
                    : "icon-btn dark-icon-btn flex-row-centre"
                }
                onClick={editPostHandler}
              >
                <EditIcon />
              </button>
              <button
                type="button"
                className={
                  theme === "light"
                    ? "icon-btn flex-row-centre"
                    : "icon-btn dark-icon-btn flex-row-centre"
                }
                onClick={deletePostHandler}
              >
                <DeleteOutlineIcon />
              </button>
            </div>
          )}
        </div>
        <p className="my-4">{content}</p>
        {postImage !== "" && (
          <div className="d-flex align-items-center justify-content-center">
            <Image
              alt="post image"
              src={postImage}
              fluid
              className="mx-3 my-2 object-fit-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="post-footer-icons">
          <div className="flex-row-centre">
            {checkUserLikes() ? (
              <button
                type="button"
                className={
                  theme === "light" ? "icon-btn" : "icon-btn dark-icon-btn"
                }
                onClick={likeHandler}
              >
                <ThumbUpIcon />
              </button>
            ) : (
              <button
                type="button"
                className={
                  theme === "light" ? "icon-btn" : "icon-btn dark-icon-btn"
                }
                onClick={likeHandler}
              >
                <ThumbUpOutlinedIcon />
              </button>
            )}
            <span className="mx-1">{likeCount > 0 ? likeCount : 0}</span>
          </div>
          <div className="flex-row-centre">
            <button
              type="button"
              className={
                theme === "light" ? "icon-btn" : "icon-btn dark-icon-btn"
              }
            >
              <ForumOutlinedIcon />
            </button>
            <span className="mx-1">
              {comments.length > 0 ? comments.length : 0}
            </span>
          </div>
          <div className="flex-row-centre">
            {checkUserBookmarks() ? (
              <button
                type="button"
                className={
                  theme === "light" ? "icon-btn" : "icon-btn dark-icon-btn"
                }
                onClick={bookmarkHandler}
              >
                <BookmarkOutlinedIcon />
              </button>
            ) : (
              <button
                type="button"
                className={
                  theme === "light" ? "icon-btn" : "icon-btn dark-icon-btn"
                }
                onClick={bookmarkHandler}
              >
                <BookmarkBorderOutlinedIcon />
              </button>
            )}
            <span className="mx-1"></span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default PostCard;
