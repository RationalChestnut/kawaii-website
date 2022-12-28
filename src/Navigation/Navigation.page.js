import React from "react";
import styles from "./Navigation.module.css";
import icon from "../assets/icon.png";

export const Navigation = () => {
  return (
    <div
      className={`animate__animated animate__fadeInDown ${styles.navigationContainer}`}
    >
      <div className={styles.logo}>
        <img src={icon} alt="logo" className={styles.logoImage} />
        <h1 className={styles.brandName}>Kawaii</h1>
      </div>
      <div className={styles.navigationLinks}>
        <a href="#landing" className={styles.link}>
          Home
        </a>
        <a href="#gallery" className={styles.link}>
          Gallery
        </a>
        <a href="#contact-us" className={styles.link}>
          Contact Us
        </a>
      </div>
    </div>
  );
};
