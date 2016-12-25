import React from 'react';

const SelectedUser = ({ user }) => {
  if (!user) return (<h1>no users</h1>);

  return (
    <table>
    <tbody>
      <tr><td><img src={`images/${user.image}.svg`} alt="loading image" height="200px"/></td></tr>
      <tr><td>{user.name}</td></tr>
      <tr><td>Age: {user.age}</td></tr>
      <tr><td>Favorite animal: {user.image}</td></tr>
      <tr><td>Phone: {user.phone}</td></tr>
      <tr><td width="400px">Favorite phrase: {user.phrase}</td></tr>
    </tbody>
    </table>
  );
}

export default SelectedUser;
