import React from 'react';
import { Link } from 'react-router-dom';

import './Resume.css';

function Resume() {

  return (
    <div className='resume'>
      <section className='main_section'>
        <div className='container'>
          <div className='main_box bottom-line'>
            <div className=''>
              <div className='main_box__profile'>
                <img src="/img/logo.png" alt='profile' />
              </div>
            </div>
            <div className='main_box__info'>
              <div className='mb-8'>
                <h1 className='h1'>230</h1>
              </div>
              <div className='mb-16'>
                <p className='paragraph'>
                  Frontend Developer, Designer
                </p>
              </div>
              <div className=''>
                <p className='paragraph'>
                  창의적인 사고와 디자인을 사랑하는 프론트엔드 개발자 이세영입니다.
                  새로운 아이디어가 떠오르면 이를 실제 구현하고 사용자와 소통하는 화면으로 만드는 과정에서 큰 즐거움을 느낍니다.
                  디자인과 기능 사이의 균형을 중요하게 생각하며, 단순한 시각적 요소를 넘어 의미 있는 사용자 경험을 제공하는 데 집중합니다.
                  끊임없이 배우고 실험하며, '다음엔 더 잘 만들 수 있다'는 믿음으로 매 프로젝트에 임하고 있습니다.
                  협업과 소통을 통해 더 나은 방향을 함께 고민할 수 있는 작업을 좋아하며, 앞으로도 상상력과 기술을 연결하는 멋진 경험을 만들어가고 싶습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 경력 */}
      <section className='sub_section'>
        <div className='container bottom-line'>
          <div className='list_label'>
            <p className='label'>Work Experience</p>
          </div>
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                <p className='paragraph'>
                  2022 - 2024
                </p>
              </div>
            </div>
            <div className='list_info col'>
              <h3 className='mb-16 h3'>Junior Developer</h3>
              <div className='list_item'>
                <div className='list_img_wrapper'>
                  <div className='list_img' style={{ backgroundImage: "url('/img/mixedcode.png')" }}></div>
                </div>
                <div className='list_text'>
                  <Link to='https://mixedcode.com/' className='h5 list_title'>
                    엠소프트웨어
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                  </Link>
                  <p className='mt-8 paragraph list_description'>
                    플랫폼사업본부 · 선임연구원· 웹개발
                  </p>
                  <p className='mb-8 paragraph'>
                    신규 플랫폼 개발
                    <br />
                    Node.js | Bootstrap | MySQL | AWS
                  </p>
                </div>
              </div>
              <div className='list_item'>
                <div className='list_img_wrapper'>
                  <div className='list_img' style={{ backgroundImage: "url('/img/beginmate.png')" }}></div>
                </div>
                <div className='list_text'>
                  <Link to='https://beginmate.com/' className='h5 list_title'>
                    비긴메이트
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                  </Link>
                  <p className='mt-8 paragraph list_description'>
                    플랫폼사업본부 · 주임연구원· 웹개발
                  </p>
                  <p className='mb-8 paragraph'>
                    기존 플랫폼 리뉴얼
                    <br />
                    Node.js | Bootstrap | MySQL | AWS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                <p className='paragraph'>
                  2017 - 2018
                </p>
              </div>
            </div>
            <div className='list_info'>
              <h3 className='mb-16 h3'>Fashion Designer Assistant</h3>
              <div className=''>
                <p className='mb-8 paragraph'>
                  LA 소재의 패션 컴퍼니에서 디자인 어시스턴트로서 디자인과 물류 관련된 업무를 진행.
                </p>
                <p className='mb-8 paragraph'>
                  Mono B inc. | 인턴, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* 프로젝트 */}
      <section className='sub_section'>
        <div className='container bottom-line'>
          <div className='list_label'>
            <p className='label'>Projects</p>
          </div>
          {/* IMDB */}
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                {/* <p className='paragraph'>
                  2022 - 2023
                </p> */}
              </div>
            </div>
            <div className='list_info flex'>
              <div className='list_img_wrapper'>
                <div className='list_img' style={{ backgroundImage: "url('/img/imdb.png')" }}></div>
              </div>
              <div className='list_text'>
                <Link to='https://vue3-movie-app-ttz.netlify.app/' target='_blink' className='h5 list_title'>
                  IMDB
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
                <p className='mt-8 paragraph list_description'>
                  Vue.js 기반 영화 검색 웹페이지
                  <br />
                  Vue.js | Scss | Webpack
                </p>
              </div>
            </div>
          </div>
          {/* 스타벅스 */}
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                {/* <p className='paragraph'>
                  2022 - 2023
                </p> */}
              </div>
            </div>
            <div className='list_info flex'>
              <div className='list_img_wrapper'>
                <div className='list_img' style={{ backgroundImage: "url('/img/starbucks.png')" }}></div>
              </div>
              <div className='list_text'>
                <Link to='https://starbuck-clone-ttz.netlify.app/' target='_blink' className='h5 list_title'>
                  Starbucks
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
                <p className='mt-8 paragraph list_description'>
                  스타벅스 클론 코딩
                  <br />
                  HTML | CSS | JavaScript
                </p>
              </div>
            </div>
          </div>
          {/* 코코아톡 */}
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                {/* <p className='paragraph'>
                  2022 - 2023
                </p> */}
              </div>
            </div>
            <div className='list_info flex'>
              <div className='list_img_wrapper'>
                <div className='list_img' style={{ backgroundImage: "url('/img/kokoatalk.png')" }}></div>
              </div>
              <div className='list_text'>
                <Link to='https://kokoatalk-clone-ttz.netlify.app/' target='_blink' className='h5 list_title'>
                  Kokoatalk
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
                <p className='mt-8 paragraph list_description'>
                  카카오톡 클론 코딩
                  <br />
                  HTML | CSS
                </p>
              </div>
            </div>
          </div>
          {/* 그림판 */}
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                {/* <p className='paragraph'>
                  2022 - 2023
                </p> */}
              </div>
            </div>
            <div className='list_info flex'>
              <div className='list_img_wrapper'>
                <div className='list_img' style={{ backgroundImage: "url('/img/paintboard.png')" }}></div>
              </div>
              <div className='list_text'>
                <Link to='https://paint-board-ttz.netlify.app/' target='_blink' className='h5 list_title'>
                  Paintboard
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
                <p className='mt-8 paragraph list_description'>
                  간단한 그림판
                  <br />
                  HTML | CSS | JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 교육 */}
      <section className='sub_section'>
        <div className='container bottom-line'>
          <div className='list_label'>
            <p className='label'>Education</p>
          </div>
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                <p className='paragraph'>
                  2021 - 2021
                </p>
              </div>
            </div>
            <div className='list_info'>
              <h5 className='mb-8 h5'>디지털 웹디자인/웹퍼블리셔</h5>
              <div className=''>
                <p className='mb-8 paragraph'>
                  이젠아카데미
                  <br />
                  수료, 한국
                </p>
              </div>
            </div>
          </div>
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                <p className='paragraph'>
                  2011 - 2017
                </p>
              </div>
            </div>
            <div className='list_info'>
              <h5 className='mb-8 h5'>패션디자인 및 브랜딩</h5>
              <div className=''>
                <p className='mb-8 paragraph'>
                  평택대학교
                  <br />
                  학사, 한국
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 연락처 */}
      <section className='sub_section'>
        <div className='container bottom-line'>
          <div className='list_label'>
            <p className='label'>Certifications</p>
          </div>
          <div className='list_box'>
            <div className=''>
              <div className='list_date'>
                <p className='paragraph'>
                  2021
                </p>
              </div>
            </div>
            <div className='list_info card'>
              <div className=''>
                <Link to='' className='h5 list_title'>
                  웹디자인기능사
                </Link>
                <p className='paragraph mt-8'>
                  최종합격 | 한국산업인력공단
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sub_section'>
        <div className='container'>
          <div className='list_label'>
            <p className='label'>Contacts</p>
          </div>
          <div className='contacts'>
            <div className='contacts_box'>
              <div></div>
              <div className='contacts_info'>
                <p className='paragraph'>
                  Github
                </p>
                <Link to='https://github.com/twothreezero' target='_blink' className='contacts_item'>
                  <span className='link'>twothreezero</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
              </div>
            </div>
            <div className='contacts_box'>
              <div></div>
              <div className='contacts_info'>
                <p className='paragraph'>
                  Instagram
                </p>
                <Link to='https://www.instagram.com/lsyx230/' target='_blink' className='contacts_item'>
                  <span className='link'>lsyx230</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
              </div>
            </div>
            <div className='contacts_box'>
              <div></div>
              <div className='contacts_info'>
                <p className='paragraph'>
                  Email
                </p>
                <Link to='mailto:realtwothreezero@gmail.com' className='contacts_item'>
                  <span className='link'>realtwothreezero@gmail.com</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.72386 9.72386 7.5 10 7.5H16C16.2761 7.5 16.5 7.72386 16.5 8V14C16.5 14.2761 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.2761 15.5 14V9.20711L8.35355 16.3536C8.15829 16.5488 7.84171 16.5488 7.64645 16.3536C7.45118 16.1583 7.45118 15.8417 7.64645 15.6464L14.7929 8.5H10C9.72386 8.5 9.5 8.27614 9.5 8Z" fill="var(--blk)"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Resume;