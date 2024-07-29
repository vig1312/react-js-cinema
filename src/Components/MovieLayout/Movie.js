import { Link } from "react-router-dom";

import {datas} from "../../data/data";
import '../../assets/style/movies.css';

const DraftMovie = () => {
    const films = datas.map((item) => 
      
        <Link to={`/movies/${item.id}`} key={item.id}>{item.title}</Link>
      
    )
   
    return (
      <div className="container">
        {films}
      </div>
    )
}
export default DraftMovie;


