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

export {
  fetchUserProfileService,
  fetchUserPostsService,
  updateUserProfileService,
};
