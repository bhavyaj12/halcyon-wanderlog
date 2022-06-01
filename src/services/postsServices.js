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

const editPostService = (token, postData, postID) => {
  return axios.post(
    `/api/posts/edit/${postID}`,
    { postData },
    {
      headers: { authorization: token },
    }
  );
};

const deletePostService = (token, postID) => {
  return axios.delete(`/api/posts/${postID}`, {
    headers: { authorization: token },
  });
};

const likePostService = (token, postID) => {
  return axios.post(
    `/api/posts/like/${postID}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = (token, postID) => {
  return axios.post(
    `/api/posts/dislike/${postID}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export {
  fetchPostsService,
  addPostService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
};
