import React, {Component} from 'react';
import UserList from './UserList';
import SelectedUser from './SelectedUser';
import SearchBar from './SearchBar';
import SortDisplayedUsers from './SortDisplayedUsers';

import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      displayedUsers: [],
      searchTerm: '',
      ageSorted: 'normal',
      nameSorted: 'normal'
    }

    $.ajax({
      url: './data.json',
      dataType: 'json',
      cache: false,
      success: function(acceptedUsers) {
        this.setState({
          users: acceptedUsers,
          displayedUsers: acceptedUsers,
          selectedUser: acceptedUsers[0]
        });
      }.bind(this)
    });

    this.buildNewUsersList = this.buildNewUsersList.bind(this);
    this.sortByAge = this.sortByAge.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  buildNewUsersList (term) {
    let newUsers = [];
    this.state.users.map((user) => {
      if (user.name.toLowerCase().includes(term)) {
        newUsers.push(user);
      }
    });
    this.setState({
      displayedUsers: newUsers,
      selectedUser: newUsers[0],
      searchTerm: term
    });
  }

  sortByName() {
    let newUsers = [];
    let newList = this.state.users.concat();
    if (this.state.nameSorted == 'normal') {
      newList.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
      this.setState({ nameSorted: 'reverse', ageSorted: 'normal' });
    } else {
      newList.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
      this.setState({ nameSorted: 'normal', ageSorted: 'normal' });
    }
    this.setState({ users: newList,  });

    newList.map((user) => {
      if (user.name.toLowerCase().includes(this.state.searchTerm)) {
        newUsers.push(user);
      }
    });

    this.setState({ displayedUsers: newUsers, selectedUser: newUsers[0], });
  }

  sortByAge() {
    let newUsers = [];
    let newList = this.state.users.concat();
    if (this.state.ageSorted == 'normal') {
      newList.sort((a, b) => { return (a.age - b.age) });
      this.setState({ ageSorted: 'reverse', nameSorted: 'normal' });
    } else {
      newList.sort((a, b) => { return (b.age - a.age) });
      this.setState({ ageSorted: 'normal', nameSorted: 'normal' });
    }
    this.setState({ users: newList,  });

    newList.map((user) => {
      if (user.name.toLowerCase().includes(this.state.searchTerm)) {
        newUsers.push(user);
      }
    });

    this.setState({ displayedUsers: newUsers, selectedUser: newUsers[0], });
  }



  render() {
    return (
      <div>
        <SearchBar search={this.buildNewUsersList} />
        <SortDisplayedUsers
        sortByAge={this.sortByAge}
        sortByName={this.sortByName}
        />
        <SelectedUser user={this.state.selectedUser} />
        <UserList
          onUserSelect={user => this.setState({selectedUser: user})}
          users={this.state.displayedUsers}
        />
      </div>
    );
  }


}
