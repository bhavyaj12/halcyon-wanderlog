import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePost,
  likePost,
  dislikePost,
  SET_POST_TO_EDIT,
  SHOW_MODAL,
} from "redux-reducers";
import { useToast } from "custom-hooks";
import { Image } from "react-bootstrap";
import { getAuth } from "redux-reducers";
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

const PostCard = ({ post }) => {
  const { user, token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const {
    _id,
    content,
    likes: { likedBy, dislikedBy, likeCount },
    username,
    firstName,
    lastName,
    updatedAt,
    postImage,
  } = post;

  const checkUserLikes = () => {
    return likedBy.find((userInList) => userInList.username === user.username)
      ? true
      : false;
  };

  console.log(checkUserLikes());

  const deletePostHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(deletePost({ token, postID: _id }));
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

  const editPostHandler = () => {
    dispatch(SHOW_MODAL(true));
    console.log("from editPostHandler", post);
    dispatch(SET_POST_TO_EDIT(post));
  };

  const likeHandler = async (e) => {
    e.preventDefault();
    try {
      const response = checkUserLikes()
        ? await dispatch(dislikePost({ token, postID: _id }))
        : await dispatch(likePost({ token, postID: _id }));
      console.log("response from like post handler", response);
      if (response.error) {
        throw new Error(response.payload);
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
              {firstName} {lastName}{" "}
              <span className="post-date mx-3">
                {dayjs(new Date(updatedAt)).format("HH:mm:ss, ddd, DD/MM/YYYY")}
              </span>
            </span>
            <span className="mx-3 user-name">@{username}</span>
          </div>
          {user.username === username && (
            <div className="post-user-actions flex-row-centre">
              <button
                type="button"
                className="icon-btn flex-row-centre"
                onClick={editPostHandler}
              >
                <EditIcon />
              </button>
              <button
                type="button"
                className="icon-btn flex-row-centre"
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
              className="mx-3 my-2"
            />
          </div>
        )}
        <div className="post-footer-icons">
          <div className="flex-row-centre">
            {checkUserLikes() ? (
              <button type="button" className="icon-btn" onClick={likeHandler}>
                <ThumbUpIcon />
              </button>
            ) : (
              <button type="button" className="icon-btn" onClick={likeHandler}>
                <ThumbUpOutlinedIcon />
              </button>
            )}
            <span className="mx-1">{likeCount}</span>
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
            <span className="mx-1"></span>
          </div>
          <div className="flex-row-centre">
            <button type="button" className="icon-btn">
              <ShareOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
