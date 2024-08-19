import React from 'react';
import { useSelector } from 'react-redux';
import { tableData } from '../data/constants';


const Profile = () => {
  // const fullName = useSelector((state) =>  state.profile.loggedUser.fullName)
  // const email = useSelector((state) =>  state.profile.loggedUser.email)
  // const username = useSelector((state) =>  state.profile.loggedUser.username)
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