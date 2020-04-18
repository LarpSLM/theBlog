import axios from 'axios';

const axiosFetch = axios.create({
    baseURL: 'http://school-blog.ru/api/',
    timeout: 5000,
    withCredentials: true
});

export default axiosFetch;