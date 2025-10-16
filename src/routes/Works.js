import React from 'react';

import Mixedcode from './pages/Mixedcode';
import Beginmate from './pages/Beginmate';
import Kokoatalk from './pages/Kokoatalk';
import Paintboard from './pages/Paintboard';
import Starbucks from './pages/Starbucks';
import Imdb from './pages/Imdb';

import './Works.css'

function Works() {
  return (
    <section className="project">
      <div className="container">
        <Mixedcode />
        <Beginmate />
        <Kokoatalk />
        <Paintboard />
        <Starbucks />
        <Imdb />
      </div>
    </section>
  )
}

export default Works;