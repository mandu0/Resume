import React from "react";
import styles from "../pages/Main.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "../pages/styles.css";
import { EffectCards } from "swiper";
import slid1 from "../jpg/slid1.jpeg"



function Main() {
   
    return(
        <main className={styles.main}>
            <section>
                <div className={`${styles.introduce} ${styles.h1Container}`}>
                    <h1>About ME</h1>
                    <p>2000.08.28</p>
                </div>
                <div>
                <div className={styles.SwiperContainer}>
               <Swiper
               effect={"cards"}
               grabCursor={true}
               modules={[EffectCards]}
               className="mySwiper">
               <SwiperSlide><img src={slid1} /></SwiperSlide>
               <SwiperSlide><img src={slid1} /></SwiperSlide>
               <SwiperSlide><img src={slid1} /></SwiperSlide>
               <SwiperSlide><img src={slid1} /></SwiperSlide>
               </Swiper>
               </div>
                    <div>
                        <h2>저는, 프론트엔드 개발자 이민주입니다.</h2>
                        <p>웹개발에 대하여 접하면서 여러가지 궁금증이 생기고, 
                            그 물음표에 대하여 해결하는 매력에 빠져 개발하고 있습니다.
                            빠르게 변화하는 웹개발 트렌드에 발 맞춰 따라가려 노력하고 있습니다.
                            앞으로도 끊임없이 성장하는 개발자가 되고싶습니다.</p>
                    </div>
                </div>
            </section>
            <section>
                <h1 className={styles.h1Container}>Projects</h1>
                <article>
                    <div>
                        <img />
                        <div>
                            <h2>COVID_19 국내 발생현황</h2>
                            <p>내용</p>
                            <div>
                            공공데이터포털의 Open API를 활용하여 데이터를
                            추출한 후 자바스크립트의 비동기 처리를 async/await 이용하여 
                            프로미스를 생성함으로써 병렬적으로 기능을 수행하여 코드를 
                            작성하였습니다. 또한 바닐라 자바스크립트로 작성하여 순수
                            나만의 코드를 만들어 보려고 노력한 프로젝트입니다.
                            </div>
                            <div>
                                <p>사용기술</p>
                                <img />
                            </div>
                        </div>
                    </div>
                </article>    
                <article>
                    <div>
                        <img />
                        <div>
                            <h2>2022 인천시장선거 후보 홈페이지</h2>
                            <p>내용</p>
                            <div>
                            반응형 웹페이지로 제작하기 위하여 css media Query로
                            홈페이지를 구현하였습니다. 데스크탑과 다르게 모바일
                            화면에서는 a링크들을 편하게 볼 수 있도록 하기 위하여
                            화면 아래쪽에 고정 배치해두었습니다. 또한 웹접근성에 준수하여
                            모든 사람들이 동등하게 접근하고 이용할 수 있도록 html을 작성하였습니다.
                            </div>
                            <div>
                                <p>사용기술</p>
                                <img />
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <img />
                        <div>
                            <h2>TODO-LIST</h2>
                            <p>내용</p>
                            <div>
                            날씨와 위치 API를 이용하여 나의 위치에 따른 날씨의
                            변화를 실시간으로 확인 할 수 있습니다.
                            list들은 localStorage에 setItem/getItem으로 저장하고 가져오는
                            방식으로 웹페이지에 세션이 종료되어도
                            데이터가 저장될 수 있도록 코드를 작성하였습니다.
                            </div>
                            <div>
                                <p>사용기술</p>
                                <img />
                            </div>
                        </div>
                    </div>
                </article>        
            </section>
        </main>
    )
}

export default Main;