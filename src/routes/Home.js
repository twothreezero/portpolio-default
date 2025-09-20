import React from 'react';
import { Link } from 'react-router-dom';

import Ideas from './Ideas';

import './Home.css';

function Home() {
  return (
    <main className='home'>
      <section className='intro'>
        <div className='intro__text'>
          <p>세상엔 사랑이 필요해</p>
        </div>
        <Link to='/about' className='intro__btn'>
          <button className='btn'>
            Read more
            <span class='material-symbols-outlined'>
              arrow_right_alt
            </span>
          </button>
        </Link>
      </section>
      <section className=''>

      </section>
      {/* <Ideas /> */}
    </main>
  )
}

export default Home;