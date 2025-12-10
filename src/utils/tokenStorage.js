// Token storage utilities
const TOKEN_KEY = "refreshToken";

export const tokenStorage = {
  // Get refresh token from localStorage
  getRefreshToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  // Set refresh token in localStorage
  setRefreshToken: (token) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },

  // Remove refresh token from localStorage
  removeRefreshToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Clear all tokens
  clearTokens: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
