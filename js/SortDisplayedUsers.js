import React from 'react';

const SortDisplayedUsers = (props) => {
  function handleSortByName(e) {
    e.preventDefault();
    props.sortByName();
  }
  function handleSortByAge(e) {
    e.preventDefault();
    props.sortByAge();
  }
  return (
    <form>
      <button onClick={handleSortByName}>sort by name</button>
      <button onClick={handleSortByAge}>sort by age</button>
    </form>
  );
}

export default SortDisplayedUsers;
