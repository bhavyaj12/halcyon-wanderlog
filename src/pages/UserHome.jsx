import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPost, getAuth } from "redux-reducers";
import { NavSide, AddPost, PostCard, SuggestionList } from "components";

const UserHome = () => {
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
  }, []);

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
