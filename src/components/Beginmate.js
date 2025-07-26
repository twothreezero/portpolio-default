import React from 'react';
import Img from '../img/beginmate.png';
import useIntersectionObserver from './useIntersectionObserver'; // 1. 훅 임포트

function Beginmate() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const itemClassName = `item ${isIntersecting ? 'show' : ''}`;

  return (
    <div ref={ref} className={itemClassName}>
      <a href="./html/beginmate.html">
        <img src={Img} alt="beginmate" />
      </a>
      <div className="text-table">
        <p className="title">BEGINMATE</p>
        <div className="content">
          <span>Node.js | Bootstrap | MySQL | AWS</span>
        </div>
        <hr />
        <div className="category">2022.09 – 2023.10 / Worked</div>
      </div>
    </div>
  );
}

export default Beginmate;