import React from 'react';
import { useSelector } from 'react-redux';
import { tableData } from '../Data/constants';

const Profile = () => {
	const userInfo = useSelector(state => state.profile.loggedUser)

  return <section>
		<h1>personal info</h1>
		<table>
			{
				tableData.map(({title, key}) => (
					<>
						<tr>
						<th>{title}</th>
						</tr>
					<tr>
						<td>{userInfo[key]}</td>
					</tr>
					</>
				))
			}
		</table>
	</section>
} 
 
export default Profile;