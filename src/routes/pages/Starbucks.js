import React from 'react';
import Img from '../../img/starbucks.png';

function Mixedcode() {
  return (
    <div className='item'>
      <a href="https://starbuck-clone-ttz.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Img} alt="starbucks" />
      </a>
      <div className="text-table">
        <p className="title">STARBUCKS</p>
        <div className="content">
          <span>HTML | CSS | JavaScript </span>
        </div>
        <hr />
        <div className="category">2022 / Toy Projcet 3</div>
      </div>
    </div>
  )
}

export default Mixedcode;