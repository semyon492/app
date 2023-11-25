import {fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token') ?? ''

export const removeWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/remove`, params);
  return res.data;
};

export const addWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/add`, params);
  return res.data;
};

export const allWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/all`, params);
  return res.data;
};

export const likeWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/like`, params);
  return res.data;
};

export const unlikeWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/unlike`, params);
  return res.data;
};

export const commentWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/comment/add`, params);
  return res.data;
};

export const uncommentWall = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}wall/comment/remove`, params);
  return res.data;
};