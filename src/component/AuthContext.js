import React, { createContext, Component } from 'react';

const AuthContext = createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: null,
      name: '', // Add the 'name' property to the state
    };
  }

  // Functions for handling authentication, such as login, logout, etc.

  render() {
    const { authenticated, user, name } = this.state;
    return (
      <AuthContext.Provider value={{ authenticated, user, name }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthContext };
