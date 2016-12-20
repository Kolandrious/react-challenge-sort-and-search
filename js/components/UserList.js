import React from 'react';
import UserData from './UserData';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

  }
  renderUserData(user) {
    return (
      <UserData user={user} key={user.id}/>
    );
  }


  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.users.map(this.renderUserData)
          }
        </tbody>
      </table>
    );
  }
}
