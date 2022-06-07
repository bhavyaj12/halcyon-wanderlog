import axios from "axios";

const fetchPostsService = () => {
  return axios.get("/api/posts");
};

const addPostService = (token, postData) => {
  return axios.post(
    "/api/posts",
    { postData },
    { headers: { authorization: token } }
  );
};

const editPostService = (token, postData, postId) => {
  return axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    {
      headers: { authorization: token },
    }
  );
};

const deletePostService = (token, postId) => {
  return axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};

const likePostService = (token, postId) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostService = (token, postId) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const fetchBookmarksService = (token) => {
  return axios.get(`/api/users/bookmark/`, {
    headers: { authorization: token },
  });
};

const addBookmarkService = (token, postId) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const deleteBookmarkService = (token, postId) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const commentOnPostService = (token, postId, commentData) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: { authorization: token },
    }
  );
};

const deleteCommentService = (token, postId, commentId) => {
  return axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const editCommentService = (token, postId, commentId, commentData) => {
  return axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );
};

const fetchSinglePostService = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};

export {
  fetchPostsService,
  addPostService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
  fetchBookmarksService,
  addBookmarkService,
  deleteBookmarkService,
  commentOnPostService,
  deleteCommentService,
  editCommentService,
  fetchSinglePostService,
};
