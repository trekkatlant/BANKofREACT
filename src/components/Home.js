import React from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return(
            <div>
                <img src="https://www.moneycrashers.com/wp-content/uploads/2012/04/reasons-change-banks-1068x713.jpg" alt="bank" width="690" height="420"/>
                <h1>Bank of React</h1>
                <Link to="/userProfile">User Profile</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default Home;