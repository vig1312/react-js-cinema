import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { datas } from '../constants';
import Tickets from '../../Components/MovieLayout/tickets';
import { userSelector } from '../../store/selectors/userInfoSelector';

const CurrFilm = () => {
  const { id } = useParams();
  const user = useSelector(userSelector)

  const currentfillm = datas.find((item) => item.id === Number(id));
  const currentFilmKeys = Object.entries(currentfillm);
  const filmTitleAsKey = currentfillm.title.split(" ").join("")
  
  const table = (
    <table className="table">
      {currentFilmKeys.slice(3).map((item, index) => {
        return (
          <tr key={index}>
            <th className="align-right">{item[0]} :</th>
            <td>{item[1]}</td>
          </tr>
        );
      })}
    </table>
  );

  return (
    <section>
      <div className="film-info">
        <img className="curr-img" src={currentfillm.cover} />
        {table}
      </div>
      <iframe width="560" height="315" src={currentfillm.trailer}></iframe>
      {user.isLogged ? <Tickets currMovie={filmTitleAsKey} /> : <Link className='tickets-link-login' to={"/login"}>Log in for Booking Tickets</Link>}
      
    </section>
  );
};
export default CurrFilm;
