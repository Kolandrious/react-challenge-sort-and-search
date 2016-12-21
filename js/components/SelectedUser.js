import React from 'react';

const SelectedUser = ({ user }) => {
  if (!user) return (<h1>no user</h1>);

  return (
    <table>
    <tbody>
      <tr><td><img src={`../../images/${user.image}.svg`} alt="loading image" /></td></tr>
      <tr><td>{user.name}</td></tr>
      <tr><td>Age:</td><td>{user.age}</td></tr>
      <tr><td>Favorite animal:</td><td>{user.image}</td></tr>
      <tr><td>Phone:</td><td>{user.phone}</td></tr>
      <tr><td>Favorite phrase: {user.phrase}</td></tr>
    </tbody>
    </table>
  );
}

export default SelectedUser;
