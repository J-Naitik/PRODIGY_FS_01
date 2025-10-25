import React from "react";

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const styles = {
    container: {
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "radial-gradient(circle at top, #161b22, #0d1117)",
      color: "#f5f5f5",
      fontFamily: "Poppins, sans-serif",
      padding: "20px",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "15px",
      color: "#00bcd4",
      textShadow: "0 0 10px rgba(0, 188, 212, 0.6)",
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#c9d1d9",
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "transparent",
      border: "2px solid #00bcd4",
      color: "#00bcd4",
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  const handleHover = (e, hover) => {
    if (hover) {
      e.target.style.backgroundColor = "#00bcd4";
      e.target.style.color = "#0d1117";
      e.target.style.boxShadow = "0 0 15px #00bcd4";
    } else {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#00bcd4";
      e.target.style.boxShadow = "none";
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <p style={styles.paragraph}>You are successfully logged in 🎉</p>
      <button
        style={styles.button}
        onClick={handleLogout}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Logout
      </button>
    </div>
  );
}
