import React, { Component } from 'react';
import UserList from './components/UserList';
import $ from 'jquery';

export default class App extends Component {
  constructor(props) {
    super(props);
    state: {
      users: null
    }
  }

  componentWillMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      async: false,
      success: function(users) {
        this.setState({
          users: users,
        });
        console.log(users);
      }.bind(this)
    });
  }

  render() {

    return (
      <div>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}
