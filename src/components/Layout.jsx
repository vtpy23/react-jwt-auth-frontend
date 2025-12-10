import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Layout = ({ children }) => {
  const { user, logout, isLoggingOut } = useAuth();
  const location = useLocation();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Navigation */}
      {user && (
        <nav
          style={{
            backgroundColor: "#2c3e50",
            padding: "1rem 2rem",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>React JWT Auth</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link
                to="/dashboard"
                style={{
                  color:
                    location.pathname === "/dashboard" ? "#3498db" : "white",
                  textDecoration: "none",
                  fontWeight:
                    location.pathname === "/dashboard" ? "bold" : "normal",
                }}
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                style={{
                  color: location.pathname === "/profile" ? "#3498db" : "white",
                  textDecoration: "none",
                  fontWeight:
                    location.pathname === "/profile" ? "bold" : "normal",
                }}
              >
                Profile
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>Welcome, {user.name}!</span>
            <button
              onClick={logout}
              disabled={isLoggingOut}
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: isLoggingOut ? "not-allowed" : "pointer",
                opacity: isLoggingOut ? 0.6 : 1,
              }}
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </nav>
      )}

      {/* Main content */}
      <main style={{ padding: "2rem" }}>{children}</main>
    </div>
  );
};

export default Layout;
