import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../Data/constants';

function FilmLists() {
  return (
    <section>
      <h1 className="top-heading">Top Films</h1>
      <div className="top-films-container">
        {data.map(({ id, cover, title }, index) => (
          <Link 
            to={`/movies/${id}`}
            key={index} 
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
