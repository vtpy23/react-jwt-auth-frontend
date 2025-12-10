import axiosInstance from "./axios";

export const authApi = {
  // Register
  register: async (userData) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
  },

  // Login
  login: async (credentials) => {
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data;
  },

  // Logout
  logout: async (refreshToken) => {
    const response = await axiosInstance.post("/auth/logout", {
      refreshToken,
    });
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    const response = await axiosInstance.post("/auth/refresh", {
      refreshToken,
    });
    return response.data;
  },
};
