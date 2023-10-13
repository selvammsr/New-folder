import React, { Component } from "react";

class SignInFrom extends Component{
    constructor(props){
        super(props);
            this.state = {
                username:'',
                password:'',
                errorMessage:'',
            };
        
    }
    handleUsernameChange = (e) =>{
        this.setState({username:e.target.value});
    }
    handlePasswordChange = (e) =>{
        this.setState({password:e.target.value});
    }
    handleSignIn = () =>{
        const {username,password} =this.state;

        if (username === 'yourUsername'&& password === 'yourPassword'){
            this.setState({errorMessage:'Sign in successfull!'});
        }else{
            this.setState({errorMessage:'Invalid username or password'});
        }
    }
    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <input 
                type="text"placeholder="Username"value={this.state.username} onChange={this.handleUsernameChange} />
               <br />
               <input type="password"placeholder="Password"value={this.state.password}onChange={this.handlePasswordChange}/>

               <br/>
               <button onClick={this.handleSignIn}>Sign In</button>
               <p>{this.state.errorMessage}</p>
            </div>
        );
    }
}

export default SignInFrom;