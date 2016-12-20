import React from 'react';

export default function(props) {
  return (
    <tr>
      <td><img src={`../../images/${props.user.image}.svg`} alt="loading image" /></td>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.phone}</td>
    </tr>
  );
}
