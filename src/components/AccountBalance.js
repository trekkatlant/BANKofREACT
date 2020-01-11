import React from "react";

class AccountBalance extends React.Component {
    render() {
        return(
            <div>
                <h4>Balance: {this.props.accountBalance}</h4>
            </div>
        );
    }
}

export default AccountBalance;