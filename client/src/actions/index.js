import axios from 'axios';
import { FETCH_USER, FETCH_BLOGS, FETCH_BLOG, FETCH_PUBLIC, LIKE_PUBLIC_BLOG } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPublicBlogs = () => async dispatch => {
  const res = await axios.get('/api/publicblogs');

  dispatch({ type: FETCH_PUBLIC, payload: res.data });
};

export const likePublicBlog = id => async dispatch => {
  const res = await axios.get(`/api/like/${id}`);

  dispatch({ type: LIKE_PUBLIC_BLOG, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBlog = (values, state, history) => async dispatch => {

   const uploadImageRes = await axios.post("/api/uploadImage", {
     image: state.file,
   });

   const res = await axios.post("/api/blogs", {
     ...values,
     blogType: state.ispublic,
     imageUrl: uploadImageRes.data,
   });

  history.push('/blogs');
  dispatch({ type: FETCH_BLOG, payload: res.data });
};

export const fetchBlogs = () => async dispatch => {
  const res = await axios.get('/api/blogs');

  dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: res.data });
};
