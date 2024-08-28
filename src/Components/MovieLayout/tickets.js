import { useSelector } from 'react-redux';
import { datas } from '../../Data/constants';
import { userSelector } from '../../store/selectors/userInformation';

const Tickets = (filmName) => {
  const user = useSelector(userSelector);

  const username = user.username;
  const { currMovie } = filmName;

  if (!localStorage.reservedTickets) {
    localStorage.setItem('reservedTickets', JSON.stringify({}));
  }

  if (!localStorage.allReservedTickets) {
    localStorage.setItem('allReservedTickets', JSON.stringify({}));
  }

  let initialState = JSON.parse(localStorage.getItem('reservedTickets'));
  let allReservedInitalState = JSON.parse(localStorage.getItem('allReservedTickets'));

  if (!initialState[username]) {
    initialState = {
      ...initialState,
      [username]: {}
    };

    datas.forEach((film) => {
      Object.defineProperty(initialState[username], `${film.title.split(' ').join('')}`, {
        value: [],
        writable: true,
        enumerable: true,
        configurable: true
      });
    });

    localStorage.setItem('reservedTickets', JSON.stringify(initialState));
  }

  if (!Object.keys(allReservedInitalState).length) {
    datas.forEach((film) => {
      Object.defineProperty(allReservedInitalState, `${film.title.split(' ').join('')}`, {
        value: [],
        writable: true,
        enumerable: true,
        configurable: true
      });
    });

    localStorage.setItem('allReservedTickets', JSON.stringify(allReservedInitalState));
  }

  function handleTicketsBuying(e, index) {
    const approve = window.confirm(`You want to buy ${index} ticket?`);

    if (approve && !allReservedInitalState[currMovie].includes(index)) {
      initialState[username][currMovie].push(index);
      allReservedInitalState[currMovie].push(index);

      e.target.style.backgroundColor = 'red';

      localStorage.setItem('reservedTickets', JSON.stringify(initialState));
      localStorage.setItem('allReservedTickets', JSON.stringify(allReservedInitalState));
    } else if (!approve) {
      alert('Canceled');
    } else {
      alert('Ticket is already bought');
    }
  }

  return (
    <div className="tickets-container">
      {Array.from({ length: 50 }).map((item, index) => (
        <button onClick={(e) => handleTicketsBuying(e, index + 1)}>{index + 1}</button>
      ))}
    </div>
  );
};

export default Tickets;
