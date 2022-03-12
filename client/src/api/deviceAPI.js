import {host, authHost} from "./index";
import jwtDecode from "jwt-decode";

export const createType = async ( type ) => {
    const { data } = await authHost.post('api/type/create', type);
    return data;
}

export const fetchTypes = async () => {
    const { data } = await host.get('api/type');
    return data;
}

export const editType = async () => {
    const { data } = await authHost.get('api/type/edit');
    return data;
}

export const deleteType = async () => {
    const { data } = await authHost.delete('api/type');
    return data;
}


export const createBrand = async ( brand ) => {
    const { data } = await authHost.post('api/brand/create', brand);
    return data;
}

export const fetchBrands = async () => {
    const { data } = await host.get('api/brand');
    return data;
}

export const editBrand = async () => {
    const { data } = await authHost.get('api/brand/edit');
    return data;
}

export const deleteBrand = async () => {
    const { data } = await authHost.delete('api/brand');
    return data;
}


export const createDevice = async ( device ) => {
    const { data } = await authHost.post('api/device/create', device);
    return data;
}

export const fetchDevices = async (typeId, brandId, page, limit) => {
    const { data } = await host.get('api/device', {params: {
            typeId, brandId, page, limit
        }});
    return data;
}

export const fetchOneDevice = async (id) => {
    const { data } = await host.get('api/device/' + id);
    return data;
}

export const editDevice = async () => {
    const { data } = await authHost.get('api/device/edit');
    return data;
}

export const deleteDevice = async () => {
    const { data } = await authHost.delete('api/device');
    return data;
}