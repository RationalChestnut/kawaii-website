import React from "react";
import styles from "./Gallery.module.css";
import snow from "../assets/anime/snow.png";
import brownhair from "../assets/anime/brownhair.png";
import vampire from "../assets/anime/vampire.png";
import bikini from "../assets/anime/bikini.png";
import angel from "../assets/anime/angel.png";
import blonde from "../assets/anime/blonde.png";
import boxer from "../assets/anime/boxer.png";
import sword from "../assets/anime/sword.png";
import falling from "../assets/anime/falling.png";
import hunter from "../assets/anime/hunter.png";
import river from "../assets/anime/river.png";
import swim from "../assets/anime/swim.png";

export const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.header}>Anime isn't just a hobby. It's an art.</h1>
      <div className={styles.gallery}>
        <img
          src={bikini}
          className={styles.image}
          alt="Blue haired girl in bikini"
        />
        <img
          src={snow}
          className={styles.image}
          alt="Brown haired girl in snow"
        />
        <img src={falling} className={styles.image} alt="Girl falling" />
        <img src={vampire} className={styles.image} alt="Vampire" />
        <img
          src={brownhair}
          className={styles.image}
          alt="Brown haired girl in fall"
        />
        <img src={angel} className={styles.image} alt="Angel" />
        <img src={blonde} className={styles.image} alt="Blonde boy" />
        <img src={boxer} className={styles.image} alt="Boxer" />
        <img src={sword} className={styles.image} alt="Girl holding sword" />

        <img src={hunter} className={styles.image} alt="Girl in arctic" />
        <img src={river} className={styles.image} alt="Girl in river" />
        <img src={swim} className={styles.image} alt="Girl in swimsuit" />
      </div>
    </div>
  );
};
