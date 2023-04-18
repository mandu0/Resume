import React from "react";
import styles from "../pages/Footer.module.css"
import email from "../jpg/email.png"
import gitgub from "../jpg/github.png"
import tel from "../jpg/tel.png"

function Footer() {
    return(
        <address className={styles.address}>
            <div id="3"></div>
            <h1 className={styles.h1Container}>Contact</h1>
            <ul className={styles.ulContainer}>
                <li className={styles.liContainer}>
                    <img className={styles.contactImg} src={email} />
                    <a href="mailto:dlaoswn12@naver.com">dlaoswn12@naver.com</a>
                </li>
                <li className={styles.liContainer}>
                    <img className={styles.contactImg}  src={gitgub} />
                    <a target="_blacnk" href="https://github.com/mandu0">https://github.com/mandu0</a>
                </li>
                <li className={styles.liContainer}>
                    <img className={styles.contactImg}  src={tel} />
                    <a href="tel:010-9434-0467">010-9434-0467</a>
                </li>
            </ul>
        </address>
    )
}

export default Footer;