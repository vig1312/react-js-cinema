import React from 'react';
import { Link } from 'react-router-dom';

import { datas } from '../../Data/constants';

function FilmLists() {
  return (
    <section>
      <h1 className="top-heading">Top Films</h1>
      <div className="top-films-container">
        {datas.map(({ id, cover, title }, index) => (
          <Link 
            key={index} 
            to={`/movies/${id}`}
            className="films-boxes">
            <img src={cover} width={200} height={300} />
            {title}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FilmLists;
