import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { tableData } from '../Data/constants';
import { changeAuth } from '../store/actions/authSlice';
import { userSelector } from '../store/selectors/userInfoSelector';
import { currentData, resetCurrentData } from '../store/actions/profileSlice';

const Profile = () => {
  const userInfo = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.loggedUser) {
      const loggedUserData = JSON.parse(localStorage.getItem('loggedUser'));
      const { username, fullName, password, email } = loggedUserData;
      dispatch(
        currentData({
          email,
          fullName,
          password,
          username
        })
      );
    }
  }, []);

  function handleLogOut() {
    localStorage.removeItem('loggedUser');
    dispatch(changeAuth({ auth: false }));
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
      <button onClick={handleLogOut} className="submit-button">
        Log Out
      </button>
    </section>
  );
};

export default Profile;
