import { Image } from "react-bootstrap";
import { AddPhotoAlternateIcon, dummyProfile } from "assets";

const AddPost = () => {
  return (
    <div className="card bg-light m-4">
      <div className="card-header">What's Happening?</div>
      <div className="card-body">
        <div className="post-img-input">
          <Image
            alt="user profile image"
            src={dummyProfile}
            roundedCircle
            width={50}
            height={50}
            className="mx-3 my-2 img-fluid"
          />
          <input
            className="post-input"
            type="textarea"
            placeholder="Start typing..."
          ></input>
        </div>
        <div className="post-footer-icons">
          <AddPhotoAlternateIcon />
          <button type="button" className="btn btn-info btn-sm px-4 me-md-2">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
