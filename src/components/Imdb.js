import React from 'react';
import Img from '../img/imdb.png';
import useIntersectionObserver from './useIntersectionObserver';


function Mixedcode() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const itemClassName = `item ${isIntersecting ? 'show' : ''}`;

  return (
    <div ref={ref} className={itemClassName}>
      <a href="https://vue3-movie-app-ttz.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Img} alt="imdb" />
      </a>
      <div class="text-table">
        <p class="title">IMDB</p>
        <div class="content">
          <span>Vue.js | Scss </span>
        </div>
        <hr />
        <div class="category">2025 / Toy Projcet 4</div>
      </div>
    </div>
  )
}

export default Mixedcode;