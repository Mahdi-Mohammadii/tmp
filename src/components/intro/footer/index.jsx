import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <article className="footer__container">
        <div className="footer__container__social">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="footer__container__social__logo"
          />
          <h2 className="footer__container__social__title">Gear</h2>
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="footer__container__social__image"
          />
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="footer__container__social__image"
          />
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="footer__container__social__image"
          />
        </div>
        <div className="footer__container__links resource">
          <h3>Resource</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer__container__links">
          <h3>Legal Stuff</h3>
          <ul>
            <li>Disclaimer</li>
            <li>Financing</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer__container__links">
          <h3>Office</h3>
          <ul>
            <li>gear@gmail.com</li>
            <li>Jln.Soekarno Hatta No 1A</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </article>
      <article className="footer__copyRight">
        <h5 className="footer__copy-right__txt">Made With Love By Gear All Right Reserved </h5>
      </article>
    </section>
  );
};

export default Footer;
