import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostCard, CommentsBox, NavSide, SuggestionList } from "components";
import { getPost } from "redux-reducers";

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector(getPost);

  const [singlePost, setSinglePost] = useState(null);
  const fetchPost = (posts, postId) => {
    return posts.find((post) => post._id === postId);
  };

  useEffect(() => {
    setSinglePost(fetchPost(posts, postId));
  }, [posts, postId]);

  return (
    <div>
      <section className="social-main-content">
        <NavSide />
        <div className="posts-wrapper">
          <button
            type="submit"
            className="mt-5 btn btn-info btn-sm"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
          {!singlePost ? null : (
            <>
              <PostCard post={singlePost} />
              <CommentsBox post={singlePost} />
            </>
          )}
        </div>
        <SuggestionList />
      </section>
    </div>
  );
};

export default SinglePost;
