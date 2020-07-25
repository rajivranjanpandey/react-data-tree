import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { history } from '../../config/app_config';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: {
                message: '',
                isError: false
            }
        }
    }
    componentDidMount() {
        // https://jsonplaceholder.typicode.com/todos/1
    }
    onSubmit = () => {
        const userName = this.userNameInput.value.trim();
        const password = this.passwordInput.value.trim();
        let isError = false;
        let errorState = this.state.error;
        if (!userName.length) {
            isError = true;
            errorState.message = 'Enter valid username';
        } else if (!password.length) {
            isError = true;
            errorState.message = 'Enter valid password';
        }
        if (isError) {
            errorState.isError = true;
            this.setState({ error: errorState });
        } else {
            localStorage.setItem('apa-2-token', userName);
            history.push('/');
        }
    }
    render() {
        return (
            // <div className="full-screen">
            <div className="login full-screen">
                <div className="login-form">
                    <h1>Login</h1>
                    <TextField inputRef={ref => this.userNameInput = ref} label="Username" />
                    <TextField type="password" inputRef={ref => this.passwordInput = ref} label="Password" />
                    {this.state.error.isError && <span className="error">{this.state.error.message}</span>}
                    <Button className="submit-btn" variant="contained" color="primary" onClick={() => this.onSubmit()}>Submit</Button>
                    <Link to='/register' className='other-mode-text'>Register</Link>

                </div>

            </div>
            // </div>
        )
    }
}
