import React from "react";
import styles from "./InfoSection.module.scss";
const InfoSection = () => {
    return (
        <div className={styles.InfoSection}>
            <div className={styles.Information}>
                <div className={styles.Greet}>
                    Hey You! Nice to meet you.
                </div>
                <p className={styles.Description}>I’m Miguel Ángel Timoté Moya, a person passionate about the bright tomorrow waiting to be 
                    created by our hands. Unfortunately I can't describe myself in one role and make this shorter, 
                    so I have divided my portfolio in three.</p>
                <div className={styles.Roles}>
                    <p>GAME DEVELOPER</p>
                    <p>FRONT-END DEV</p>
                    <p>UX/UI DESIGNER</p>
                </div>
            </div>
            
        </div>
    );
}
export default InfoSection