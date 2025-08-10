import React from 'react';
import Img from '../../img/placeholder.png';
import useIntersectionObserver from '../../components/useIntersectionObserver';


function Mixedcode() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const itemClassName = `item ${isIntersecting ? 'show' : ''}`;

  return (
    <div ref={ref} className={itemClassName}>
      <a href="https://paint-board-ttz.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Img} alt="placeholder" />
      </a>
      <div className="text-table">
        <p className="title">Paint Board</p>
        <div className="content">
          <span>HTML | CSS | JS</span>
        </div>
        <hr />
        <div className="category">2023 / Toy Projcet 2</div>
      </div>
    </div>
  )
}

export default Mixedcode;