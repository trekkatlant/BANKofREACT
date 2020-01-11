import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                userName: "",
                password: ""
            },
            redirect: false
        }
    };
    handleChange = (event) => {
        const updatedUser = {...this.state.user}
        const inputField = event.target.userName
        const inputValue = event.target.value 
        updatedUser[inputField] = inputValue
        
        this.setState({
            user: updatedUser
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.mockLogin(this.state.user)
        this.setState({
            redirect: true
        })
    };
    render() {
        if(this.state.redirect) {
            return(
                <Redirect to="userProfile"/>
            )
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name </label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password"/>
                    </div>
                    <button>Log in</button>
                </form>
            </div>
        ); 
    }
}

export default Login;