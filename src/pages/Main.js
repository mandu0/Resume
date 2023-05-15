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
import page4 from "../jpg/page4.png";
import skill from "../jpg/skill.png";
import skill2 from "../jpg/skill2.png";

import { useRef, useEffect, useCallback } from "react";



function Main() {
    const textObserve = useCallback((node) => {
      if (node) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((slide) => {
            if (slide.isIntersecting) {
              console.log(slide);
              slide.target.style.opacity = 1;
              slide.target.style.transition = '1s';
            }
          });
        }, { threshold: 1 });
  
        observer.observe(node);
      }
    }, []);
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
                        <p>웹개발에 대해 접하면서 여러가지 궁금증이 생기고, <br />
                            그 물음표에 대하여 해결하는 매력에 빠져 개발하고 있습니다. <br />
                            빠르게 변화하는 웹개발 트렌드에 발 맞춰 따라가려 노력할 것 입니다. <br/>
                            앞으로도 끊임없이 성장하는 개발자가 되겠습니다.</p>
                    </div>
                </div>
            </section>
            <section>
                <div id="2"></div>
                <h1 className={styles.h1Container}>Projects</h1>
                <article>
                    <div>
                        <div className={styles.pageContainer}>
                            <a target="_blank" href="https://radiant-cascaron-4dde14.netlify.app/"><img className={styles.pageImg} src={page2}/></a>
                            <div ref={textObserve} className={styles.pageContent}>
                                <h2>2022 인천시장선거 후보 홈페이지</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    2022년 인천시장선거 기간 배포된 사이트입니다. <br />
                                    반응형 웹페이지 - Media Query 사용 <br />
                                    텍스트 효과 - jQuery 이용한 글씨 애니메이션 구현<br />
                                    페이지 배포 - 카페 24
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
                            <a target="_blank" href="https://calm-faloodeh-920061.netlify.app/"><img className={styles.pageImg} src={page1}/></a>                           
                             <div ref={textObserve} className={styles.pageContent}>
                                <h2>COVID_19 국내 발생현황</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    Open API - 공공데이터 포털을 활용 <br />
                                    async/await - API를 비동기 처리하여 병렬적으로 기능 수행 <br />
                                    바닐라 자바스크립트 - observe() : div 요소에 주시 기능, <br />
                                    setInterval : typing, 숫자 카운트 애니메이션 효과 <br />
                                    페이지 배포 - netlify 사용, git hub와 연동하여 자동으로 수정
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
                            <a target="_blank" href="https://notice-30248.web.app/"><img className={styles.pageImg} src={page4}/></a>                           
                             <div ref={textObserve} className={styles.pageContent}>
                                <h2>DB게시판</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    Firestore - 실시간 데이터 베이스 확인, 컬렉션 최적화 <br />
                                    데이터 베이스를 추가, 수정, 삭제 기능 구현 <br />
                                    배포 - Firebase hosting
                                    </div>
                                </div>
                                <div className={styles.skillContainer2}>
                                    <p className={styles.subContent2}>사용기술</p>
                                    <img className={styles.skill2} src={skill2} />
                                </div>
                            </div>    
                        </div>
                    </div>
                </article>    
                <article>
                    <div className={styles.wrapper}>
                        <div className={styles.pageContainer}>
                            <a target="_blanck" href="http://xn--939a1gs0ao4n6tm86qgodr19a.com/main/main.asp"><img className={styles.pageImg} src={page3}/></a>
                            <div ref={textObserve} className={styles.pageContent}>
                                <h2>국민건강진흥재단</h2>
                                <div className={styles.pageWrap}>
                                    <p className={styles.subContent}>내용</p>
                                    <div>
                                    실제 리뉴얼 한 사이트 입니다. <br />
                                    메인 이미지, 메인 글씨 수정 <br />
                                    메뉴바 - ul/ui 태그로 수정 <br />
                                    메인 로고 - 이미지 수정, h1 태그로 콘텐츠 분리, <br />
                                    span 태그로 내용 안 보이게 처리하여 웹 접근성에 준수
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