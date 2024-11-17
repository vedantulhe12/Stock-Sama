import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
    API_URL = "https://df51-34-16-191-255.ngrok-free.app"

    constructor() {
        this.ax = this.init();
    }

    init() {
        return axios.create({
            baseURL: this.API_URL,
            timeout: 10000,
        });
    }

    async getAuthHeaders() {
        return {};
    }

    async get(endpoint) {
        try {
            const headers = await this.getAuthHeaders();
            const jsonHeaders = {
                'Content-Type': 'application/json',
            };
            const response = await this.ax.get(endpoint, { headers: { ...headers, ...jsonHeaders } });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post(endpoint, data) {
        try {
            const authHeaders = await this.getAuthHeaders();
            const jsonHeaders = {
                'Content-Type': 'application/json',
            };
            const fileHeaders = {
                'Content-Type': 'multipart/form-data',
            };
            const headers = data instanceof FormData ? { ...jsonHeaders, ...fileHeaders } : jsonHeaders;
            if (data instanceof FormData) {
                const response = await this.ax.post(endpoint, data, { headers: { ...headers, ...authHeaders } });
                return response.data;
            }else{
                const response = await this.ax.post(endpoint, { headers: { ...headers, ...authHeaders } });
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    }

}

export default new ApiService();