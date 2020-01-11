import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "bob_hu",
        memberSince: "4/20/69"
      }
    }
  };

  mockLogin = (loginInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = loginInfo.username
    this.setState({
      currentUser: newUser
    })
  };

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LoginComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}/>)
    return(
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
