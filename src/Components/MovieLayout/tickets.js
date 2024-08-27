import { useSelector } from 'react-redux';
import { datas } from '../../Data/constants';
import { userSelector } from '../../store/selectors/userInformation';

const Tickets = (filmName) => {
  const user = useSelector(userSelector);

  const username = user.username;

  if (!localStorage.reservedTickets) {
    localStorage.setItem('reservedTickets', JSON.stringify({}));
  }

  let initialState = JSON.parse(localStorage.getItem('reservedTickets'));

  if (!initialState[user.username]) {
    initialState = {
      ...initialState,
      [username]: {}
    };

    datas.forEach((film) => {
      Object.defineProperty(initialState[user.username], `${film.title.split(' ').join('')}`, {
        value: [],
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
    localStorage.setItem('reservedTickets', JSON.stringify(initialState));
  }

  function handleTicketsBuying(index) {
    const approve = window.confirm(`You want to buy  ticket?`);

    if (approve) {
      initialState[user.username][filmName.currMovie].push(index + 1);
      localStorage.setItem('reservedTickets', JSON.stringify(initialState));
    }
  }

  return (
    <div className="tickets-container">
      {Array.from({ length: 50 }).map((item, index) => (
        <button onClick={() => handleTicketsBuying(index)}>{index + 1}</button>
      ))}
    </div>
  );
};

export default Tickets;
