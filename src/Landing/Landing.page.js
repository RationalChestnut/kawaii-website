import React from "react";
import styles from "./Landing.module.css";
import landing from "../assets/landing.png";
export const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingLeft}>
        <img
          src={landing}
          alt="Cute anime girl"
          className={styles.landingImage}
        />
      </div>
      <div className={styles.landingRight}>
        <h1 className={styles.landingTitle}>Kawaii</h1>
        <p className={styles.landingDescription}>
          Generate high quality anime images with AI.
        </p>
      </div>
    </div>
  );
};
