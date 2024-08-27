import { useParams, Link } from 'react-router-dom';

import { datas } from '../../Data/constants';
import Tickets from '../../Components/MovieLayout/tickets';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/selectors/userInformation';

const CurrFilm = () => {
  const user = useSelector(userSelector)
  const { id } = useParams();
  const currentfillm = datas.find((item) => item.id === Number(id));
  const filmTitleAsKey = currentfillm.title.split(" ").join("")
  const currentFilmKeys = Object.entries(currentfillm);
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
      {user.isLoggedIn ? <Tickets currMovie={filmTitleAsKey} /> : <Link className='tickets-link-login' to={"/login"}>Log in for Booking Tickets</Link>}
    </section>
  );
};
export default CurrFilm;
