import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import { PostCard, NavSide, SuggestionList, EditProfile } from "components";
import {
  getAuth,
  getPost,
  getUserProfile,
  fetchUserPosts,
  fetchUserProfile,
  SHOW_PROFILE_MODAL,
  followUser,
  unfollowUser,
  getAllUsers
} from "redux-reducers";
import { useToast } from "custom-hooks";
import { useTheme } from "theme-context";

const ProfilePage = () => {
  const { theme } = useTheme();
  const { token, user } = useSelector(getAuth);
  const { posts } = useSelector(getPost);
  const { userProfile, userPosts } = useSelector(getUserProfile);
  const { username } = useParams();
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const { users } = useSelector(getAllUsers); 

  const {
    _id,
    firstName,
    lastName,
    followers,
    following,
    userBio,
    portfolio,
  } = userProfile; 

  const [userPostsLoading, setUserPostsLoading] = useState(true);
  
  useEffect(() => {
    dispatch(fetchUserPosts({ username: username }));
  }, [posts])

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchUserProfile({ username: username }));
        if (response.error) {
          throw new Error("Error in loading user profile");
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
    (async () => {
      try {
        const response = await dispatch(fetchUserPosts({ username: username }));
        if (response.error) {
          throw new Error("Error in loading user posts");
        }
        setUserPostsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [users, username]);

  const checkFollowed = () => followers?.some((listUser) => listUser.username === user.username);

  const followUnfollowHandler = async () => {
    try {
      const response = checkFollowed() ? await dispatch(
        unfollowUser({ token, userId: _id, dispatch})
      ) : await dispatch(
        followUser({ token, userId: _id, dispatch})
      );
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      showToast("error", "Can't follow user. Try again later.");
    }
  };
  
  const editProfileHandler = () => {
    dispatch(SHOW_PROFILE_MODAL());
  };

  return (
    <div>
      <section className="social-main-content"> 
        <NavSide />
        <div className="posts-wrapper">
          <div
            className={
              theme === "light"
                ? "user-profile my-4 bg-light p-2"
                : "user-profile my-4 bg-dark p-2"
            }
          >
            <div className="d-flex justify-content-center align-items-center my-2">
              <Image
                src="https://www.shareicon.net/data/128x128/2016/07/05/791214_man_512x512.png"
                roundedCircle
                width={80}
                height={80}
                className="m-3 my-2 img-fluid"
              />
              <div className="flex-col">
                <span className="mx-3 name-bold">
                  {firstName} {lastName}{" "}
                  <span className="post-date mx-3"></span>
                </span>
                <span className="mx-3 user-name">@{username}</span>
              </div>
              {user.username === username && <button
                type="submit"
                className="btn btn-info btn-sm"
                onClick={editProfileHandler}
              >
                Edit Profile
              </button>}
              {user.username !== username && <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={followUnfollowHandler}
              >
                {checkFollowed() ? "Following" : "Follow"}
              </button>}
            </div>
            <div className="my-5">
              <p className="mx-3 user-bio mt-5">
                <span className="fw-bolder">Bio: </span>
                {userBio}
              </p>
              <p className="mx-3 user-bio mt-2">
                <span className="fw-bolder">Portfolio Link: </span>
                <a href={portfolio} target="_blank" className="portfolio-link">
                  {portfolio}
                </a>
              </p>
              <p className="mx-3 user-bio mt-2 d-flex justify-content-between align-items-center">
                <span className="fw-bolder">{userPostsLoading ? 0 : userPosts.length} Posts </span>
                <span className="fw-bolder">{followers?.length} Followers </span>
                <span className="fw-bolder">{following?.length} Following </span>
              </p>
            </div>
          </div>
          {userPosts.length > 0 && userPosts.map((post) => <PostCard key={post._id} post={post}/>)}
        </div>
        <SuggestionList />
      </section>
      <EditProfile />
    </div>
  );
};

export default ProfilePage;
