import { Link, useParams } from 'react-router-dom';

import TicketsBar from './tickets';
import { useSelector } from 'react-redux';
import { data } from '../../Data/constants';
import { userSelector } from '../../store/selectors/userInfoSelector';

const CurrFilm = () => {
  const { id } = useParams();

  const auth = useSelector(userSelector);
  
  const currentfillm = data.find((item) => item.id === Number(id));
  const currentFilmKeys = Object.entries(currentfillm);
  const filmNameAsKey = currentfillm.title.split(' ').join('');
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
      {auth.isLogged ? (
        <TicketsBar filmname={filmNameAsKey} />
      ) : (
        <Link to={'/login'}>do you want to buy a tickets?</Link>
      )}
    </section>
  );
};
export default CurrFilm;
