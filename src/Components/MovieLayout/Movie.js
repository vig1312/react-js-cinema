import { Link } from 'react-router-dom';
import { datas } from '../../data/constants';
import '../../assets/style/movies.css';

const DraftMovie = () => {
    const films = datas.map(({id, title}) => 
      <div>
        <Link to={`/movies/${id}`} key={id}>{title}</Link>
       
      </div>
    )
   
    return (
      <div className="container">
        {films}
      </div>
    )
}
export default DraftMovie;


