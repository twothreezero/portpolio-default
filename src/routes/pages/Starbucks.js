import React from 'react';
import Img from '../../img/starbucks.png';
import useIntersectionObserver from '../../components/useIntersectionObserver';


function Mixedcode() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const itemClassName = `item ${isIntersecting ? 'show' : ''}`;

  return (
    <div ref={ref} className={itemClassName}>
      <a href="https://starbuck-clone-ttz.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Img} alt="starbucks" />
      </a>
      <div class="text-table">
        <p class="title">STARBUCKS</p>
        <div class="content">
          <span>HTML | CSS | JavaScript </span>
        </div>
        <hr />
        <div class="category">2022 / Toy Projcet 3</div>
      </div>
    </div>
  )
}

export default Mixedcode;