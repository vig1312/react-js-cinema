import { useSelector } from 'react-redux';

import { data } from '../../Data/constants';
import { userSelector } from '../../store/selectors/userInfoSelector';

const TicketsBar = (filmName) => {
  const user = useSelector(userSelector);

  const ticketOwner = user.username;

  if (!localStorage.reservedTickets) {
    localStorage.setItem('reservedTickets', JSON.stringify({}));
  }

  let initialState = JSON.parse(localStorage.getItem('reservedTickets'));

  if (!initialState[ticketOwner]) {
    initialState = {
      ...initialState,
      [ticketOwner]: {}
    };

    data.forEach((item) => {
      Object.defineProperty(initialState[ticketOwner], item.title.split(' ').join(''), {
        value: [],
        configurable: true,
        enumerable: true,
        writable: true
      });
    });
    localStorage.setItem('reservedTickets', JSON.stringify(initialState));
  }
  
  function handleTicketsBuying(index) {
    const approve = window.confirm(`Do you want to buy a ticket?`);

    if (approve) {
      initialState[ticketOwner][filmName.filmname].push(index + 1);
      localStorage.setItem('reservedTickets', JSON.stringify(initialState));
    }
  }
  
  return (
    <div className="tickets-container">
      {Array.from({ length: 50 }).map((item, index) =>(
        <button onClick={() => handleTicketsBuying(index)}>{index + 1}</button>
      ))}
    </div>
  );
}

export default TicketsBar;
