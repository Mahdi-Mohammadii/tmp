import React from "react";

const Testimonial = () => {
  return (
    <>
      <section style={{ backgroundColor: "#F9F9F9" }}>
        <h2>Testimonial</h2>
        <p>Designer and developer using the best tools</p>
        <article
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "25px 0",
          }}
        >
          <div
            style={{
              width: "360px",
              border: "1px solid #DEDEDE",
              borderRadius: "8px",
            }}
          >
            <img
              src="/assets/logo.svg"
              alt="brand"
              style={{ display: "block", margin: "0 auto" }}
            />
            <p>
              Search the world's information, including webpages, images,videos
              and more. Google has many special features to help you find
              exactly what you're looking
            </p>
          </div>
          <div
            style={{
              width: "360px",
              border: "1px solid #DEDEDE",
              borderRadius: "8px",
            }}
          >
            <img
              src="/assets/logo.svg"
              alt="brand"
              style={{ display: "block", margin: "0 auto" }}
            />
            <p>
              Search the world's information, including webpages, images,videos
              and more. Google has many special features to help you find
              exactly what you're looking
            </p>
          </div>
          <div
            style={{
              width: "360px",
              border: "1px solid #DEDEDE",
              borderRadius: "8px",
            }}
          >
            <img
              src="/assets/logo.svg"
              alt="brand"
              style={{ display: "block", margin: "0 auto" }}
            />
            <p>
              Search the world's information, including webpages, images,videos
              and more. Google has many special features to help you find
              exactly what you're looking
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Testimonial;
