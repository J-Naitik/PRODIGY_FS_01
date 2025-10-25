import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // Optional: you can show a brief message before redirect
  if (!token) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle at top, #161b22, #0d1117)",
          color: "#f5f5f5",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        <p>Unauthorized! Redirecting to Login...</p>
      </div>
    );
  }

  return children;
}
