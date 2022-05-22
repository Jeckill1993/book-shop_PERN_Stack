import axios from 'axios';


const host = axios.create({
    baseURL: process.env.VERCEL_APP_CLIENT_API,
});

const authHost = axios.create({
    baseURL: process.env.VERCEL_APP_CLIENT_API,
});


const authInterceptor = (config) => {
    config.headers.authorization = `${localStorage.getItem('token')}`;
    return config;
};

authHost.interceptors.request.use(authInterceptor);

export {
    host,
    authHost
};