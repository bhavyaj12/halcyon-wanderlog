import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPost, getAuth } from "redux-reducers";
import { NavSide, PostCard, SuggestionList } from "components";

const ExplorePage = () => {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts } = useSelector(getPost);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchPosts());
        if (response.error) {
          throw new Error("Can't fetch posts.");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);

  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        {posts.length > 0 && posts.map((post) => <PostCard key={post._id} post={post}/>)}
      </div>
      <SuggestionList />
    </section>
  );
};

export default ExplorePage;
