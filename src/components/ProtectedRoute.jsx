import { Navigate } from "react-router-dom";
import { getAccessToken } from "../api/axios";
import { tokenStorage } from "../utils/tokenStorage";

const ProtectedRoute = ({ children }) => {
  const accessToken = getAccessToken();
  const refreshToken = tokenStorage.getRefreshToken();

  // Check if user has valid tokens
  if (!accessToken && !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
