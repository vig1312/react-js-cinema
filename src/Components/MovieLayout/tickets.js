import { useSelector, useDispatch } from 'react-redux';
import { datas } from '../../Data/constants';
import { userSelector } from '../../store/selectors/userInfoSelector';
import { ticketsData } from '../../store/actions/profileSlice';
import { useEffect } from 'react';

const Tickets = (filmName) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    allReservedInitalState[filmName.currMovie].map(item => {
      if(initialState[username][filmName.currMovie].includes(item)) {
        document.getElementById(`${item - 1}`).style.backgroundColor = "red"
      } else {
        document.getElementById(`${item - 1}`).style.backgroundColor = "grey"
      }
    })
  },[])

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

      dispatch(
        ticketsData({
          tickets: initialState[username]
        })
      );

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
        <button
         id={index}
         onClick={(e) => handleTicketsBuying(e, index + 1)}
         >{index + 1}</button>
      ))}
      <div className='your-tickets'>
        <div className='your-span'>

        </div>
         - My bought tickets
      </div>

      <div className='others-tickets'>
        <div className='others-span'>

        </div>
         - Others bought tickets
      </div>

      <div className='available-tickets'>
        <div className='available-span'>

        </div>
         - Available tickets
      </div>
    </div>
  );
};

export default Tickets;
