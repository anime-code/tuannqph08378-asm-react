import http from "./axiosHttp"

const getAll = (table) => {
    return http.get(table);
};
const removeData = (table, id) => {
    return http.delete(`/${table}/${id}`);
};
const create = (table, data) => {
    return http.post(`/${table}`, data);
};
const getDataById = (table, id) => {
    return http.get(`/${table}/${id}`);
};
const getDataByElement = (table, name) => {
    return http.get(`/${table}?${name}`);
};
const deleteDataByElement = (table, name) => {
    return http.delete(`/${table}?${name}`);
};
const updateData = (table, id, data) => {
    return http.put(`/${table}/${id}`, data);
};
export default {removeData, getAll, create, getDataByElement, getDataById, updateData, deleteDataByElement}
