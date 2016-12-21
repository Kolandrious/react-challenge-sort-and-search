import React, { Component } from 'react';
import UserList from './components/UserList';
import SelectedUser from './components/SelectedUser';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }

    $.ajax({
      url: './data.json',
      dataType: 'json',
      cache: false,
      success: function(users) {
        this.setState({
          users,
          selectedUser: users[0]
        });
        console.log(users);
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <SelectedUser user={this.state.selectedUser} />
        <UserList
          onUserSelect={user => this.setState({selectedUser: user})}
          users={this.state.users}
        />
      </div>
    );
  }
}
