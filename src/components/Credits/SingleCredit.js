import React from "react";

class SingleCredit extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.description}</li><br/>
                    <li>{this.props.amount}</li><br/>
                    <li>{this.props.date}</li><br/>
                </ul>
            </div>
        );
    }
}

export default SingleCredit;