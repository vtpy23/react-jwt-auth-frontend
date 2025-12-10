import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    login,
    register: registerUser,
    isLoggingIn,
    isRegistering,
    loginError,
    registerError,
    isAuthenticated,
  } = useAuth();

  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Reset form when switching modes
  useEffect(() => {
    reset();
  }, [isRegisterMode, reset]);

  const onSubmit = (data) => {
    if (isRegisterMode) {
      registerUser(data);
    } else {
      login(data);
    }
  };

  const currentError = isRegisterMode ? registerError : loginError;
  const isLoading = isRegisterMode ? isRegistering : isLoggingIn;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2c3e50",
            marginBottom: "2rem",
          }}
        >
          {isRegisterMode ? "Register" : "Login"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name field (only for register) */}
          {isRegisterMode && (
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", {
                  required: isRegisterMode ? "Name is required" : false,
                })}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: `1px solid ${errors.name ? "#e74c3c" : "#ddd"}`,
                  borderRadius: "4px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span
                  style={{
                    color: "#e74c3c",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem",
                    display: "block",
                  }}
                >
                  {errors.name.message}
                </span>
              )}
            </div>
          )}

          {/* Email field */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.email ? "#e74c3c" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span
                style={{
                  color: "#e74c3c",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  display: "block",
                }}
              >
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password field */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: `1px solid ${errors.password ? "#e74c3c" : "#ddd"}`,
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span
                style={{
                  color: "#e74c3c",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  display: "block",
                }}
              >
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Error message */}
          {currentError && (
            <div
              style={{
                backgroundColor: "#fadbd8",
                color: "#e74c3c",
                padding: "0.75rem",
                borderRadius: "4px",
                marginBottom: "1rem",
                border: "1px solid #e74c3c",
              }}
            >
              {currentError?.response?.data?.message ||
                currentError.message ||
                "An error occurred"}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: isLoading ? "#95a5a6" : "#3498db",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
            }}
          >
            {isLoading
              ? isRegisterMode
                ? "Registering..."
                : "Logging in..."
              : isRegisterMode
              ? "Register"
              : "Login"}
          </button>
        </form>

        {/* Toggle mode */}
        <div
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            color: "#7f8c8d",
          }}
        >
          {isRegisterMode ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegisterMode(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#3498db",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "1rem",
                }}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsRegisterMode(true)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#3498db",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "1rem",
                }}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
