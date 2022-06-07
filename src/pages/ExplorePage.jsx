import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "custom-hooks";
import { fetchPosts, getPost, getAuth } from "redux-reducers";
import { NavSide, PostCard, SuggestionList } from "components";

const ExplorePage = () => {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts, postsLoading } = useSelector(getPost);
  const { showToast } = useToast();

  const [explorePosts, setExplorePosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchPosts());
        if (response.error) {
          throw new Error("Can't fetch posts.");
        }
      } catch (error) {
        showToast("error", error.message);
      }
    })();
  }, [token, dispatch]);

  useEffect(() => {
    setExplorePosts(
      [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }, [token, posts]);

  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        {postsLoading ? (
          <div className="my-4 alert alert-primary">Loading...</div>
        ) : (
          explorePosts.length > 0 &&
          explorePosts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
      <SuggestionList />
    </section>
  );
};

export default ExplorePage;
