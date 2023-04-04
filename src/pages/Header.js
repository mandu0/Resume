import React from "react";
import mainImg from "../jpg/mainImg.jpg"
import pngwing12 from "../jpg/pngwing 12.png"

function Header() {
    return(
        <header>
            <nav>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </nav>
            <img src={mainImg} width="100%" />
            <div>
                <p>안녕하세요</p>
                <p>성장하는 꿈나무 이민주입니다</p>
                <img src={pngwing12} />
            </div>
        </header>
    )
}

export default Header;