import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPost, getAuth } from "redux-reducers";
import { NavSide, AddPost, PostCard, SuggestionList } from "components";

const UserHome = () => {
  const { token, user } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts } = useSelector(getPost);

  const [postsOfFollowing, setPostsOfFollowing] = useState([]);

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
    const filterByFollowing = posts.filter(
      (post) =>
        user.username === post.username ||
        user.following.find((account) => account.username === post.username)
    );
    setPostsOfFollowing(filterByFollowing);
  }, [token, posts]);

  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        <AddPost />
        {postsOfFollowing.length > 0 &&
          postsOfFollowing.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
      </div>
      <SuggestionList />
    </section>
  );
};

export default UserHome;
