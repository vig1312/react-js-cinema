import React, { useEffect } from 'react';

import { tableData } from '../Data/constants';
import UserInfo from '../store/selectors/userInfoSelector';
import { useSelector } from 'react-redux';

const Profile = () => {
  useEffect(() => {
    localStorage.setItem('registeredUsers',JSON.stringify([
      {
        username: 'hov123',
        password: 'hovo456',
        email: 'hovo.vardanyan@gmail.com',
        fullName: 'hovo vardanyan',
      },
      {
        username: 'vigen123',
        password: 'vigen456',
        email: 'vigen.vardanyan@gmail.com',
        fullName: 'vigen vardanyan',
      },
    ]),
  );
  }, []) 
  const userInfo = <UserInfo />;

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
    </section>
  );
};

export default Profile;
