import React from 'react';
import Img from '../img/kokoatalk.png';
import useIntersectionObserver from './useIntersectionObserver';


function Mixedcode() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const itemClassName = `item ${isIntersecting ? 'show' : ''}`;

  return (
    <div ref={ref} className={itemClassName}>
      <a href="https://kokoatalk-clone-ttz.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Img} alt="imdb" />
      </a>
      <div class="text-table">
        <p class="title">KokoaTalk</p>
        <div class="content">
          <span>HTML | CSS </span>
        </div>
        <hr />
        <div class="category">2021 / Toy Projcet 1</div>
      </div>
    </div>
  )
}

export default Mixedcode;