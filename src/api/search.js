import {fetchPost} from './http';

let base = import.meta.env.VITE_DOMAIN_API
let access_token = localStorage.getItem('token') ?? ''

// export const fetchAllSearch = async params => {
//     params.access_token = access_token
//     const res = await fetchPost(`${base}search`, params);
//     return res.data;
// };

export const fetchAllSearch = params => {
    params.access_token = access_token
    return fetchPost(`${base}search`, params).then(res => res.data);
};