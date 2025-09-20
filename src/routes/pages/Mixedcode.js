import React from 'react';
import Img from '../../img/mixedcode.png';

function Mixedcode() {
  return (
    <div className='item'>
      <a href="/">
        <img src={Img} alt="mixedcode" />
      </a>
      <div className="text-table">
        <p className="title">MIXEDCODE</p>
        <div className="content">
          <span>Node.js | Bootstrap | MySQL | AWS </span>
        </div>
        <hr />
        <div className="category">2023.11 – 2024.06 / Worked</div>
      </div>
    </div>
  )
}

export default Mixedcode;