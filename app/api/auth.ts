import axios from "axios";

type loginProps = {
    username: string;
    password: string;
};

const API = axios.create({ baseURL: 'http://localhost:3000/api/v1/auth' });

export const login = async ({ username, password }: loginProps) => {
    try {
        const response = await API.post('/login', { username, password });
        
        // // Menyimpan token di localStorage atau sesuai kebutuhan aplikasi
        localStorage.setItem('authToken', response.data.token);
        
        console.log('Login successful:', response.data.token);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Menampilkan pesan kesalahan dari server atau pesan default
            console.error(error.response?.data || 'An error occurred during login');
        } else {
            console.error('An unexpected error occurred');
        }
        throw error; // Lempar error untuk penanganan lebih lanjut jika diperlukan
    }
};

