import React, {Component} from 'react';
import UserList from './components/UserList';
import SelectedUser from './components/SelectedUser';
import SearchBar from './components/SearchBar';
import SortDisplayedUsers from './components/SortDisplayedUsers';

import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchTerm: '',
      displayedUsers: []
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
    console.log('built new user list on search');
  }

  sortByAge() {
    let newUsers = [];
    let newList = Array.from(this.state.users);
    newList.sort((a, b) => { return (a.age - b.age) });
    this.setState({ users: newList});

    newList.map((user) => {
      if (user.name.toLowerCase().includes(this.state.searchTerm)) {
        newUsers.push(user);
      }
    });

    this.setState({ displayedUsers: newUsers, selectedUser: newUsers[0], });
    // this.buildNewUsersList(this.state.searchTerm);
    console.log('sorted by age with term: ' + this.state.searchTerm);
  }



  render() {
    return (
      <div>
        <SearchBar search={this.buildNewUsersList} />
        <SortDisplayedUsers sortByAge={this.sortByAge} />
        <SelectedUser user={this.state.selectedUser} />
        <UserList
          onUserSelect={user => this.setState({selectedUser: user})}
          users={this.state.displayedUsers}
        />
      </div>
    );
  }


}
