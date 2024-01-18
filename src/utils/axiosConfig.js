import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8070/', // Backend API URL'si
  timeout: 5000, // Zaman aşımı (ms)
  headers: {
    'Content-Type': 'application/json',
    // Diğer header'ları ekleyebilirsiniz
  },
});

export default axiosInstance;