import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "custom-hooks";
import { getPost, getAuth, fetchBookmarks } from "redux-reducers";
import { NavSide, PostCard, SuggestionList } from "components";

const BookmarksPage = () => {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const { posts, bookmarks } = useSelector(getPost);
  const { showToast } = useToast();

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchBookmarks(token));
        if (response.error) {
          throw new Error("Error in loading user bookmarks");
        }
      } catch (error) {
        showToast("error", error.message);
      }
    })();
  }, [token]);

  const bookmarkedPosts = posts
    .filter((post) => bookmarks.includes(post._id))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

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
