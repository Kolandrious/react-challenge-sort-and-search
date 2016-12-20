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
      success: function(users) {
        this.setState({
          users: users,
        });
        console.log(users);
      }.bind(this)
    });
  }

  render() {
    if (!this.state) return (<p>...LOADING...</p>)
    return (
      <div>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}
