import React from "react";

const Subscribe = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#1F2E35",
        padding:"20px",
        margin:"0"
      }}
    >
      <h2 style={{ width: "100%" }}>Subscribe</h2>
      <p style={{ width: "100%", marginBottom: "10px" }}>
        Subscribe to get exclusive news & offer
      </p>

      <input type="email" style={{ borderRadius: "8px" }} />
      <button className="subscribe__button">Subscribe</button>
    </section>
  );
};

export default Subscribe;
