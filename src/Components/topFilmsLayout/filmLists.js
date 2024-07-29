// Libs
    import React from 'react';
    import { Link } from 'react-router-dom';

// Datas
    import {topFilms} from '../../constants/constants';


function FilmLists() {

    return (
        <section>

            <h1 className={"top-heading"}>Top Films</h1>
            <div className={"top-films-container"}>

                {topFilms.map((film, index) => (

                    <Link
                        key={index}
                        className={"films-boxes"}
                        to={`/films/${film.id}`}
                    >
                        <img src={film.poster} width={200} height={300}/>
                        {film.title}

                    </Link>

                )
               )
              }

            </div>
        </section>
    );
}

export default FilmLists;