import {fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token') ?? ''

export const send = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}messages/send`, params);
    return res.data;
};

export const read = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}messages/read`, params);
    return res.data;
};

export const typograf = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}messages/typograf`, params);
    return res.data;
};

export const deleteMessage = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}messages/delete`, params);
    return res.data;
};
