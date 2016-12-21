import React from 'react';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search people by name"
        value={this.state.value}
        onChange={(event) => this.setState({value: event.target.value})}
      />
    );
  }
}
