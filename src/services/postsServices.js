import axios from "axios";

const fetchPostsService = (token) => {
  return axios.get("/api/posts", { headers: { authorization: token } });
};

const addPostService = (token, postData) => {
  return axios.post(
    "/api/posts",
    { postData },
    { headers: { authorization: token } }
  );
};

const deletePostService = (token, postID) => {
  return axios.delete(`/api/posts/${postID}`, {
    headers: { authorization: token },
  });
};

export { fetchPostsService, addPostService, deletePostService };
