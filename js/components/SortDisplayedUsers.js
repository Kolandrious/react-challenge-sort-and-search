import React from 'react';

const SortDisplayedUsers = (props) => {
  function handleClick (e) {
    e.preventDefault();
    props.sortByAge();
  }
  return (
    <form>
      <button onClick={handleClick}>BUTTON</button>
    </form>
  );
}

export default SortDisplayedUsers;
