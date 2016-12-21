import React from 'react';
import UserData from './UserData';
import SelectedUser from './SelectedUser';

const UserList = (props) => {
  const renderUser = props.users.map((user) => {
    return (
      <UserData
        onUserSelect={props.onUserSelect}
        user={user}
        key={user.id}
      />
    );
  });

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
          renderUser
        }
      </tbody>
    </table>
  );
  }

export default UserList;
