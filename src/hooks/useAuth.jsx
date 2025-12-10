import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";
import { tokenStorage } from "../utils/tokenStorage";
import { setAccessToken, clearAccessToken, getAccessToken } from "../api/axios";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!getAccessToken() || !!tokenStorage.getRefreshToken();
  };

  // Login mutation
  const loginMutation = useMutation(
    (credentials) => authApi.login(credentials),
    {
      onSuccess: (data) => {
        // Store tokens
        setAccessToken(data.accessToken);
        tokenStorage.setRefreshToken(data.refreshToken);

        // Store user data in cache
        queryClient.setQueryData("currentUser", data.user);

        // Navigate to dashboard
        navigate("/dashboard");
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    }
  );

  // Register mutation
  const registerMutation = useMutation(
    (userData) => authApi.register(userData),
    {
      onSuccess: (data) => {
        // Store tokens
        setAccessToken(data.accessToken);
        tokenStorage.setRefreshToken(data.refreshToken);

        // Store user data in cache
        queryClient.setQueryData("currentUser", data.user);

        // Navigate to dashboard
        navigate("/dashboard");
      },
      onError: (error) => {
        console.error("Registration failed:", error);
      },
    }
  );

  // Logout mutation
  const logoutMutation = useMutation(
    () => {
      const refreshToken = tokenStorage.getRefreshToken();
      return authApi.logout(refreshToken);
    },
    {
      onSuccess: () => {
        // Clear tokens
        clearAccessToken();
        tokenStorage.clearTokens();

        // Clear all queries
        queryClient.clear();

        // Navigate to login
        navigate("/login");
      },
      onError: (error) => {
        // Even if logout fails, clear local data
        clearAccessToken();
        tokenStorage.clearTokens();
        queryClient.clear();
        navigate("/login");
      },
    }
  );

  // Get current user query
  const currentUserQuery = useQuery(
    "currentUser",
    async () => {
      const response = await authApi.getCurrentUser();
      return response.user;
    },
    {
      enabled: isAuthenticated(),
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      onError: (error) => {
        if (error.response?.status === 401) {
          clearAccessToken();
          tokenStorage.clearTokens();
          navigate("/login");
        }
      },
    }
  );

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isLoading,
    isRegistering: registerMutation.isLoading,
    isLoggingOut: logoutMutation.isLoading,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
    user: currentUserQuery.data,
    isLoadingUser: currentUserQuery.isLoading,
    isAuthenticated: isAuthenticated(),
  };
};
