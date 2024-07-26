import React from "react";
import { Link } from "react-router-dom";
import {datas} from "../../data/data";
import '../../assets/style/movies.css'
import DraftMovie from "../../components/MovieLayout/Movie";


const MoviesComp = () => {
    return (
      <>
        <DraftMovie/>
      </>

    )
}
export default MoviesComp;

