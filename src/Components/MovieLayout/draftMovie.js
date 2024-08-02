import { Link } from 'react-router-dom';

import { datas } from '../../Data/constants';
import '../../Assets/style/movies.css';

const DraftMovie = () => {
  const films = datas.map(({ id, title }) => 
    <Link to={`/movies/${id}`} key={id}>{title}</Link>
  )
  
  return (
    <section>
      <div className='container'>
        {films}
      </div>
    </section>
  )
}
export default DraftMovie;


