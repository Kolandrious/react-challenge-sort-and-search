import React from 'react';

const UserData = ({ user, onUserSelect }) => {
  return (
    <tr onClick={() => onUserSelect(user)}>
      <td><img src={`../images/${user.image}.svg`} alt="loading image" /></td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.phone}</td>
    </tr>
  );
}

export default UserData;
