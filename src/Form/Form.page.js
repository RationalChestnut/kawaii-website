import React from "react";
import styles from "./Form.module.css";
export const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Questions/Feedback?</h1>
      <p className={styles.formDescription}>
        Fill out this form and we'll get back to you!
      </p>
      <form
        className={styles.form}
        action="https://getform.io/f/2df2a484-cf48-46f7-a92e-4c889048411a"
        method="POST"
      >
        {/* Create a contact form: */}
        <p className={styles.formLabel} htmlFor="name">
          Name
        </p>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <p className={styles.formLabel} htmlFor="email">
          Email
        </p>
        <input
          className={styles.formInput}
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
        />
        <p className={styles.formLabel} htmlFor="message">
          Message
        </p>
        <textarea
          className={styles.formInput}
          name="message"
          id="message"
          placeholder="Your message"
        />
        <button className={styles.formButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
