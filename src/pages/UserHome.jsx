import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPost, getAuth } from "redux-reducers";
import { NavSide, AddPost, PostCard, SuggestionList } from "components";

const UserHome = () => {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts } = useSelector(getPost);

  useEffect(() => {
    dispatch(fetchPosts(token));
  }, [dispatch]);

  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        <AddPost />
        {posts.length > 0 && posts.map((post) => <PostCard key={post._id} post={post}/>)}
      </div>
      <SuggestionList />
    </section>
  );
};

export default UserHome;
