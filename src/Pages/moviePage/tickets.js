import { useDispatch, useSelector } from 'react-redux';

import { data } from '../../Data/constants';
import { userSelector } from '../../store/selectors/userInfoSelector';
import { ticketsData } from '../../store/actions/profileSlice';
import { useEffect } from 'react';

const TicketsBar = (filmName) => {
  
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => { 
    allReservedInitalState[filmName.filmname].map(item => { 
      if(initialState[ticketOwner][filmName.filmname].includes(item)) { 
        document.getElementById(`${item - 1}`).style.backgroundColor = "red" 
      } else { 
        document.getElementById(`${item - 1}`).style.backgroundColor = "grey" 
      } 
    }) 
  },[]) 


  const ticketOwner = user.username;

  if (!localStorage.reservedTickets) {
    localStorage.setItem('reservedTickets', JSON.stringify({}));
  }
  if (!localStorage.allReservedTickets) { 
    localStorage.setItem('allReservedTickets', JSON.stringify({})); 
  } 

  let initialState = JSON.parse(localStorage.getItem('reservedTickets'));
  let allReservedInitalState = JSON.parse(localStorage.getItem('allReservedTickets')); 

  if (!initialState[ticketOwner]) {
    initialState = {
      ...initialState,
      [ticketOwner]: {}
    };

    data.forEach((item) => {
      Object.defineProperty(initialState[ticketOwner], item.title.split(' ').join(''), {
        value: [],
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
    localStorage.setItem('reservedTickets', JSON.stringify(initialState));
  }

  if (!Object.keys(allReservedInitalState).length) { 
    data.forEach((film) => { 
      Object.defineProperty(allReservedInitalState, film.title.split(' ').join(''), { 
        value: [], 
        writable: true, 
        enumerable: true, 
        configurable: true 
      }); 
    }); 
    localStorage.setItem('allReservedTickets', JSON.stringify(allReservedInitalState)); 
  } 
  
  function handleTicketsBuying(e,index) {
    const approve = window.confirm(`Do you want to buy a ticket?`);

    if (approve && !allReservedInitalState[filmName.filmname].includes(index)) {
      initialState[ticketOwner][filmName.filmname].push(index);
      allReservedInitalState[filmName.filmname].push(index); 

      dispatch(
        ticketsData({
          tickets: initialState[ticketOwner]
        })
      );

      e.target.style.backgroundColor = "red"

      localStorage.setItem('allReservedTickets', JSON.stringify(allReservedInitalState)); 
      localStorage.setItem('reservedTickets', JSON.stringify(initialState));
    } else if(!approve) {
      alert("canceled")
    } else {
      alert("Ticket is already bougthed")
    }
  }
 
  return (
    <div className="tickets-container">
      {Array.from({ length: 50 }).map((item, index) =>(
        <button
         id={index} 
         onClick={(e) => handleTicketsBuying(e,index + 1)}
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
}

export default TicketsBar;
