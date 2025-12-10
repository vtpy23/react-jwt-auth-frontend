import { useAuth } from "../hooks/useAuth";
import Layout from "../components/Layout";

const Dashboard = () => {
  const { user, isLoadingUser } = useAuth();

  if (isLoadingUser) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ color: "#2c3e50", marginBottom: "2rem" }}>Dashboard</h1>

        {/* Welcome card */}
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ color: "#3498db", marginTop: 0 }}>
            Welcome back, {user?.name}!
          </h2>
          <p style={{ color: "#7f8c8d", fontSize: "1.1rem" }}>
            You have successfully logged in with JWT authentication.
          </p>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", opacity: 0.9 }}
            >
              Access Token
            </h3>
            <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
              ✓ Active
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#2ecc71",
              color: "white",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", opacity: 0.9 }}
            >
              Refresh Token
            </h3>
            <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
              ✓ Stored
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#9b59b6",
              color: "white",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", opacity: 0.9 }}
            >
              Session Status
            </h3>
            <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
              ✓ Authenticated
            </p>
          </div>
        </div>

        {/* Features info */}
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#2c3e50", marginTop: 0 }}>
            Authentication Features
          </h2>
          <ul style={{ color: "#7f8c8d", lineHeight: "2" }}>
            <li>✓ JWT Access & Refresh Token Implementation</li>
            <li>✓ Automatic Token Refresh on Expiration</li>
            <li>✓ Protected Routes with Authentication Guard</li>
            <li>✓ React Hook Form for Form Validation</li>
            <li>✓ React Query for State Management</li>
            <li>✓ Axios Interceptors for Request/Response Handling</li>
            <li>✓ Secure Token Storage (Memory + LocalStorage)</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
