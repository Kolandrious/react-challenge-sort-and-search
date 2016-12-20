import React from 'react';

export default function(props) {
  return (
    <tr>
      <td>{props.user.image}</td>
      <td>{props.user.name}</td>
      <td>{props.user.age}</td>
      <td>{props.user.phone}</td>
    </tr>
  );
}
