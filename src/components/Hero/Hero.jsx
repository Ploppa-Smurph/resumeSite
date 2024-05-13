import {getImageURL} from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jeff</h1>
            <p className={styles.description}>With a CompTIA Secure Infrastructure Specialist certification stack and years of experience, I’m your go-to person for both security and full-stack development. 
            Whether you’re safeguarding networks or crafting elegant React and Node.js solutions, I’ve got you covered. Feel free to reach out – let’s build something amazing together!</p>
            <a href="mailto:jswalley@rocketmail.com" className={styles.contactBtn}>
                Contact Me</a>
        </div>
        <img src={getImageURL("hero/wwwBusyLogo_noBG.png")} alt="Hero Image of Logo" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};
