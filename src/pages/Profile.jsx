import { useAuth } from "../hooks/useAuth";
import Layout from "../components/Layout";

const Profile = () => {
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
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ color: "#2c3e50", marginBottom: "2rem" }}>Profile</h1>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {/* Profile header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #ecf0f1",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#3498db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                marginRight: "1.5rem",
              }}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style={{ margin: "0 0 0.5rem 0", color: "#2c3e50" }}>
                {user?.name}
              </h2>
              <p style={{ margin: 0, color: "#7f8c8d" }}>{user?.email}</p>
            </div>
          </div>

          {/* Profile details */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                color: "#7f8c8d",
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              User ID
            </label>
            <p
              style={{
                margin: 0,
                color: "#2c3e50",
                fontSize: "1.1rem",
              }}
            >
              {user?.id}
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                color: "#7f8c8d",
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              Email Address
            </label>
            <p
              style={{
                margin: 0,
                color: "#2c3e50",
                fontSize: "1.1rem",
              }}
            >
              {user?.email}
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                color: "#7f8c8d",
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              Account Type
            </label>
            <p
              style={{
                margin: 0,
                color: "#2c3e50",
                fontSize: "1.1rem",
              }}
            >
              {user?.role || "Standard User"}
            </p>
          </div>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid #ecf0f1",
            }}
          >
            <div
              style={{
                backgroundColor: "#e8f4f8",
                padding: "1rem",
                borderRadius: "4px",
                border: "1px solid #3498db",
              }}
            >
              <p style={{ margin: 0, color: "#2c3e50", fontSize: "0.9rem" }}>
                <strong>Protected Route:</strong> This profile page is only
                accessible to authenticated users with valid JWT tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
