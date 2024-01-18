// api/userApi.js
import * as apiService from '../services/apiService';

export const fetchUserAccounts = async () => {
  try {
    const response = await apiService.getUserAccounts();
    return response.data;
  } catch (error) {
    console.error('Error fetching user accounts:', error);
    throw error;
  }
};

export const fetchUserInfos = async (username) => {
  try {
    const response = await apiService.getUserInfo(username);
    return response.data;
  } catch (error) {
    console.error('Error fetching user infos:', error);
    throw error;
  }
};

