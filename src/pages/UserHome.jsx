import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPost, getAuth } from "redux-reducers";
import {
  NavSide,
  AddPost,
  PostCard,
  SuggestionList,
  FilterButtons,
} from "components";

const UserHome = () => {
  const { token, user } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts, sortBy, postsLoading } = useSelector(getPost);

  const [postsOfFollowing, setPostsOfFollowing] = useState([]);

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
  }, [user, dispatch]);

  useEffect(() => {
    const filterByFollowing = posts.filter(
      (post) =>
        user.username === post.username ||
        user.following.find((account) => account.username === post.username)
    );

    switch (sortBy) {
      case "LATEST":
        setPostsOfFollowing(
          filterByFollowing.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
        break;
      case "OLDEST":
        setPostsOfFollowing(
          filterByFollowing.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
        );
        break;
      case "TRENDING":
        setPostsOfFollowing(
          filterByFollowing.sort(
            (a, b) => b.likes.likeCount - a.likes.likeCount
          )
        );
        break;
    }
  }, [token, posts, sortBy]);

  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        <AddPost />
        <FilterButtons />
        {postsLoading ? <div className="my-4 alert alert-info">Loading...</div> : postsOfFollowing.length > 0 ?
          postsOfFollowing.map((post) => (
            <PostCard key={post._id} post={post} />
          )) : <div className="my-4 alert alert-danger">You have not added any posts</div>}
      </div>
      <SuggestionList />
    </section>
  );
};

export default UserHome;
