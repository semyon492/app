import {fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token') ?? ''

export const fetchAllFeed = async params => {
    params.access_token = access_token
    const res = await fetchPost(`${base}feed/all`, params);
    return res.data;
};
