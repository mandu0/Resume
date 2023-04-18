import React, {useRef} from "react";
import mainImg from "../jpg/mainImg.jpg"
import TabletMainImg from "../jpg/TabletMainImg.jpg"
import pngwing12 from "../jpg/pngwing 12.png"
import styles from "../pages/Header.module.css"
import { useMediaQuery } from "react-responsive"; 
import { Link } from "react-scroll"

function Header() {
    const Pc = useMediaQuery({
        query : "(min-width:1024px)"
      });
    const Tablet = useMediaQuery({
        query : "(min-width:768px) and (max-width:1023px)"
    });
    const Mobile = useMediaQuery({
        query : "(max-width:767px)"
    });
    return(
        <header className={styles.header}>
            <nav className={styles.navBar}>
            <Link to="1" spy={true} smooth={true}><li>About</li></Link>
            <Link to="2" spy={true} smooth={true}><li>Project</li></Link>
            <Link to="3" spy={true} smooth={true}><li>Contact</li></Link>
            </nav>
            <div className={styles.introduce}>
                <p>안녕하세요</p>
                <p>성장하는 꿈나무 이민주입니다</p>
                <img src={pngwing12} />
            </div>
            {Pc &&
            <div>
            <img src={mainImg} width="100%" />
            </div>
            }
            {Tablet && <img src={mainImg} width="100%" /> }
            {Mobile && <img src={TabletMainImg} width="100%" /> }
        </header>
    )
}




export default Header;