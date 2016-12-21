import React, { Component } from 'react';
import UserList from './components/UserList';
import SelectedUser from './components/SelectedUser';
import SearchBar from './components/SearchBar';
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
      success: function(users) {
        this.setState({
          users: users,
          displayedUsers: users,
          selectedUser: users[0]
        });
      }.bind(this)
    });

    this.buildNewUsersList = this.buildNewUsersList.bind(this);
  }

  buildNewUsersList (term) {
    let newUsers = [];
    this.state.users.map((user) => {
      if (user.name.toLowerCase().includes(term)) {
        newUsers.push(user);
      }
    });
  this.setState({displayedUsers: newUsers, selectedUser: newUsers[0]});
  }



  render() {
    return (
      <div>
        <SearchBar search={this.buildNewUsersList}/>
        <SelectedUser user={this.state.selectedUser} />
        <UserList
          onUserSelect={user => this.setState({selectedUser: user})}
          users={this.state.displayedUsers}
        />
      </div>
    );
  }


}
