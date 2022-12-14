import React from "react";

const Popular = () => {
  return (
    <>
      <section>
        <h2>Most Popular Tools</h2>
        <p>Most popular tools for designer and developer</p>
        <article className="popular-tools">
          <div className="popular-tools__card">
            <div className="popular-tools__card__image-card">
              <img src="/assets/Group_1498.svg" alt="InVision" />
            </div>
            <div className="popular-tools__card__description">
              <div className="popular-tools__card__description__title">
                <h4>InVision</h4>
                <h5>FREE</h5>
              </div>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="popular-tools__card__description__tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </div>
          <div className="popular-tools__card">
            <div className="popular-tools__card__image-card">
              <img src="/assets/Group_1498.svg" alt="InVision" />
            </div>
            <div className="popular-tools__card__description">
              <div className="popular-tools__card__description__title">
                <h4>InVision</h4>
                <h5>FREE</h5>
              </div>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="popular-tools__card__description__tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </div>
          <div className="popular-tools__card">
            <div className="popular-tools__card__image-card">
              <img src="/assets/Group_1498.svg" alt="InVision" />
            </div>
            <div className="popular-tools__card__description">
              <div className="popular-tools__card__description__title">
                <h4>InVision</h4>
                <h5>PREMIUM</h5>
              </div>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="popular-tools__card__description__tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </div>
        </article>
        <button className="section__button">See All</button>
      </section>
    </>
  );
};

export default Popular;
