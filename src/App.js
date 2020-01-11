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
      },
      debits: [],
      credits: [],
      debitTotal: 0,
      creditTotal: 0,
    }
  };
  mockLogin = (loginInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = loginInfo.username
    this.setState({
      currentUser: newUser
    })
  };
  calculateDebits = () => {
    let total =0
    for(let i of this.state.debits) {
      total += i.amount
    }
    this.setState({
      debitTotal: total
    })
  };
  calculateCredits = () => {
    let total =0
    for(i of this.state.credits) {
      total += i.amount
    }
    this.setState({
      creditTotal: total
    })
  };
  calculateAccountBalance = () => {
    let debitTotal = 0
    let creditTotal = 0
    for(let i of this.state.debits) {
      debitTotal += i.amount
    }
    for(let i of this.state.credits) {
      creditTotal += i.amount
    }
    this.setState({
      accountBalance: creditTotal - debitTotal
    })
  };
  handleAddCredit = (item, amount) => {
    let currBalance = this.state.accountBalance
    let newCredits = this.state.credits.concat([{
      description: item,
      amount: amount,
      date: new Date().toLocaleDateString()
    }]);
    let newTotal = this.state.creditTotal + parseInt(amount)
    this.setState({
      credits: newCredits,
      creditTotal: newTotal,
      accountBalance: currBalance + newTotal
    })
  };
  handleAddDebit = (item, amount) => {
    let currBalance = this.state.accountBalance
    let newDebits = this.state.debits.concat([{
      description: item,
      amount: amount,
      date: new Date().toLocaleDateString()
    }]);
    let newTotal = this.state.debitTotal + parseInt(amount)
    this.setState({
      debits: newDebits,
      debitTotal: newTotal,
      accountBalance: currBalance - newTotal
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
