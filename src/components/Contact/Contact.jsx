// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Contact.module.css";
import {getImageURL} from "../../utils.js";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Initiate Contact!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL("contact/email.png")} alt="Email icon" />
                <a className={styles.linkText} href="mailto:jswalley@rocketmail.com">jswalley@rocketmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/linkedin.png")} alt="Linkedin icon" />
                <a className={styles.linkText} href="https://www.linkedin.com/in/j-s-walley/">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/github.png")} alt="Github icon" />
                <a className={styles.linkText} href="https://github.com/Ploppa-Smurph">Github</a>
            </li>
        </ul>
    </footer>
  )
};
