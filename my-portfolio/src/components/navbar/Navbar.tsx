import Linkedin from '../../Icons/Linkedin.svg';
import Gmail from '../../Icons/Gmail.svg';
import Github from '../../Icons/Github.svg';
import Itch from '../../Icons/Itch.svg';
import React from "react";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
    <nav className={styles.Navbar}>
        <div className = {styles.Social}>
            <a title='Linkedin' href='https://www.linkedin.com/in/miguel-timote/' target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt='Linkedin'></img></a>
            <a title='Correo' href='mailto:timotemiguelangel@gmail.com'><img src={Gmail} alt='Gmail'></img></a>
            <a title='Github' href='https://github.com/MikelTimonel' target="_blank" rel="noopener noreferrer"><img src={Github} alt='Github'></img></a>
            <a title='Itch.io' href='https://hombrerex.itch.io/' target="_blank" rel="noopener noreferrer"><img src={Itch} alt='Itch'></img></a>
        </div>
        <h1 data-texto-alternativo="Texto Alternativo">Miguel Timoté</h1>
        <div className={styles.ResumeAbout}>
            <div className={styles.Resume}>
            <p>Resume</p>
            </div>
            <p>About me</p>
        </div>
    </nav>
    );
}
export default Navbar