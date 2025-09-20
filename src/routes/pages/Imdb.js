import React from 'react';
import Img from '../../img/imdb.png';

function Mixedcode() {
  return (
    <div className='item'>
      <a href="https://vue3-movie-app-ttz.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Img} alt="imdb" />
      </a>
      <div className="text-table">
        <p className="title">IMDB</p>
        <div className="content">
          <span>Vue.js | Scss </span>
        </div>
        <hr />
        <div className="category">2025 / Toy Projcet 4</div>
      </div>
    </div>
  )
}

export default Mixedcode;