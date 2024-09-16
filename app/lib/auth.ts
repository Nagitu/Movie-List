export interface Credentials {
  username: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  // Tambahkan properti lain sesuai kebutuhan
}

const API_URL = "http://localhost:8080/api/v1/auth";

export async function login(credentials: Credentials): Promise<User | null> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();

  if (data && data.token) {
    // Asumsikan bahwa data berisi token dan informasi user lainnya
    return {
      id: data.id,
      name: data.name,
      email: data.email,
    };
  }

  return null;
}

export async function signup(credentials: Credentials): Promise<User | null> {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  const data = await response.json();

  if (data && data.token) {
    // Asumsikan bahwa data berisi token dan informasi user lainnya
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      // Token dapat ditambahkan jika diperlukan
      // token: data.token,
    };
  }

  return null;
}

