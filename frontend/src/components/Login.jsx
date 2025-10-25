import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "radial-gradient(circle at top, #161b22, #0d1117)",
      fontFamily: "Poppins, sans-serif",
      color: "#f5f5f5",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
      width: "300px",
      textAlign: "center",
    },
    input: {
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #00bcd4",
      backgroundColor: "#0d1117",
      color: "#f5f5f5",
      outline: "none",
    },
    button: {
      padding: "10px",
      borderRadius: "6px",
      border: "2px solid #00bcd4",
      backgroundColor: "transparent",
      color: "#00bcd4",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  const handleHover = (e, hover) => {
    if (hover) {
      e.target.style.backgroundColor = "#00bcd4";
      e.target.style.color = "#0d1117";
      e.target.style.boxShadow = "0 0 10px #00bcd4";
    } else {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#00bcd4";
      e.target.style.boxShadow = "none";
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "10px", color: "#00bcd4" }}>Login</h2>
        <input
          style={styles.input}
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
