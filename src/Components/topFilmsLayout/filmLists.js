import React from 'react';
import { Link } from 'react-router-dom';

import { topFilms } from '../../Data/constants';


function FilmLists() {
    return (
        <section>
          <h1 className="top-heading">Top Films</h1>
          <div className="top-films-container">
            {topFilms.map(({ id, poster, title }, index) => (
              <Link
                key={index}
                to={`/films/${id}`}
                className="films-boxes"
              >
                <img src={poster} width={200} height={300}/>
                {title}
              </Link>
              ))}
          </div>
        </section>
    );
}

export default FilmLists;