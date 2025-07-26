import React from 'react';
import Mixedcode from '../components/Mixedcode';
import Beginmate from '../components/Beginmate';
import Kokoatalk from '../components/Kokoatalk';
import Paintboard from '../components/Paintboard';
import Starbucks from '../components/Starbucks';
import Imdb from '../components/Imdb';

import './Project.css'

function Project() {
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

export default Project;