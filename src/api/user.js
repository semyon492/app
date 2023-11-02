import {fetchGet, fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token')

export const authRefreshToken = async params => {
    if(params.access_token == undefined)
    params.access_token = access_token
    const res = await fetchPost(`${base}account/getinfo`, params);
    return res.data;
};

export const fetchProfile = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}users/profile`, params);
    return res.data;
};

export const changeBio = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}account/change_bio`, params);
    return res.data;
};

export const authorize = async params => {
    const res = await fetchPost(`${base}authorize`, params);
    return res.data;
};

export const restore = async params => {
    const res = await fetchPost(`${base}account/restore`, params);
    return res.data;
};

export const changePass = async params => {
    const res = await fetchPost(`${base}account/reset_password`, params);
    return res.data;
};

export const register = async params => {
    const res = await fetchPost(`${base}account/register`, params);
    return res.data;
};
