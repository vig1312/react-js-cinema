import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tableData } from '../Data/constants';
import { currentData, resetCurrentData } from '../store/actions/profileSlice';
import { changeAuth } from '../store/actions/authSlice';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../store/selectors/userInformation';

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
          username,
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
          <>
            <tr>
              <th>{title}</th>
            </tr>
            <tr>
              <td>{userInfo[key]}</td>
            </tr>
          </>
        ))}
      </table>
      <button onClick={handleLogOut} className="submit-button">
        Log Out
      </button>
    </section>
  );
};

export default Profile;
