import React from "react";
import styles from "../pages/Main.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "../pages/styles.css";
import { EffectCards } from "swiper";
import slid1 from "../jpg/slid1.png";
import slid2 from "../jpg/slid2.JPG";
import slid3 from "../jpg/slid3.jpg";
import slid4 from "../jpg/slid4.jpg";
import page1 from "../jpg/page1.jpg";
import page2 from "../jpg/page2.jpg";
import page3 from "../jpg/page3.png";
import skill from "../jpg/skill.png";



function Main() {
   
    return(
        <main className={styles.main}>
            <section>
                <div id="1" className={styles.introduce}>
                    <h1>About ME</h1>
                    <p>2000.08.28</p>
                </div>
                <div className={styles.introduceWrap}>
                    <div className={styles.SwiperContainer}>
                        <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper">
                        <SwiperSlide><img src={slid1} width="280px" /></SwiperSlide>
                        <SwiperSlide><img src={slid2} width="280px"  /></SwiperSlide>
                        <SwiperSlide><img src={slid3} width="280px" /></SwiperSlide>
                        <SwiperSlide><img src={slid4} width="280px" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={styles.IamContaiiner}>
                        <h2>저는, <br /> 프론트엔드 개발자 이민주입니다.</h2>
                        <p>웹개발에 대하여 접하면서 여러가지 궁금증이 생기고, <br />
                            그 물음표에 대하여 해결하는 매력에 빠져 개발하고 있습니다. <br />
                            빠르게 변화하는 웹개발 트렌드에 발 맞춰 따라가려 노력하고 있습니다. <br/>
                            앞으로도 끊임없이 성장하는 개발자가 되고싶습니다.</p>
                    </div>
                </div>
            </section>
            <section>
                <div id="2"></div>
                <h1 className={styles.h1Container}>Projects</h1>
                <article>
                    <div>
                        <div className={styles.pageContainer}>
                            <a><img className={styles.pageImg} src={page1}/></a>                            <div className={styles.pageContent}>
                                <h2>COVID_19 국내 발생현황</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    공공데이터포털의 Open API를 활용하여 <br />
                                    데이터를 추출한 후 자바스크립트의 비동기 처리를 <br />
                                    async/await 이용하여 프로미스를 생성함으로써  <br />
                                    병렬적으로 기능을 수행하여 코드를 작성하였습니다. <br />
                                    또한 바닐라 자바스크립트로 작성하여 <br />
                                    순수 나만의 코드를 만들어 보려고 노력한 프로젝트입니다.
                                    </div>
                                </div>
                                <div className={styles.skillContainer2}>
                                    <p className={styles.subContent2}>사용기술</p>
                                    <img className={styles.skill} src={skill} />
                                </div>
                            </div>    
                        </div>
                    </div>
                </article>    
                <article>
                    <div>
                        <div className={styles.pageContainer}>
                            <a href=""><img className={styles.pageImg} src={page2}/></a>
                            <div className={styles.pageContent}>
                                <h2>2022 인천시장선거 후보 홈페이지</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    반응형 웹페이지로 제작하기 위하여 css media Query로 <br />
                                    홈페이지를 구현하였습니다. 데스크탑과 다르게 모바일 <br />
                                    화면에서는 a링크들을 편하게 볼 수 있도록 하기 위하여 <br />
                                    화면 아래쪽에 고정 배치해두었습니다.
                                    </div>
                                </div>
                                <div className={styles.skillContainer2}>
                                    <p className={styles.subContent2}>사용기술</p>
                                    <img className={styles.skill} src={skill} />
                                </div>
                            </div>    
                        </div>
                    </div>
                </article>
                <article>
                    <div className={styles.wrapper}>
                        <div className={styles.pageContainer}>
                            <a target="_blanck" href="http://xn--939a1gs0ao4n6tm86qgodr19a.com/main/main.asp"><img className={styles.pageImg} src={page3}/></a>
                            <div className={styles.pageContent}>
                                <h2>국민건강진흥재단</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    기존 오래되었던 홈페이지 메인부분의 배경화면과 Nav바를 <br />
                                    리뉴얼하는 프로젝트였습니다. 메뉴 중에서 필요 없는 <br />
                                    부분을 수정하고 추가하는 작업이 있었으며 메인 로고 또한 <br />
                                    직접 디자인 작업을 하여 첨부하는 과정이 있었습니다. <br />
                                    오래된 홈페이지였기에 수정하기 어려웠던 부분도 많았지만 <br />
                                    그만큼 더 신중하게 코드 수정을 하였던 것 같습니다. <br />
                                    </div>
                                </div>
                                <div className={styles.skillContainer2}>
                                    <p className={styles.subContent2}>사용기술</p>
                                    <img className={styles.skill} src={skill} />
                                </div>
                            </div>    
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Main;