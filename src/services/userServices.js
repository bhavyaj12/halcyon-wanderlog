import axios from "axios";

const fetchUserProfileService = (username) => {
  return axios.get(`/api/users/${username}`);
};

const fetchUserPostsService = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

const updateUserProfileService = (token, userData) => {
  return axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization: token },
    }
  );
};

const followUserService = (token, userId) => {
  return axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const unfollowUserService = (token, userId) => {
  return axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const fetchAllUsersService = () => {
  return axios.get("/api/users");
};

export {
  fetchUserProfileService,
  fetchUserPostsService,
  updateUserProfileService,
  followUserService,
  unfollowUserService,
  fetchAllUsersService,
};
