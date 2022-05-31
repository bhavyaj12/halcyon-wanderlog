import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPost, getPost, getAuth } from "redux-reducers";
import { Image } from "react-bootstrap";
import { useToast } from "custom-hooks";
import { AddPhotoAlternateIcon, dummyProfile, CancelIcon } from "assets";

const AddPost = () => {
  const [addContent, setAddContent] = useState("");
  const [addPostImage, setAddPostImage] = useState("");

  const { user, token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const addPostHandler = async (e) => {
    e.preventDefault();
    const { firstName, lastName } = user;

    const postData = {
      firstName,
      lastName,
      content: addContent,
      postImage: addPostImage,
    };

    try {
      const response = await dispatch(addPost({ token, postData }));
      console.log("response from add post handler", response);
      if (response.error) {
        throw new Error(response.payload);
      }
      showToast("success", "Added post successfully.");
    } catch (error) {
      if (error.message.includes("402"))
        showToast(
          "error",
          "This username is not registered. Please login again."
        );
      else if (error.message.includes("500"))
        showToast("error", "Can't add new post. Try again later.");
    }
    setTimeout(() => {
      setAddContent("");
      setAddPostImage("");
    }, 2000);
  };

  const fileToURL = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      let imgUrl = reader.result;
      setAddPostImage(imgUrl);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <form className="card bg-light m-4" onSubmit={addPostHandler}>
      <div className="card-header">What's Happening?</div>
      <div className="card-body">
        <div className="d-flex justify-content-start align-items-center">
          <Image
            alt="user profile image"
            src={dummyProfile}
            roundedCircle
            width={50}
            height={50}
            className="mx-3 my-2 img-fluid"
          />
          <textarea
            className="post-input"
            placeholder="Start typing..."
            value={addContent}
            onChange={(e) => setAddContent(e.target.value)}
          />
        </div>
        <div className="post-footer-icons">
          <label htmlFor="add-image">
            <AddPhotoAlternateIcon role="button" />
            <input
              id="add-image"
              type="file"
              accept=".png, .jpeg, .jpg"
              hidden
              onChange={fileToURL}
            />
          </label>

          {addPostImage !== "" && (
            <div className="position-relative">
              <p>Images: </p>
              <Image
                className="my-1 img-fluid"
                width={100}
                height={50}
                src={addPostImage}
              />
              <button
                className="btn-no-decor"
                onClick={() => setAddPostImage("")}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {addContent.length === 0 ? (
            <button className="btn btn-secondary btn-sm px-4 me-md-2" disabled>
              Post
            </button>
          ) : (
            <button type="submit" className="btn btn-info btn-sm px-4 me-md-2">
              Post
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddPost;
