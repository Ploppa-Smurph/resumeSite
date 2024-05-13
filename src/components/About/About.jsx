import styles from "./About.module.css";
import { getImageURL } from '../../utils';


export const About = () => {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>Information</h2>
    <div className={styles.content}>
        <img 
            src={getImageURL("about/jsw_about.png")} 
            alt="Jeff Walley"
            className={styles.aboutImg}
        />
        <ul className={styles.aboutList}>
            <li className={styles.aboutItem}><img src={getImageURL("about/cursorIcon_blue.png")} alt="Cursor Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>As a frontend developer, I’m the artist behind those sleek web interfaces you love to click. From pixel-perfect layouts to interactive animations, 
                        I blend code and creativity to make the web a delightful place. Feel free to explore my work – it’s a canvas of colors, grids, and user-friendly magic!
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageURL("about/computerIcon_blue.png")} alt="Server Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I’ve crafted lightning-fast, turbo-charged web apps that pirouette through cyberspace like caffeinated squirrels. 
                        Efficiency? Oh, you bet – my code sprints faster than a startled cheetah. <img src={getImageURL("about/cheetah_run.ico")} alt="cheetah running" className={styles.aboutCheetah}/></p>
                </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageURL("about/monitorIcon_blue.png")} alt="Monitor Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Networking and Cybersecurity</h3>
                    <p>Certified with the CompTIA Secure Infrastructure Specialist stack, I’m on a mission to fortify the digital realm. From firewalls to encrypted tunnels, I weave safety nets for applications. 
                        Let’s chat – together, we’ll build a safer cyberspace! 
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
};
