import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tableData } from '../Data/constants';
import  {  resetCurrentData } from '../store/actions/profileSlice';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../store/selectors/userInformation';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector(userSelector);

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
        {tableData.map(({ title, key },index) => (
          <div key={index}>
            <tr>
              <th>{title}</th>
            </tr>
            <tr>
              <td>{userInfo[key]}</td>
            </tr>
          </div>
        ))}
      </table>
      <button onClick={handleLogOut} className="submit-button">
        Log Out
      </button>
    </section>
  );
};

export default Profile;
