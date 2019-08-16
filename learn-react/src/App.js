import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  getUsers() {
    axios("https://api.randomuser.me").then(response =>
      this.setState({ users: response.data.results })
    );
  }
  componentWillMount() {
    this.getUsers();
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map(user => (
          <div>
            <p>{user.cell}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
