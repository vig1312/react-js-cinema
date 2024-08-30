import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { tableData } from '../Data/constants';
import { resetCurrentData, ticketsData } from '../store/actions/profileSlice';
import { userSelector } from '../store/selectors/userInfoSelector';

const Profile = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(userSelector);
  let tickets = {}; 
 
  if (localStorage.reservedTickets) { 
    const baseTickets = JSON.parse(localStorage.getItem('reservedTickets')); 
    tickets = baseTickets[userInfo.username]; 
  }
  const navigate = useNavigate();
  
  const purchased = Object.entries(tickets).filter((item) => item[1].length !== 0);
  const currentTickets = purchased.map((item, index) => {
    return (
    <div key={index}>
      <h3>{item.join("-")}</h3>
    </div>
    )
  }) 
 
  function handleLogOut() {
    localStorage.removeItem('loggedUser');
    dispatch(resetCurrentData({}));
    alert('logged Out Succesfully');
    navigate('/');
  }

  return (
    <section>
      <h1>personal info</h1>
      <table>
        {tableData.map(({ title, key }) => (
          <div key={key}>
            <tr>
              <th>{title}</th>
            </tr>
            <tr>
              <td>{userInfo[key]}</td>
            </tr>
          </div>
        ))}
      </table>
        {currentTickets}
      <button onClick={handleLogOut} className="submit-button">
        Log Out
      </button>
    </section>
  );
};

export default Profile;
