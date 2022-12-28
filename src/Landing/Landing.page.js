import React from "react";

import styles from "./Landing.module.css";
import appStore from "../assets/svgs/appstore.svg";
import googlePlay from "../assets/svgs/googleplay.svg";
import profile from "../assets/profile.png";

export const Landing = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <div className={styles.content}>
            <h1 className={styles.header}>Kawaii</h1>
            <h2 className={styles.subHeader}>
              Generate high quality anime art images
            </h2>
            <div className={styles.downloadImages}>
              <a href="https://apps.apple.com/us/app/kawaii-ai-image-generator/id6444872562">
                <img
                  src={appStore}
                  alt="Download on app store"
                  className={styles.download}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.brianmason101.waifu.maker">
                <img
                  src={googlePlay}
                  alt="Download on app store"
                  className={styles.download}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={profile} alt="App home page" className={styles.phone} />
        </div>
      </div>
    </div>
  );
};
