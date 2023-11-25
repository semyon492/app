import {fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token') ?? ''

export const addNotify = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}notifications/test`, params);
    return res.data;
};

// export const deleteFriend = async params => {
//     params.access_token = access_token
//     const res = await fetchPost(`${base}notifications/delete`, params);
//     return res.data;
// };

export const fetchNotifyAll = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}notifications/all`, params);
    return res.data;
};

export const fetchNotifyGet = async params => {
  params.access_token = access_token
  const res = await fetchPost(`${base}notifications/get`, params);
  return res.data;
};