import {fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token') ?? ''

export const addFriend = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/add`, params);
    return res.data;
};

export const deleteFriend = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/delete`, params);
    return res.data;
};

export const fetchFriendsAll = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/all`, params);
    return res.data;
};

export const fetchFriendsSearch = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/search`, params);
    return res.data;
};

export const fetchFriendsRequests = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/requests`, params);
    return res.data;
};

export const fetchFriendsOnline = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/online`, params);
    return res.data;
};

export const fetchFriendsCommon = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}friends/common`, params);
    return res.data;
};
