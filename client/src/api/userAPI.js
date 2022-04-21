import {host, authHost} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async ( { email, password } ) => {
    const { data } = await host.post('api/user/registration', {
        email, password, role: 'ADMIN', firstname: '', lastname: '', phone: ''});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async ( { email, password } ) => {
    const { data } = await host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const checkAuth = async () => {
    const { data } = await authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const updateUser = async (user) => {
    const { data } = await authHost.put('api/user', user);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const deleteUser = async (id) => {
    const { data } = await authHost.delete('api/user/' + id);
    return data;
}