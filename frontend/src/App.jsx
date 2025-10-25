import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const navStyle = {
    display: "flex",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#0d1117",
    color: "#f5f5f5",
    fontFamily: "Poppins, sans-serif",
  };

  const linkStyle = {
    color: "#00bcd4",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const handleHover = (e, hover) => {
    e.target.style.color = hover ? "#4caf50" : "#00bcd4";
  };

  return (
    <div style={{ backgroundColor: "#0d1117", minHeight: "100vh" }}>
      <nav style={navStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Home
        </Link>
        <Link
          to="/register"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Register
        </Link>
        <Link
          to="/login"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Login
        </Link>
        <Link
          to="/dashboard"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Dashboard
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
