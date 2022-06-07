import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostCard, CommentsBox, NavSide, SuggestionList } from "components";
import { getPost } from "redux-reducers";
import { useToast } from "custom-hooks";
import { fetchSinglePostService } from "services";

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector(getPost);
  const { showToast } = useToast();

  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { post },
        } = await fetchSinglePostService(postId);
        setSinglePost(post);
      } catch (error) {
        showToast("error", "Can't fetch the post, try again later.");
      }
    })();
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
