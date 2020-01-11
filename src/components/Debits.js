import React from "react";
import { Link } from "react-router-dom";
import SingleDebit from "./SingleCard";

class Debits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            amount: 0
        }
    };
    handleItemChange = (event) => {
        this.setState({
            item: event.target.value
        })
    };
    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddDebit(this.state.item, this.state.amount);
    };
    render() {
        let debits = []
        for(let i of this.props.debits) {
            debits.push(<SingleDebit description={i.description} amount={i.amount} date={i.date}/>);
        }
        return(
            <div>
                <Link to="/home">Home</Link>
                <h1>Debits:</h1>
                <div>
                    <h2>Account Balance: ${this.props.accountBalance}</h2>
                    <h2>Total Debits: ${this.props.debitsTotal}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="Debit">Item: </label>
                            <input type="text" onChange={this.handleItemChange}/>
                        </div>
                        <div>
                            <label htmlFor="Amount">Amount: </label>
                            <input type="text" onChange={this.handleAmountChange}/>
                        </div>
                        <button>Add Debit</button>
                    </form>
                    <div>
                        {debits}
                    </div>
                </div>
            </div>
        );
    }
}

export default Debits;