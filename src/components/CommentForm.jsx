import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  commentOnPost,
  getAuth,
  deleteCommentInPost,
  editCommentInPost,
} from "redux-reducers";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "custom-hooks";
import { useTheme } from "theme-context";
import { Image } from "react-bootstrap";
import { getPost } from "redux-reducers";
import {
  ThumbUpOutlinedIcon,
  ThumbUpIcon,
  DeleteOutlineIcon,
  EditIcon,
} from "assets";

const CommentForm = ({ post }) => {
  const { theme } = useTheme();
  const { posts } = useSelector(getPost);
  const { token, user } = useSelector(getAuth);
  const { showToast } = useToast();
  const dispatch = useDispatch();
  console.log("from comments form", post);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(post.comments);
  const [isEditingId, setIsEditingId] = useState(false);

  const editCommentText = () =>
    posts
      .find(({ _id }) => _id === post._id)
      .comments.find((comment) => comment._id === isEditingId)?.text;

  useEffect(() => {
    if (isEditingId) {
      setComment(editCommentText);
    }
  }, [isEditingId]);

  useEffect(() => {
    setCommentList(
      [...post.comments].sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      )
    );
  }, [post.comments]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    try {
      const response = isEditingId
        ? await dispatch(
            editCommentInPost({
              token,
              postId: post._id,
              commentId: isEditingId,
              commentData: { text: comment },
            })
          )
        : await dispatch(
            commentOnPost({
              token,
              postId: post._id,
              commentData: { text: comment },
            })
          );
      console.log(response);
      if (response.error) {
        throw new Error("Couldn't modify comments");
      }
    } catch (error) {
      showToast("error", "Couldn't modify comments");
    }
    setIsEditingId(false);
    setComment("");
  };

  const deleteCommentHandler = async (commentId) => {
    try {
      const response = await dispatch(
        deleteCommentInPost({
          token,
          postId: post._id,
          commentId: commentId,
        })
      );
      console.log(response);
      if (response.error) {
        throw new Error("Couldn't delete comment");
      }
    } catch (error) {
      showToast("error", "Couldn't delete comment");
    }
  };

  const cancelCommentEditHandler = (e) => {
    e.preventDefault();
    setIsEditingId(false);
    setComment("");
  };

  return (
    <>
      <div className="d-flex justify-content-start align-items-center w-100">
        <Image
          src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
          roundedCircle
          width={30}
          height={30}
          className="my-2 mx-2 img-fluid"
        />
        <form className="d-flex justify-content-start align-items-center p-2">
          <textarea
            cols={60}
            className="w-100 mx-2 comments-textarea"
            placeholder="Enter comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {isEditingId ? (
            <div className="d-flex gap-2">
              <button
                type="submit"
                className="btn btn-secondary btn-sm"
                onClick={cancelCommentEditHandler}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-info btn-sm"
                onClick={addCommentHandler}
                disabled={comment.length === 0}
              >
                Save Comment
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-info btn-sm"
              onClick={addCommentHandler}
              disabled={comment.length === 0}
            >
              Reply
            </button>
          )}
        </form>
      </div>
      <div className="d-flex flex-column">
        {!commentList
          ? null
          : commentList.map((commentItem) => (
              <div
                key={commentItem._id}
                className="d-flex justify-content-start align-items-start w-100 comments-card p-2"
              >
                <Image
                  src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
                  roundedCircle
                  width={30}
                  height={30}
                  className="my-2 mx-2 img-fluid"
                />
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <h6>
                      @{commentItem.username}{" "}
                      <span className="post-date fw-normal mx-3">
                        {dayjs(new Date(commentItem.updatedAt)).format(
                          "HH:mm, ddd, DD/MM/YYYY"
                        )}
                      </span>
                    </h6>
                    {user.username === commentItem.username && (
                      <div className="post-user-actions d-flex">
                        <button
                          type="button"
                          className={
                            theme === "light"
                              ? "icon-btn flex-row-centre"
                              : "icon-btn dark-icon-btn"
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setIsEditingId(commentItem._id);
                          }}
                        >
                          <EditIcon />
                        </button>
                        <button
                          type="button"
                          className={
                            theme === "light"
                              ? "icon-btn flex-row-centre"
                              : "icon-btn dark-icon-btn"
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCommentHandler(commentItem._id);
                          }}
                        >
                          <DeleteOutlineIcon />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="fs-6 fw-normal">{commentItem.text}</p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default CommentForm;
