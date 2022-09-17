import React from "react";

const Footer = () => {
  return (
    <section
      style={{
        display: "flex",
        backgroundColor: "#1F2E35",
        margin: "0",
        flexWrap: "wrap",
        padding: "25px",
        borderTop:"1px solid #666666"
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "8px",
          width: "25%",
          alignItems: "center",
          justifyContent: "start",
          justifyItems: "center",
        }}
      >
        <img
          src="/assets/logo.svg"
          alt="logo"
          style={{
            gridRow: "1",
            gridColumn: "1",
          }}
        />
        <h2
          style={{
            gridRow: "1",
            margin: "auto",
          }}
        >
          Gear
        </h2>
        <img src="/assets/logo.svg" alt="logo" style={{ gridRow: "2" }} />
        <img src="/assets/logo.svg" alt="logo" style={{ gridRow: "2" }} />
        <img src="/assets/logo.svg" alt="logo" style={{ gridRow: "2" }} />
      </div>
      <div style={{ width: "25%" }}>
        <h3>Resource</h3>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div style={{ width: "25%" }}>
        <h3>Legal Stuff</h3>
        <ul>
          <li>Disclaimer</li>
          <li>Financing</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div style={{ width: "25%" }}>
        <h3>Office</h3>
        <ul>
          <li>gear@gmail.com</li>
          <li>Jln. Soekarno Hatta No 1A</li>
          <li>Jakarta, Indonesia</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
