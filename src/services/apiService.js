// services/apiService.js
import axiosInstance from '../utils/axiosConfig';

export const getUserAccounts = () => axiosInstance.get('/user-accounts');
export const getUserInfo = (username) => axiosInstance.get('/user', {username});
export const loginUser = (username, password) => axiosInstance.post('/login', { username, password });
export const signupUser = (body) => axiosInstance.post('/signup', body);
// Diğer API çağrılarını ekleyebilirsiniz
