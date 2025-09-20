import React from 'react';
import Img from '../../img/beginmate.png';

function Beginmate() {
  return (
    <div className='item'>
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