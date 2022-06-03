import { useDispatch, useSelector } from "react-redux";
import { getPostModal, SET_POST_TO_EDIT, HIDE_MODAL } from "redux-reducers";
import { CancelIcon } from "assets";
import AddPost from "./AddPost";

const PostModal = () => {
  const { showModal } = useSelector(getPostModal);
  const dispatch = useDispatch();

  const cancelEditHandler = () => {
      dispatch(HIDE_MODAL());
      dispatch(SET_POST_TO_EDIT({}));
  }

  return showModal ? (
    <div className="edit-post-modal-wrapper d-flex justify-content-center align-items-center">
      <div className="edit-post-container p-2 position-relative">
        <h4>Edit Post</h4>
        <button className="btn-no-decor position-absolute" onClick={cancelEditHandler}><CancelIcon sx={{ fontSize: "40px" }}/></button>
        <div className="edit-post-text-container d-flex justify-content-center align-items-center">
          <AddPost modal={true}/>
        </div>  
      </div>
    </div>
  ) : null;
};

export default PostModal;
