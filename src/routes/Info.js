import React from 'react';
import './Info.css'

function Info() {
  return (
    <section className="info-box">
      <div className="container">
        <hr />
        <div className="info-item">
          <div className="info-item__title" >HELLO!</div>
          <div className="info-item__text">
            창의적인 사고와 디자인을 사랑하는 프론트엔드 개발자 <b>twothreezero</b>입니다. 새로운 아이디어가 떠오르면 이를
            실제 구현하고 사용자와 소통하는 화면으로 만드는 과정에서 큰 즐거움을 느낍니다. 디자인과 기능 사이의 균형을 중요하게 생각하며, 단순한
            시각적 요소를 넘어 의미 있는 사용자 경험을 제공하는 데 집중합니다. 끊임없이 배우고 실험하며, '다음엔 더 잘 만들 수 있다'는 믿음으로 매
            프로젝트에 임하고 있습니다. 협업과 소통을 통해 더 나은 방향을 함께 고민할 수 있는 작업을 좋아하며, 앞으로도 상상력과 기술을 연결하는 멋진
            경험을 만들어가고 싶습니다.
          </div>
        </div>
        <hr />
        <div className="info-item">
          <div className="info-item__title">Work</div>
          <div className="info-item__text">
            <div className="text__title">Msoftware</div>
            <div className="text__sub">
              <p>2023.11 ~ 2024.06</p>
              <p></p>
              <p></p>
            </div>
            <div className="text__title">beginmate</div>
            <div className="text__sub">
              <p>2022.09 ~ 2023.10</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <hr />
        <div className="info-item">
          <div className="info-item__title">Contact</div>
          <div className="info-item__text">
            <div className="text__title">Email</div>
            <div className="text__sub">realtwothreezero@gmail.com</div>
            <div className="text__title">Gitbub</div>
            <a href="https://github.com/twothreezero" target="_blank" rel="noreferrer">
              <div className="text__sub">https://github.com/twothreezero</div>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Info;