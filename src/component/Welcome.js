import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { match } = this.props;
    const { username } = match.params;

    return <h2>Welcome, {username}!</h2>;
  }
}

export default Welcome;