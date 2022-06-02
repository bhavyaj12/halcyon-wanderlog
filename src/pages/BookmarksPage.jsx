import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getAuth, fetchBookmarks } from "redux-reducers";
import { NavSide, PostCard, SuggestionList } from "components";

const BookmarksPage = () => {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts, bookmarks } = useSelector(getPost);

  useEffect(() => {
    dispatch(fetchBookmarks(token));
  }, [dispatch]);

  const bookmarkedPosts = posts.filter((post) => bookmarks.includes(post._id));

  return (
    <section className="social-main-content">
      <NavSide />
      <div className="posts-wrapper">
        {bookmarkedPosts.length > 0 ? (
          bookmarkedPosts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <div>
            <div className="text-align-center m-5 px-4 w-100 alert alert-danger">
              You have no bookmarks. Bookmark posts from home feed.
            </div>
          </div>
        )}
      </div>
      <SuggestionList />
    </section>
  );
};

export default BookmarksPage;
