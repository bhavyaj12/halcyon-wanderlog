import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  getAllUsers,
  followUser,
  fetchAllUsers,
} from "redux-reducers";
import { Image } from "react-bootstrap";
import { useToast } from "custom-hooks";
import { useTheme } from "theme-context";

const SuggestionList = () => {
  const { theme } = useTheme();
  const { user, token } = useSelector(getAuth);
  const { users, usersLoading } = useSelector(getAllUsers);
  const { showToast } = useToast();
  const dispatch = useDispatch();

  const [suggestionsList, setSuggestionsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchAllUsers());
        if (response.error) {
          throw new Error("Error in loading all users.");
        }
      } catch (error) {
        showToast("error", error.message);
      }
    })();
  }, [token]);

  useEffect(() => {
    setSuggestionsList(
      users.filter(
        (listUser) =>
          listUser.username !== user.username &&
          !user.following?.find(
            (account) => account.username === listUser.username
          )
      )
    );
  }, [users, user]);

  const followClickHandler = async (toFollowId) => {
    try {
      const response = await dispatch(
        followUser({ token, userId: toFollowId, dispatch })
      );
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      showToast("error", "Can't follow user. Try again later.");
    }
  };

  return (
    <div
      className={
        theme === "light"
          ? "suggestions-wrapper bg-light p-2"
          : "suggestions-wrapper bg-dark p-2"
      }
    >
      <h5 className="mt-4">Suggestions for you</h5>
      {usersLoading ?  <div className="alert alert-info my-3">Loading...</div>: suggestionsList?.map((userAcc) => (
          <div
            className="my-3 d-flex justify-content-between align-items-center"
            key={userAcc._id}
          >
            <Image
              src={userAcc.profileImg}
              roundedCircle
              width={30}
              height={30}
              className="my-2 object-fit-cover"
            />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
              <Link
                to={`/profile/${userAcc.username}`}
                className="mx-2 link-no-decor"
              >
                <p className="m-0">
                  {userAcc.firstName} {userAcc.lastName}
                </p>
                <p className="m-0">@{userAcc.username}</p>
              </Link>
              <button
                type="button"
                className="btn btn-info btn-sm ms-auto"
                onClick={() => {
                  followClickHandler(userAcc._id);
                }}
              >
                + Follow
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SuggestionList;
