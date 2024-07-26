import React from 'react';
import {topFilms} from "../../constants/constants";
import {Link} from "react-router-dom";

function FilmLists() {
    return (
        <section>
            <h1>Top Films</h1>
            <div className={"top-films-container"}>
                {topFilms.map((film, index) => (
                    <Link key={index} className={"films-boxes"} to={`/films/${film.id}`}>
                        <img src={film.poster} width={200} height={300}/>
                        {film.title}
                    </Link>
                    )
                )}
            </div>
        </section>
    );
}

export default FilmLists;